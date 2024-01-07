import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Gotham's Gourmet",
  description: 'Culinary Adventures from the Batcave',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <nav>
            <h1>Gothams Gourmet</h1>
            <h3>Culinary Adventures from the Batcave</h3>
          </nav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
