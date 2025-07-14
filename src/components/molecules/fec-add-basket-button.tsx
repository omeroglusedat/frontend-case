'use client';

import { useProductContext } from "@/hooks/useProductContext";
import FECButton from "../atoms/fec-button";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function FECAddBasketButton({ id, price }: { id: number, price: number }) {
    const t = useTranslations('frontEndCase');
    const { basketItems, addBasketItem, removeBasketItem } = useProductContext();
    const [buttonAction, setButtonAction] = useState<'add' | 'delete'>('add');

    useEffect(() => {
        if (basketItems && basketItems.filter((f) => f.id === id).length > 0)
            setButtonAction('delete');
        else
            setButtonAction('add')
    }, [basketItems]);


    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        if (buttonAction === 'add')
            addBasketItem(id);
        else
            removeBasketItem(id);
    }

    return <FECButton
        variant={buttonAction === 'add' ? 'primary' : 'secondary'}
        onClick={handleClick}>
        {buttonAction === 'add' ? `${price} ₺` : t('takeOutProdcut')}
    </FECButton>
}