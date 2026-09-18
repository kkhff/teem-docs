import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2 font-bold">
          <Image
            src="/image/logo.webp"
            alt="teem.id"
            width={88}
            height={25}
            className="h-6 w-auto object-contain rounded dark:hidden"
          />
          <Image
            src="/image/logo1.webp"
            alt="teem.id dark"
            width={88}
            height={25}
            className="hidden h-6 w-auto object-contain rounded dark:block"
          />
        </div>
      ),
    },
    // Menambahkan link di Top Navbar atas
  };
}