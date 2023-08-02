import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import Footer from './Footer';

export const metadata: Metadata = {
  title: 'Connecticut Vacuum Repair',
  description:
    'Vacuum cleaner repair comapny servicing Connecticut, United States.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
