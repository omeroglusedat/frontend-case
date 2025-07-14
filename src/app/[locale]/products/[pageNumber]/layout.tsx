import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import { NextIntlClientProvider } from "next-intl";
import PContext from "@/contexts/product-context";
import { ProductType } from "@/components/organisms/products-container";
import FECNavBar from "@/components/molecules/fec-nav-bar";
import BContext from "@/contexts/basket-context";

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat',
});
export const metadata: Metadata = {
    title: "frontend-case",
    description: "frontend-case so",
};


export type ServerSideComponentProps = {
    searchParams: { [key: string]: string | string[] | undefined };
    params: { [key: string]: string | string[] | undefined }
};


export async function getTotalProductCount() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data.length;
}

const getProducts = async (page: number) => {
    const response = await fetch(`https://fakestoreapi.com/products?limit=${page * 10}`);
    const json = response.json();
    return json;
}


export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locale: string, pageNumber: string };
}) {
    const { pageNumber } = params;
    const productCount = await getTotalProductCount();
    const data = await getProducts(Number(pageNumber));

    return (
        <html>
            <body className={`${montserrat.variable} font-sans`} style={{ margin: 0, position: 'relative' }}>
                <NextIntlClientProvider>
                    <PContext _productList={data as ProductType[]} _productCount={productCount}>
                        <BContext>
                            <>
                                <FECNavBar />
                                {children}
                            </>
                        </BContext>
                    </PContext>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
