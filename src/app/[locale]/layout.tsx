import '@/app/globals.css';
import { Poppins as FontSans } from 'next/font/google';

import { cn } from '@/lib/utils';
import { Header } from '@/components/page-header';
import { Toaster } from '@/components/ui/toaster';

import { ThemeProvider } from '@/components/theme-provider';
import Footer from '@/components/footer';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { SpeedInsights } from '@vercel/speed-insights/next';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '700'],
});

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="theme"
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Footer />
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
