import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormGroup, Label, Input, Row, Col, Button, Container } from 'reactstrap';
import styled from 'styled-components';

import { Creators as UserCreators } from '../store/ducks/users'

const RowCustom = styled(Row)`
  margin-bottom: ${({show}) => !show ? '0' : '60px' };
`;

function FormUsers() {
  const dispatch = useDispatch();
  const { selectForm } = useSelector(state => state.users)
  const [newForm, setNewForm] = useState(undefined)

  const isCreate = !selectForm

  const handleConfim = () => {
    if (newForm) {
      dispatch(UserCreators.createUserRequest(newForm));
    } else {
      dispatch(UserCreators.setUserRequest(selectForm));
    }
  }
  const handleChange = (event, key) => {
    if (!newForm) {
      dispatch(UserCreators.updateForm({...selectForm, [key]: event?.target?.value}));
    } else {
      setNewForm({...newForm, [key]: event?.target?.value})
    }
  }
  const handleNew = (event, key) => {
    setNewForm({});
  }

  const Fields = ({form, handleChange}) => {
    return (
      (
        <Form>
          <FormGroup>
            <Label for="id">Id</Label>
            <Input disabled={!isCreate} value={form?.id} onChange={(event) => handleChange(event, 'id')} type="number" name="id" id="id" placeholder="Id do usuário" />
          </FormGroup>
        
          <FormGroup>
            <Label for="name">Nome</Label>
            <Input value={form?.name} onChange={(event) => handleChange(event, 'name')} type="text" name="name" id="name" placeholder="Nome do Usuário" />
          </FormGroup>
        
          <FormGroup>
            <Label for="Tipo">Type</Label>
            <Input value={form?.type} onChange={(event) => handleChange(event, 'type')} type="select" name="select" id="tipo">
              <option>admin</option>
              <option>processo</option>
              <option>procedimento</option>
            </Input>
          </FormGroup>
          <Button color="danger" onClick={() => handleConfim()}>Confirmar</Button>
        </Form>
        )
    )
  }
  return (
    <>
      <RowCustom show={selectForm}>
        { !newForm && (
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Container>
              <Button block size="lg" color="primary" onClick={() => handleNew()} >Novo Cadastro</Button>
            </Container>
          </Col>
        )}
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          {(selectForm || newForm) && 
            <Fields form={selectForm || newForm} handleChange={handleChange} />
          }
        </Col>
      </RowCustom>
    </>
  );
}

export default FormUsers;