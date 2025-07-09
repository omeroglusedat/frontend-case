'use client';

import { TextField, TextFieldProps } from "@mui/material";
import { useTranslations } from "next-intl";

export default function FECInput(props: TextFieldProps) {
    const t = useTranslations('frontEndCase');
    return <TextField sx={{ width: '100%' }} size={'small'} {...props} placeholder={t('search')} />
}