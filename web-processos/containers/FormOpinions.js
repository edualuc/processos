import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { MODES } from '../helpers';

import { Creators as OpinionsCreators } from '../store/ducks/opinions'

function FormOpinions({opinion, mode}) {
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state.users)

  const isCreate = mode === MODES.CREATE

  useEffect(() => {
    dispatch(OpinionsCreators.formUpdate({description: '', ...opinion, user: auth }));
  }, [auth])

  const handleConfim = () => {
    if (mode === MODES.CREATE) {
      dispatch(OpinionsCreators.createOpinionRequest(opinion));
      return
    }
    dispatch(OpinionsCreators.setOpinionRequest(opinion));
  }
  const handleChange = (value, key) => {
    dispatch(OpinionsCreators.formUpdate({...opinion, [key]: value}));
  }

  return (
    <>
      {opinion && 
        <Form>
          <FormGroup>
            <Label for="id">Id</Label>
            <Input disabled={!isCreate} value={opinion.id} onChange={(event) => handleChange(event?.target?.value, 'id')} type="number" name="id" id="id" placeholder="Id do Parecer" />
          </FormGroup>

          <FormGroup>
            <Label for="createdAt">Referente ao Processo</Label>
            {opinion.process && <Input value={opinion.process.id + ' - ' + opinion.process.title} readOnly type="text" name="process" id="process" placeholder="Processo" />}
          </FormGroup>

          <FormGroup>
            <Label for="createdAt">Criado por</Label>
            {opinion.user && <Input value={opinion.user.name} readOnly type="text" name="createdAt" id="createdAt" placeholder="Criado por" />}
          </FormGroup>

          <FormGroup>
            <Label for="name">Descrição</Label>
            <Input value={opinion.description} onChange={(event) => handleChange(event?.target?.value, 'description')} type="text" name="description" id="description" placeholder="Descrição" />
          </FormGroup>
          
          <Button color="danger" onClick={() => handleConfim()}>Confirmar</Button>
        </Form>
      }
    </>
  );
}

export default FormOpinions;