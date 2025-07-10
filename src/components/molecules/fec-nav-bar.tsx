'use client';

import { Stack } from "@mui/material";
import Typo from "../atoms/fec-typo";
import FECBasketCount from "./fec-basket-count";

export default function NavBar() {


    return <Stack sx={{
        width: '100%',
        height: '7vh',
        boxShadow: 'rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset',
        position: 'sticky',
        top: 0,
        bgcolor: '#fff',
        zIndex: 10
    }}>
        <Stack sx={{
            mx: '10px',
            height: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Typo>Frontend Case</Typo>
            <FECBasketCount />
        </Stack>
    </Stack>
}