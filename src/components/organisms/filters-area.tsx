'use client';
import { useState } from "react";
import FECTypo from "../atoms/fec-typo";
import FECSortPrice from "../molecules/fec-sort-price";
import FECCategoryFilter from "../molecules/fec-category-filter";
import FECSliderRange from "../atoms/fec-slider-range";
import { useTranslations } from "next-intl";
import FECClearFilter from "../molecules/fec-clear-filter";
import FECStack from "../atoms/fec-stack";
import { isMobile } from 'react-device-detect';
import FECButton from "../atoms/fec-button";

export default function FiltersArea() {
    const t = useTranslations('frontEndCase');
    const [openFilterArea, setOpenFilterArea] = useState<boolean>(false);


    const FArea = () => {
        return <FECStack
            mobilestyles={`
        width: 100% !important;
        // margin: 10px;
        z-index: 1300
        `}
            style={{
                flexDirection: 'column',
                width: '20%',
                height: 'max-content',
                background: '#fff',
                position: 'sticky',
                paddingBottom: '10px',
                top: '7vh',
                gap: '10px'
            }} >
            <FECStack style={{ margin: '10px' }}>
                <FECSortPrice />
                <FECCategoryFilter />
                <FECStack>
                    <FECTypo variant={'body2'}>{t('priceRange')}</FECTypo>
                    <FECSliderRange />
                </FECStack>
                <FECClearFilter />
            </FECStack>
        </FECStack>
    }

    if (!isMobile)
        return <FArea />


    return <FECStack style={{ width: '100%', alignItems: 'center' }}>
        {
            openFilterArea && <FArea />
        }
        <FECButton
            style={{
                width: '95%'
            }}
            variant={'secondary'}
            onClick={() => setOpenFilterArea(!openFilterArea)}>
            {t(openFilterArea ? 'closeFilters' : 'openFilters')}
        </FECButton>
    </FECStack>

}