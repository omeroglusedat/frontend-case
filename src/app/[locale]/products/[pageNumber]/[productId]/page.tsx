

import FECTypo from "@/components/atoms/fec-typo";
import ProductDetail from "@/components/organisms/product-detail";
import FECStack from "@/components/atoms/fec-stack";
import { ServerSideComponentProps } from "../../../layout";


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

    return <FECStack style={{
        width: '100%',
        height: '93vh',
        // justifyContent: 'center',
        alignItems: 'center'
    }} >
        {
            productDetail === 'error' && <FECTypo>Ürün Bulunamadı</FECTypo>
        }
        {
            productDetail !== 'error' && <ProductDetail product={productDetail} />
        }
    </FECStack>
}