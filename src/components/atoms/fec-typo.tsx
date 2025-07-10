'use client';

import { Typography, TypographyProps } from "@mui/material";

export default function FECTypo(props: TypographyProps) {
    return <Typography {...props}>
        {props.children}
    </Typography>
}