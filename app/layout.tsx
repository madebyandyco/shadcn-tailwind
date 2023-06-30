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
  variable: '--font-mono',
});
import { ThemeProvider } from '@/components/theme-provider';
import '../styles/styles.css';

const metadata = {
  title: 'Next.JS | Tailwind | ShadcnUI',
  description: 'Next.JS demo with darkmode',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
