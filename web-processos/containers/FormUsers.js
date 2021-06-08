import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, FormGroup, Label, Input, Row, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styled from 'styled-components';
import { listfy, MODES, TYPES } from '../helpers';

import { Creators as UserCreators } from '../store/ducks/users'

function FormUsers({user, mode}) {
  const dispatch = useDispatch();

  const [dropdownOpen, setDropdownOpen] = useState(false)

  const isCreate = mode === MODES.CREATE

  const handleConfim = () => {
    if (mode === MODES.CREATE) {
      dispatch(UserCreators.createUserRequest(user));
      return
    }
    dispatch(UserCreators.setUserRequest(user));
  }
  const handleChange = (value, key) => {
    dispatch(UserCreators.formUpdate({...user, [key]: value}));
  }

  const toggle = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <>
      {user && 
        <Form>
          <FormGroup>
            <Label for="id">Id</Label>
            <Input disabled={!isCreate} value={user.id} onChange={(event) => handleChange(event?.target?.value, 'id')} type="number" name="id" id="id" placeholder="Id do usuário" />
          </FormGroup>
        
          <FormGroup>
            <Label for="name">Nome</Label>
            <Input value={user.name} onChange={(event) => handleChange(event?.target?.value, 'name')} type="text" name="name" id="name" placeholder="Nome do Usuário" />
          </FormGroup>
        
          <FormGroup>
            <Label for="tipo">Type</Label>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>
                {!user?.type ? 'Selecione um tipo' : user.type}
                </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Tipos de Usuários</DropdownItem>
                {listfy(TYPES)?.map(type => (
                  <DropdownItem key={type} onClick={(event) => handleChange(type, 'type')}>{type}</DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </FormGroup>
          <Button color="danger" onClick={() => handleConfim()}>Confirmar</Button>
        </Form>
      }
    </>
  );
}

export default FormUsers;