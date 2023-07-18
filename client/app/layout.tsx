import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import CustomChakraProvider from '@/providers/chakra';

const inter = Poppins({
  weight: '500',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nest Next Graphql FullStack App',
  description: 'This is the Nestjs Nextjs FullStak app',
  icons: {
    icon: '/logo.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomChakraProvider>{children}</CustomChakraProvider>
      </body>
    </html>
  );
}
