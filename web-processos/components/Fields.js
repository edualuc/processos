import React from 'react';

// import { Container } from './styles';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  
`;
export const Label = styled.label`
  
`;
export const Input = styled.input`
  padding: ${({ theme }) => theme.padding.default}px;
  border: 1px solid ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.padding.default}px;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.background};
  ${({ onChange }) => !onChange && css`
    border: 0px;
    :focus {
      border: 0px;
    }
  `}
`;

function Field({
  label,
  type='text',
  value,
  placeholder,
  onChange,
  readOnly,
  ...rest
}) {
  return (
    <div {...rest}>
      <Label>{label}</Label>
      <Input type={type} value={value} placeholder={placeholder} onChange={onChange} readOnly={readOnly} />
    </div>
    );
}

export default Field;