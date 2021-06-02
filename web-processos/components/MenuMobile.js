import React from 'react';

// import { Container } from './styles';
import styled, { css } from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  background-color: #3339;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  ${({open}) => (open
    ? css`opacity:1; display:initial;` 
    : css`opacity:0; display:none;`
  )}
  transition: all 600ms cubic-bezier(0.165, 0.84, 0.44, 1);
`;

export const Container = styled.div`
  ${({open}) => (open
    ? css`opacity:1;` 
    : css`opacity:0; transform: translateX(200px)`
  )}
  transition: all 600ms cubic-bezier(0.165, 0.84, 0.44, 1);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  min-width: 90vw;
  background-color: #fff;
`;

function MenuMobile({children, open, close}) {
  return (
    <Backdrop onMouseUp={close}>
      <Container open={open}>{children}</Container>
    </Backdrop>
  );
}

export default MenuMobile;