import React, { useState } from 'react';
import { Container } from 'reactstrap';

import styled from 'styled-components';
import Footer from '../components/Footer';
import MenuMobile from '../components/MenuMobile';

const Body = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
  height: 100vh;
`;

const Header = styled.header`
  width: 100%;
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.header.color1}, 
    ${({ theme }) => theme.colors.header.color2}, 
    ${({ theme }) => theme.colors.header.color3}, 
    ${({ theme }) => theme.colors.header.color4}, 
    ${({ theme }) => theme.colors.header.color5});
  min-height: calc(100px + ${({ theme }) => theme.padding.default}px);
  margin: 0 auto;
  padding: ${({ theme }) => theme.padding.default}px 0px;
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  justify-content: center;
`
const HeaderBody = styled.div`
  max-width: ${({ theme }) => theme.maxWidth}px;
  padding: 0 10px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  > h1 {
    margin-right: 15px;
  }
`
const Main = styled.main`
  max-width: ${({ theme }) => theme.maxWidth}px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: ${({ theme }) => theme.margin.big}px 0px;
  flex: 1;
`;

function Page({children}) {
  const [open, setOpen] = useState(false);
  console.log('open', open);
  return (
    <Body>
      <Header>
        <HeaderBody>
          <h1>Processos</h1>

          {/* <nav>
            <ul>
              <li>opção 1</li>
              <li>opção 2</li>
              <li>opção 3</li>
            </ul>
          </nav> */}
          <button type="button" onClick={() => setOpen(!open)}>Sair</button>
        </HeaderBody>
        <MenuMobile open={open} close={() => setOpen(false)}>
          <ul>
            <li>opção 1</li>
            <li>opção 2</li>
            <li>opção 3</li>
          </ul>
        </MenuMobile>
        
      </Header>
      <Main>
        <Container>
          {children}
        </Container>
      </Main>
      <Footer />
    </Body>
  );
}

export default Page;