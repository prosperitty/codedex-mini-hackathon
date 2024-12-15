import type { Metadata } from 'next';
import { Geist, Geist_Mono, Tektur, Silkscreen } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const tektur = Tektur({
  variable: '--font-tektur',
  subsets: ['latin'],
});

const silkScreen = Silkscreen({
  // variable: '--font-silkscreen',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Arcade.io',
  description:
    'Play free online games. Immerse yourself in this retro themed arcade webpage while you sit back, relax, and enjoy playing a video game!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tektur.variable} ${silkScreen.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
