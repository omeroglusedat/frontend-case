import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import Providers from "./providers";
import FECNavBar from "@/components/molecules/fec-nav-bar";

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});
export const metadata: Metadata = {
  title: "frontend-case",
  description: "frontend-case so",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans`} style={{ margin: 0, position: 'relative' }}>
        <Providers>
          <>
            <FECNavBar />
            {children}
          </>
        </Providers>
      </body>
    </html>
  );
}
