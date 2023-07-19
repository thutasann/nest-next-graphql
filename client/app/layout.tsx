import './globals.css';
import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import CustomChakraProvider from '@/providers/chakra';
import UrqlProvider from '@/providers/urql';

const IBM = IBM_Plex_Sans({
  weight: '700',
  subsets: ['latin'],
  display: 'auto',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Nestjs Nextjs Graphql',
  description:
    'This is the mini FullStack app crafted with Nestjs, Nextjs and Graphql',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(IBM.className, ' bg-dark text-light')}>
        <UrqlProvider>
          <CustomChakraProvider>{children}</CustomChakraProvider>
        </UrqlProvider>
      </body>
    </html>
  );
}
