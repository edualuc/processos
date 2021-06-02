import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Login from '../containers/Login';
import { Creators as UserCreators } from '../store/ducks/users'

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const MainLogin = styled.main`
  border: 2px ${({ theme }) => theme.colors.dark} double;
  border-radius: 2rem;
  padding: 4rem;
`;

export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('Home.initializerAsync');
    dispatch(UserCreators.usersInitializer());
  }, []);
  return (
    <Container>
      <MainLogin>
        <Login />
      </MainLogin>
    </Container>
  )
}
