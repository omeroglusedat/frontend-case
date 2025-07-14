'use client';

import React from 'react';
import styled from 'styled-components';

export interface FECSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  children: React.ReactNode;
}

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const StyledLabel = styled.label`
  font-size: 0.85rem;
  color: #333;
`;

const StyledSelect = styled.select`
  padding: 8px 12px;
  font-size: 0.95rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #0070f3;
  }
`;

export default function FECSelect({ label, children, ...rest }: FECSelectProps) {
  const id = rest.id ?? 'fec-select';

  return (
    <SelectWrapper>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      <StyledSelect id={id} {...rest}>
        {children}
      </StyledSelect>
    </SelectWrapper>
  );
}
