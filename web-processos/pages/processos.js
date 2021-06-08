import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Page from '../containers/Page';
import FormContainer from '../containers/FormContainer';
import List from '../containers/List';

import FormProcess from '../containers/FormProcess';
import { Creators as CreatorsProcess } from '../store/ducks/process';
import { MODES } from '../helpers';

function Processos() {
  const dispatch = useDispatch()
  const { selectForm, process } = useSelector(state => state.process)

  useEffect(() => {
    dispatch(CreatorsProcess.getProcessRequest())
  }, [])

  const handleNew = () => {
    dispatch(CreatorsProcess.formSetEmpty(MODES.CREATE));
  }

  const handleAction = (action, process) => {
    if (action === 'Alterar') {
      dispatch(CreatorsProcess.formSelectProcess(process, MODES.UPDATE))
      return
    }
    if (action === 'Apagar') {
      dispatch(CreatorsProcess.deleteProcessRequest(process.id))
      return
    }
  }

  const headerTable = {
    id: "Processo",
    title: "Titulo",
    createdAt: "Criado Por",
    usersToOpinion: "Usuário Para Parecer",
  }

  const dataTable = process.map(proc => (
    {
      id: proc.id,
      title: proc.title,
      createdAt: proc.createdAt?.name,
      usersToOpinion: proc.usersToOpinion?.map(user => user.name).join(','),
    }
  ))

  return (
    <Page>
      <FormContainer disableNew={selectForm?.mode === MODES.CREATE} handleNew={handleNew}>
        {selectForm && (
          <FormProcess process={selectForm?.process} mode={selectForm?.mode} />
        )}
      </FormContainer>
      <List headerTable={headerTable} dataTable={dataTable} handleAction={handleAction} />
    </Page>
  );
}

export default Processos;