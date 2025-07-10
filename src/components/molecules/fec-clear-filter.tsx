'use client';

import { useRouter, useSearchParams } from "next/navigation";
import FECButton from "../atoms/fec-button";
import { useTranslations } from "next-intl";

export default function FECClearFilter() {
    const t = useTranslations('frontEndCase');
    const router = useRouter();
    const searchParams = useSearchParams();
    const page = searchParams.get('p');
    
    const handleClick = () => {
        let str = `${window.location.pathname}`;
        if (page)
            str += `?p=${page}`

        router.replace(str);
    }

    return <FECButton onClick={handleClick}>
        {t('clearFilter')}
    </FECButton>
}