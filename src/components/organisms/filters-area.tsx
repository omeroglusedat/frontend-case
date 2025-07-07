'use client';

import { Stack } from "@mui/material";
import FECTypo from "../atoms/fec-typo";

export default function FiltersArea() {


    return <Stack width={'20%'} height={'max-content'} bgcolor={'red'} position={'sticky'} top={'8vh'}>
        <FECTypo>Filters Area</FECTypo>
    </Stack>

}