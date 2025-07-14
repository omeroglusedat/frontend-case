'use client';

import React from 'react';
import styled from 'styled-components';

export interface FECTypoProps extends React.HTMLAttributes<HTMLElement> {
    as?: keyof JSX.IntrinsicElements;
    variant?: 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'caption' | 'title';
    children?: React.ReactNode;
    hover?: string | null
}

const TypoBase = styled.span<FECTypoProps>`
  margin: 0;
  padding: 0;
  color: inherit;

  ${({ variant }) => {
        switch (variant) {
            case 'h1':
                return `font-size: 2rem; font-weight: 700;`;
            case 'h2':
                return `font-size: 1.5rem; font-weight: 600;`;
            case 'h3':
                return `font-size: 1.2rem; font-weight: 600;`;
            case 'body1':
                return `font-size: 1rem; font-weight: 400;`;
            case 'body2':
                return `font-size: 0.875rem; font-weight: 400;`;
            case 'caption':
                return `font-size: 0.75rem; font-weight: 300; color: #888;`;
            case 'title':
                return `
                font-size: 14px; 
                font-weight: 300; 
                color: #888;
                display: -webkit-box;
                -webkit-line-clamp: 2; 
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;`;

            default:
                return '';
        }
    }};

    ${({ hover }) => {
        if (hover)
            return `
            &:hover ${hover}
       `
    }}
`;

export default function FECTypo({
    children,
    as = 'span',
    variant = 'body1',
    hover = null,
    ...rest
}: FECTypoProps) {
    return (
        <TypoBase as={as} hover={hover} variant={variant} {...rest}>
            {children}
        </TypoBase>
    );
}
