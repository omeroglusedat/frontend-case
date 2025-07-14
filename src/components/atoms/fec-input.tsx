'use client';

import React from 'react';
import styled from 'styled-components';
import { useTranslations } from 'next-intl';

export interface FECInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const StyledInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  font-size: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #0070f3;
  }

  &::placeholder {
    color: #aaa;
  }
`;

export default function FECInput(props: FECInputProps) {
  const t = useTranslations('frontEndCase');

  return (
    <StyledInput
      {...props}
      placeholder={props.placeholder ?? t('search')}
    />
  );
}
