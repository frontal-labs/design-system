import { existsSync, promises as fs } from 'node:fs';
import path from 'node:path';
import { z } from 'zod';
import { registrySchema } from '../src/lib/schema';

const registriesIndexSchema = z.record(
  z.string().regex(/^@[a-zA-Z0-9][a-zA-Z0-9-_]*$/),
  z.string().refine((url) => url.includes('{name}')),
);

async function validateRegistriesFile(filePath: string) {
  try {
    if (!existsSync(filePath)) {
      console.log(`⚠️  Registries file not found at ${filePath}`);
      return false;
    }

    const content = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(content);
    const registries = registriesIndexSchema.parse(data);

    console.log('✅ Registries file validation passed');
    return registries;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('❌ Registries file validation failed:', error.message);
    } else {
      console.error('❌ Error reading registries file:', error);
    }
    return false;
  }
}

async function validateRegistryEndpoint(name: string, url: string) {
  try {
    const testUrl = url.replace('{name}', 'registry');
    console.log(`🔍 Validating ${name} at ${testUrl}...`);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(testUrl, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const json = await response.json();
    registrySchema.parse(json);
    console.log(`✅ ${name} - Registry validation passed`);
    return true;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error(`❌ ${name} - Schema validation failed:`, error.message);
    } else {
      console.error(
        `❌ ${name} - Validation failed:`,
        error instanceof Error ? error.message : String(error),
      );
    }
    return false;
  }
}

async function main() {
  try {
    console.log('🔍 Starting registry validation...');

    // 1. Validate the registries.json file.
    const registriesFile = path.join(process.cwd(), 'public/r/registries.json');
    const registries = await validateRegistriesFile(registriesFile);

    if (!registries) {
      console.error('❌ Cannot proceed without valid registries file');
      process.exit(1);
    }

    // 2. Validate each registry endpoint.
    const results = await Promise.allSettled(
      Object.entries(registries).map(([name, url]) =>
        validateRegistryEndpoint(name, url),
      ),
    );

    const failures = results
      .map((result, index) => ({ result, index }))
      .filter(
        ({ result }) => result.status === 'rejected' || result.value === false,
      );

    if (failures.length > 0) {
      console.error(`\n❌ ${failures.length} registry validation(s) failed:`);
      failures.forEach(({ result, index }) => {
        const [name] = Object.entries(registries)[index];
        if (result.status === 'rejected') {
          console.error(`   ${name}: ${result.reason}`);
        } else {
          console.error(`   ${name}: Validation failed`);
        }
      });
      process.exit(1);
    }

    console.log('\n✅ All registries passed validation!');
  } catch (error) {
    console.error('❌ Error:', error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

main();
