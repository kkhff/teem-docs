import { source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { icons, type LucideIcon } from 'lucide-react';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const Icon = page.data.icon
    ? (icons as Record<string, LucideIcon>)[page.data.icon]
    : undefined;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle className="inline-flex items-center gap-2">
        {Icon ? <Icon className="size-8 shrink-0" /> : null}
        {page.data.title}
      </DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

// FUNGSI INI YANG DIGANTI UNTUK MENGUNCI TITLE TAB BROWSER
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Dokumentasi teem.id',
  };
}