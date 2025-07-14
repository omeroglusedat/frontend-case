'use client';

import { media } from "@/styles/media";
import React from "react";
import styled, { css } from "styled-components";


export interface FECStackProps extends React.HTMLAttributes<HTMLDivElement> {
    hover?: string | null,
    mobilestyles?: string | null
}

const StyledDiv = styled.div<FECStackProps>`
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    ${({ hover }) => {
        if (hover)
            return `
            &: hover ${hover}
       `
    }}

    ${({ mobilestyles }) => {
        if (mobilestyles) {
            return media.mobile([mobilestyles] as unknown as TemplateStringsArray)
        }
    }}
`

export default function FECStack({ children, hover = null, ...rest }: FECStackProps) {

    return <StyledDiv hover={hover} {...rest}>{children}</StyledDiv>
}