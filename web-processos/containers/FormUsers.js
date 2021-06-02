import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';
import styled from 'styled-components';

const RowCustom = styled(Row)`
  margin-bottom: ${({show}) => !show ? '0' : '60px' };

`;
import { Creators as UserCreators } from '../store/ducks/users'

function FormUsers() {
  const dispatch = useDispatch();
  const { selectForm } = useSelector(state => state.users)

  const isCreate = true

  const handleConfim = () => {
    dispatch(UserCreators.createUserRequest(selectForm));
  }
  const handleChange = (event, key) => {
    dispatch(UserCreators.updateForm({...selectForm, [key]: event?.target?.value}));
  }
  return (
    <RowCustom show={selectForm}>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        {selectForm && (
          <Form>
            <FormGroup>
              <Label for="id">Id</Label>
              <Input disabled={!isCreate} value={selectForm.id} onChange={(event) => handleChange(event, 'id')} type="number" name="id" id="id" placeholder="Id do usuário" />
            </FormGroup>
          
            <FormGroup>
              <Label for="name">Nome</Label>
              <Input value={selectForm.name} onChange={(event) => handleChange(event, 'name')} type="text" name="name" id="name" placeholder="Nome do Usuário" />
            </FormGroup>
          
            <FormGroup>
              <Label for="Tipo">Type</Label>
              <Input value={selectForm.type} onChange={(event) => handleChange(event, 'type')} type="select" name="select" id="tipo">
                <option>admin</option>
                <option>processo</option>
                <option>procedimento</option>
              </Input>
            </FormGroup>
            <Button onClick={() => handleConfim()}>Confirmar</Button>
          </Form>
          )
        }
      </Col>
    </RowCustom>
  );
}

export default FormUsers;