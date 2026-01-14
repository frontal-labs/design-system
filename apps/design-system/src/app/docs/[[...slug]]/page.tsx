import { source } from "@/lib/source";
import {
    DocsPage,
    DocsBody,
    DocsDescription,
    DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";

export default async function Page(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const { slug } = await props.params;
    const page = source.getPage(slug);
    if (!page) notFound();

    // In Fumadocs v16, page.data usually contains the parsed frontmatter 
    // The MDX component is available as page.data.body
    const MDX = (page.data as any).body;

    return (
        <DocsPage toc={(page.data as any).toc} full={(page.data as any).full}>
            <DocsTitle>{(page.data as any).title}</DocsTitle>
            <DocsDescription>{(page.data as any).description}</DocsDescription>
            <DocsBody>
                <MDX />
            </DocsBody>
        </DocsPage>
    );
}

export async function generateStaticParams() {
    return source.generateParams();
}

export async function generateMetadata(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const { slug } = await props.params;
    const page = source.getPage(slug);
    if (!page) notFound();

    return {
        title: (page.data as any).title,
        description: (page.data as any).description,
    };
}
