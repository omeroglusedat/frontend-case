import ProductsContainer, { ProductType } from "@/components/organisms/products-container";

export type ServerSideComponentProps = {
    searchParams: { [key: string]: string | string[] | undefined };
    params: { [key: string]: string | string[] | undefined }
};

const getProducts = async (page: number) => {
    const response = await fetch(`https://fakestoreapi.com/products?limit=${page * 10}`);
    const json = response.json();
    return json;
}


export default async function Products({ searchParams }: ServerSideComponentProps) {
    const page = await searchParams.page;
    const data = await getProducts(Number(page) || 1);

    return <ProductsContainer productList={data as ProductType[]} />
}