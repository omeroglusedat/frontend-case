'use client';

import styled from 'styled-components';
import React from 'react';
import { media } from '@/styles/media';


export interface FECContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variants?: 'default' | 'media'
}

const StyledContainer = styled.div<FECContainerProps>`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 8px;

  ${({ variants }) => {
    switch (variants) {
      case 'default':
        return `
        ${media.desktop`
          display: flex;
          flex-direction: row;
        `}

        ${media.tablet`
          display: flex;
          flex-direction: column;
        `}

        ${media.mobile`
          display: flex;
          flex-direction: column;
        `}
      `
      case 'media':
        return `
        ${media.desktop`
          display: flex;
          flex-direction: row;
        `}

        ${media.tablet`
          display: flex;
          flex-direction: column;
        `}

        ${media.mobile`
          width: 100%;
          padding: 0;
          max-width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      `
    }
  }}
`;



export default function FECContainer({ children, variants = 'default', ...rest }: FECContainerProps) {
  return <StyledContainer variants={variants} {...rest}>{children}</StyledContainer>;
}