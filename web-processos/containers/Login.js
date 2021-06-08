import React, { useEffect, useState } from 'react';
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styled from 'styled-components';

import Link from 'next/link'
import Field from '../components/Fields';

// import { Container } from './styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;
export const UserLogin = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px 0;
`;

import { Creators as UserCreators } from '../store/ducks/users'
import { useDispatch, useSelector } from 'react-redux';
import { PATHS } from '../helpers';

const Login = () => {
  const dispatch = useDispatch();
  const { users, auth } = useSelector(state => state.users)

  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const path = PATHS[auth?.type] || '';

  const toggle = (event) => {
    setDropdownOpen(prevState => !prevState)
  };

  useEffect(() => {
    dispatch(UserCreators.cleanUsers())
    dispatch(UserCreators.getUsersRequest())
  }, [])

  const handleItem = (user) => {
    dispatch(UserCreators.authenticate(user))
  }

  return (
    <Container>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          {!auth ? 'Selecione um usuário' : `${auth.name} | ${auth.type}`}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Usuários</DropdownItem>
          {users?.map(user => (
            <DropdownItem key={user.id} onClick={() => handleItem(user)}>{`${user.name} | ${user.type}`}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      <Link href={path}>
        <Button color="primary" disabled={!auth} type="button">Entrar</Button>
      </Link>
    </Container>
  );
}

export default Login;