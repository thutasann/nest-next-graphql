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
  title: 'Nestjs Nextjs Graphql FullStack App',
  description:
    'This is the mini FullStack app crafted with Nestjs, Nextjs and Graphql',
  icons: {
    icon: '/logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={IBM.style.fontStyle}>
        <UrqlProvider>
          <CustomChakraProvider>{children}</CustomChakraProvider>
        </UrqlProvider>
      </body>
    </html>
  );
}
