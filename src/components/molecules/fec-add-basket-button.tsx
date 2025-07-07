'use client';

import FECButton from "../atoms/fec-button";
import { ProductSliceType, addBasketItem, removeBasketItem } from "@/redux/product-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function FECAddBasketButton({ id, price }: { id: number, price: number }) {
    const dispatch = useDispatch();
    const basketItems = useSelector((state: { productSlice: ProductSliceType }) => state.productSlice.basketItems);

    const [buttonAction, setButtonAction] = useState<'add' | 'delete'>('add');

    useEffect(() => {
        if (basketItems.filter((f) => f.id === id).length > 0)
            setButtonAction('delete');
        else
            setButtonAction('add')
    }, [basketItems])


    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        if (buttonAction === 'add')
            dispatch(addBasketItem(id));
        else
            dispatch(removeBasketItem(id))

    }

    return <FECButton
        variant={'contained'}
        color={buttonAction === 'add' ? 'success' : 'error'}
        onClick={handleClick}>
        {buttonAction === 'add' ? `${price} ₺` : 'Çıkar'}
    </FECButton>
}