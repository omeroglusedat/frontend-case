'use client';

import FECBasketCount from "./fec-basket-count";
import LanguageSelection from "./language-selection";
import FECStack from "../atoms/fec-stack";
import FECTypo from "../atoms/fec-typo";

export default function NavBar() {


    return <FECStack
        style={{
            width: '100%',
            height: '7vh',
            boxShadow: 'rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset',
            position: 'sticky',
            top: 0,
            background: '#fff',
            zIndex: 10

        }}>
        <FECStack style={{
            marginLeft: '10px',
            marginRight: '10px',
            height: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }} >
            <FECTypo variant={'h3'}>Frontend Case</FECTypo>
            <FECStack style={{flexDirection: 'row', gap: '20px', alignItems: 'center'}}>
                <FECBasketCount />
                <LanguageSelection />
            </FECStack>
        </FECStack>
    </FECStack>
}