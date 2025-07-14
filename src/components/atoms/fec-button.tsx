'use client';

import { styled } from "styled-components";

export interface FECButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const StyledButton = styled.button<FECButtonProps>`
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: background 0.2s ease;
    color: white;
  
    background: ${({ variant }) =>
    variant === 'secondary' ? '#BDC3C7' : '#7F8C8D'};
  
    &:hover {
      opacity: 0.85;
    }
  
    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  `;


export default function FECButton({ children, variant = 'primary', ...rest }: FECButtonProps) {

  return <StyledButton variant={variant} {...rest}>{children}</StyledButton>
}