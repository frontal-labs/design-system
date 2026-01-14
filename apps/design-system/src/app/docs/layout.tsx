import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { ReactNode } from "react";
import { source } from "@/lib/source";

export default function RootDocsLayout({ children }: { children: ReactNode }) {
    return (
        <RootProvider>
            <DocsLayout
                tree={source.pageTree}
                nav={{ title: "Frontal Design System" }}
            >
                {children}
            </DocsLayout>
        </RootProvider>
    );
}
