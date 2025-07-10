'use client';

import { Button, ButtonProps } from "@mui/material";

export default function FECButton(props: ButtonProps) {

    return <Button variant={'contained'} {...props}>{props.children}</Button>
}