import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { DocsHeader } from '@/components/docs-header';
import type { CSSProperties } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const base = baseOptions();

  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...base}
      nav={{ 
        ...base.nav, 
        enabled: true,
      }}
      // Hilangkan tombol bawaan sidebar agar tidak duplikat dengan DocsHeader
      searchToggle={{ enabled: false }}
      themeSwitch={{ enabled: false }}
      slots={{ header: DocsHeader }}
      sidebar={{
        collapsible: true,
      }}
      containerProps={{
        style: {
          gridTemplate:
            '"header header header header header"\n' +
            '"sidebar sidebar toc-popover toc toc"\n' +
            '"sidebar sidebar main toc toc" 1fr / ' +
            'minmax(min-content, 1fr) var(--fd-sidebar-col) ' +
            'minmax(0, calc(var(--fd-layout-width,97rem) - var(--fd-sidebar-width) - var(--fd-toc-width))) ' +
            'var(--fd-toc-width) minmax(min-content, 1fr)',
          '--fd-docs-row-1': 'var(--fd-header-height)',
          '--fd-header-height': '3.5rem',
        } as CSSProperties,
      }}
    >
      {children}
    </DocsLayout>
  );
}