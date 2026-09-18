import defaultMdxComponents from 'fumadocs-ui/mdx';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import type { MDXComponents } from 'mdx/types';
import type { ImageProps } from 'fumadocs-core/framework';
import type { ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

function Image(props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <ImageZoom
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
      className={cn('rounded-lg', props.className)}
      {...(props as ImageProps)}
    />
  );
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    img: Image,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}