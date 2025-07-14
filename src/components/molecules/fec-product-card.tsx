'use client';
import { ProductType } from "../organisms/products-container";
import FECProductImage from "../atoms/fec-product-image";
import FECTypo from "../atoms/fec-typo";
import FECAddBasketButton from "./fec-add-basket-button";
import { usePathname, useRouter } from "next/navigation";
import FECCard from "../atoms/fec-card";
import FECStack from "../atoms/fec-stack";
import { MdOutlineReviews } from "react-icons/md";

export default function FECProductCard({ product }: { product: ProductType }) {
    const router = useRouter();
    const pathname = usePathname();

    return <FECCard
        mobilestyles={`
            height: 210px !important;
        `}
        style={{
            height: '360px',
            alignItems: 'center',
            justifyContent: 'center'
        }}
        onClick={() => {
            router.push(`${pathname}/${product.id}`)
        }}>
        <FECStack mobilestyles={`flex-direction: row;`} style={{ width: '92%', margin: '10px', height: '92%', alignItems: 'center', justifyContent: 'center' }}>
            <FECProductImage src={product.image} />
            <FECStack style={{
                width: '100%',
                justifyContent: 'space-between',
                height: '100%'
            }}>
                <FECStack style={{
                    width: '100%',
                    gap: '10px'
                }}>
                    <FECTypo variant={'caption'}>{product.category}</FECTypo>
                    <FECTypo variant={'title'} >{product.title}</FECTypo>
                    <FECStack style={{
                        flexDirection: 'row',
                        gap: '5px'
                    }}>
                        <MdOutlineReviews fontSize={'16px'} color={'orange'} />
                        <FECTypo variant={'caption'}>{product.rating.rate}</FECTypo>
                    </FECStack>
                </FECStack>
                <FECAddBasketButton id={product.id} price={product.price} />
            </FECStack>
        </FECStack>
    </FECCard>
}