import React from 'react';

// import { Container } from './styles';
import styled from 'styled-components';

export const Container = styled.tr`
  display: flex;
  border-top: 1px solid ${({theme}) => theme.colors.table.border};
  border-bottom: 1px solid ${({theme}) => theme.colors.table.border};
`;

function Row({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Row;