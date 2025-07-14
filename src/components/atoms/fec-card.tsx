'use client';

import { media } from "@/styles/media";
import React from "react";
import styled from "styled-components";

export interface FECCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    mobilestyles?: string | null
}


const StyledCard = styled.div<FECCardProps>`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    border-radius: 10px;
    z-index: 9;
    transition: .5s;
    width: 227px;
    display: flex;

    ${media.desktop`
        width: 225px;
        max-width: 225px;
    `}

    ${media.tablet`
        width: 227px;
    `}

    ${media.mobile`
        width: 100%;
    `}

    ${({ mobilestyles }) => {
        if (mobilestyles) {
            return media.mobile([mobilestyles] as unknown as TemplateStringsArray)
        }
    }}    

    &:hover {
        cursor: pointer;
        background: #f5f2f2;
    }
`


export default function FECCard({ children, ...rest }: FECCardProps) {

    return <StyledCard {...rest}>{children}</StyledCard>
}