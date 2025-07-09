import { Stack } from "@mui/material";
import { ServerSideComponentProps } from "../page";
import { error } from "console";
import FECTypo from "@/components/atoms/fec-typo";
import ProductDetail from "@/components/organisms/product-detail";


const getProductById = async (productId: string) => {
    if (!Number(productId))
        return 'error'
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const json = await response.json();
    return json;
}



export default async function ProductDetailById({ params }: ServerSideComponentProps) {
    const productId = params.productId;
    const productDetail = await getProductById(productId as string);
    return <Stack height={'93vh'} width={'100%'} justifyContent={'start'} alignItems={'center'}>
        {
            productDetail === 'error' && <FECTypo>Ürün Bulunamadı</FECTypo>
        }
        {
            productDetail !== 'error' && <ProductDetail product={productDetail}/>
        }
    </Stack>
}