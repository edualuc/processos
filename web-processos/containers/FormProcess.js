import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormGroup, Label, Input, Row, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { MODES, TYPES } from '../helpers';

import { Creators as ProcessCreators } from '../store/ducks/process'

function FormProcess({process, mode}) {
  const dispatch = useDispatch();
  const { auth, users } = useSelector(state => state.users)

  const [dropdownOpen, setDropdownOpen] = useState(false)

  const isCreate = mode === MODES.CREATE

  useEffect(() => {
    dispatch(ProcessCreators.formUpdate({...process, createdAt: auth, usersToOpinion: []}));
  }, [auth])

  const handleConfim = () => {
    if (mode === MODES.CREATE) {
      dispatch(ProcessCreators.createProcessRequest(process));
      return
    }
    dispatch(ProcessCreators.setProcessRequest(process));
  }
  const handleChange = (value, key) => {
    dispatch(ProcessCreators.formUpdate({...process, [key]: value}));
  }
  const handleUsersToOpinion = (value) => {
    dispatch(ProcessCreators.formUpdate({...process, usersToOpinion: [...process.usersToOpinion, value]}));
  }

  const toggle = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <>
      {process && 
        <Form>
          <FormGroup>
            <Label for="id">Id</Label>
            <Input disabled={!isCreate} value={process.id} onChange={(event) => handleChange(event?.target?.value, 'id')} type="number" name="id" id="id" placeholder="Id do processo" />
          </FormGroup>
        
          <FormGroup>
            <Label for="name">Titulo</Label>
            <Input value={process.title} onChange={(event) => handleChange(event?.target?.value, 'title')} type="text" name="title" id="title" placeholder="Titulo para o processo" />
          </FormGroup>

          <FormGroup>
            <Label for="createdAt">Criado por</Label>
            {process.createdAt && <Input value={process.createdAt.name} readOnly type="text" name="createdAt" id="createdAt" placeholder="Criado por" />}
          </FormGroup>
          
          <FormGroup>
            <Label for="tipo">Usuário para parecer</Label>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>
                {process?.usersToOpinion?.length > 0 ? `Usuarios Selecionados:${process?.usersToOpinion.length}` : 'Selecione algum usuário'}
                </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Usuários</DropdownItem>
                {users?.filter(user => user.type === TYPES.finalizador)?.map(user => (
                  <DropdownItem key={user} onClick={() => handleUsersToOpinion(user)}>{user.name}</DropdownItem>
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

export default FormProcess;