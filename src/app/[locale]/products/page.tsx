import ProductsContainer, { ProductType } from "@/components/organisms/products-container";

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


export default async function Products({ searchParams }: ServerSideComponentProps) {
    const page = searchParams.p;
    const productCount = await getTotalProductCount();
    const data = await getProducts(Number(page) || 1);


    return <ProductsContainer productList={data as ProductType[]} productCount={productCount} />
}