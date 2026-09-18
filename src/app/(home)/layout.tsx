import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dokumentasi teem.id',
  description: 'Dokumentasi resmi platform teem.id',
  // Tambahkan konfigurasi favicon di sini
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}