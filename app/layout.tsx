import { CartProvider } from 'components/cart/cart-context';
import { Navbar } from 'components/layout/navbar';
import { WelcomeToast } from 'components/welcome-toast';
import { GeistSans } from 'geist/font/sans';
import { getCart } from 'lib/shopify';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import Script from 'next/script';
import './globals.css';
import { baseUrl } from 'lib/utils';

const { SITE_NAME } = process.env;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  }
};

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  // No esperamos la promesa aquí, la pasamos al provider
  const cart = getCart();

  return (
    <html lang="en" className={GeistSans.variable} suppressHydrationWarning>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">

        {/* Script para aplicar tema antes de hidratar */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function () {
              try {
                var saved = localStorage.getItem('theme');
                var c = document.documentElement.classList;
                if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  c.add('dark');
                } else {
                  c.remove('dark');
                }
              } catch (e) {}
            })();
          `}
        </Script>

        <CartProvider cartPromise={cart}>
          <Navbar />
          <main>
            {children}
            <Toaster closeButton />
            <WelcomeToast />
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
