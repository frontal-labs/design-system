import { existsSync } from 'node:fs';
import path from 'node:path';
import { registry } from '../src/registry/index';

const REGISTRY_PATH = path.join(process.cwd(), 'public/r');

// Helper function to get block IDs without circular dependency
function getAllBlockIds(): string[] {
  return registry.items
    .filter(
      (item) =>
        item.type === 'registry:block' && !item.name.startsWith('chart-'),
    )
    .map((item) => item.name);
}

// ----------------------------------------------------------------------------
// Capture screenshots.
// ----------------------------------------------------------------------------
async function captureScreenshots() {
  try {
    // Check if puppeteer is available
    let puppeteer: any;
    try {
      puppeteer = (await import('puppeteer')) as any;
    } catch {
      console.error(
        '❌ Puppeteer is not installed. Please install it with: pnpm add -D puppeteer',
      );
      process.exit(1);
    }

    const blockIds = getAllBlockIds();
    const blocks = blockIds.filter((block) => {
      // Check if screenshots already exist
      const lightPath = path.join(
        REGISTRY_PATH,
        `styles/components/${block}-light.png`,
      );
      const darkPath = path.join(
        REGISTRY_PATH,
        `styles/components/${block}-dark.png`,
      );
      return !existsSync(lightPath) || !existsSync(darkPath);
    });

    if (blocks.length === 0) {
      console.log('✨ All screenshots exist, nothing to capture');
      return;
    }

    console.log(`📸 Found ${blocks.length} blocks to capture screenshots for`);

    const browser = await puppeteer.launch({
      defaultViewport: {
        width: 1440,
        height: 900,
        deviceScaleFactor: 2,
      },
    });

    for (const block of blocks) {
      const pageUrl = `http://localhost:4000/view/${block}`;

      try {
        const page = await browser.newPage();
        await page.goto(pageUrl, {
          waitUntil: 'networkidle2',
          timeout: 30000, // 30 second timeout
        });

        console.log(`- Capturing ${block}...`);

        for (const theme of ['light', 'dark']) {
          const screenshotPath = path.join(
            REGISTRY_PATH,
            `styles/components/${block}${theme === 'dark' ? '-dark' : '-light'}.png`,
          );

          if (existsSync(screenshotPath)) {
            continue;
          }

          // Set theme and reload page
          await page.evaluate((currentTheme) => {
            localStorage.setItem('theme', currentTheme);
          }, theme);

          await page.reload({ waitUntil: 'networkidle2' });

          // Wait for animations to complete
          if (block.startsWith('chart') || block.startsWith('dashboard')) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
          }

          // Hide Tailwind indicator
          await page.evaluate(() => {
            const indicator = document.querySelector(
              '[data-tailwind-indicator]',
            );
            if (indicator) {
              indicator.remove();
            }
          });

          await page.screenshot({
            path: screenshotPath,
          });
        }

        await page.close();
      } catch (error) {
        console.error(`❌ Failed to capture ${block}:`, error);
        // Continue with next block instead of failing completely
      }
    }

    await browser.close();
  } catch (error) {
    console.error('❌ Error during screenshot capture:', error);
    throw error;
  }
}

async function main() {
  try {
    console.log('🔍 Capturing screenshots...');
    await captureScreenshots();
    console.log('✅ Screenshot capture completed!');
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

main();
