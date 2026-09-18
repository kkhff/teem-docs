"use client";

import type { ComponentProps } from 'react';
import { cn } from '@/lib/cn';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { useDocsLayout } from 'fumadocs-ui/layouts/docs';
import { LinkItem, type LinkItemType } from 'fumadocs-ui/layouts/shared';
import {
  FullSearchTrigger,
  SearchTrigger,
} from 'fumadocs-ui/layouts/shared/slots/search-trigger';
import { ThemeSwitch } from 'fumadocs-ui/layouts/shared/slots/theme-switch';
import { SidebarIcon } from 'lucide-react';

export function DocsHeader(props: ComponentProps<'header'>) {
  const { slots, navItems } = useDocsLayout();

  const links = navItems.filter(
    (item): item is Extract<LinkItemType, { url: string }> =>
      item.type !== 'icon' && item.type !== 'menu' && 'url' in item,
  );

  return (
    <header
      id="nd-subnav"
      {...props}
      className={cn(
        '[grid-area:header] sticky top-0 z-30 flex h-14 items-center gap-1.5 border-b bg-fd-background/80 ps-4 pe-2.5 backdrop-blur-lg transition-colors',
        props.className,
      )}
    >
      <div className="flex flex-1 items-center gap-1">
        <ul className="hidden flex-row items-center gap-1 lg:flex">
          {links.map((item, i) => (
            <LinkItem
              key={i}
              item={item}
              className="px-2 text-sm text-fd-muted-foreground transition-colors hover:text-fd-accent-foreground"
            />
          ))}
        </ul>
      </div>

      <FullSearchTrigger
        hideIfDisabled
        className="absolute inset-x-0 top-1/2 mx-auto hidden w-full max-w-64 -translate-y-1/2 rounded-full ps-2.5 lg:inline-flex"
      />

      <div className="flex flex-1 items-center justify-end gap-1.5">
        <SearchTrigger hideIfDisabled className="p-2 lg:hidden" />
        <ThemeSwitch className="px-2.5" />
        <slots.sidebar.trigger
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'icon-sm', className: 'p-2' }),
            'md:hidden',
          )}
        >
          <SidebarIcon />
        </slots.sidebar.trigger>
      </div>
    </header>
  );
}