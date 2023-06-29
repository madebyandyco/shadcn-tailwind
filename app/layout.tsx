'use client';

import './globals.css';
import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  // weight: ['400'],
  variable: '--font-mono',
});

import '../styles/styles.css';
//
import { ThemeProvider } from '@/components/theme-provider';

const metadata = {
  title: 'Next.JS | Tailwind | ShadcnUI',
  description: 'Next.JS demo with darkmode',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className={`antialiased ${mono.variable} ${inter.variable}`}>
        <head />
        <body className="font-inter">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
