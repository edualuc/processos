import React from 'react';
import FormUsers from '../containers/FormUsers';
import ListUsers from '../containers/ListUsers';
import Page from '../containers/Page';

// import { Container } from './styles';

function Usuarios() {
  return (
    <Page>
      <FormUsers />
      <ListUsers />
    </Page>
  );
}

export default Usuarios;