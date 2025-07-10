import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import Providers from "./providers";
import FECNavBar from "@/components/molecules/fec-nav-bar";
import { NextIntlClientProvider } from "next-intl";

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});
export const metadata: Metadata = {
  title: "frontend-case",
  description: "frontend-case so",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans`} style={{ margin: 0, position: 'relative' }}>
        <NextIntlClientProvider>
          <Providers>
            <>
              <FECNavBar />
              {children}
            </>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
