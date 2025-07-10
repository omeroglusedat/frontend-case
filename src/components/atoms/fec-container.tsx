'use client';

import { Container, ContainerProps } from "@mui/material";

export default function FECContainer(props: ContainerProps) {


    return <Container {...props}>
        {props.children}
    </Container>
}