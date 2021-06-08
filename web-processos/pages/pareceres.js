import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Page from '../containers/Page';
import FormContainer from '../containers/FormContainer';
import List from '../containers/List';

import FormOpinions from '../containers/FormOpinions';
import { Creators as CreatorsProcess } from '../store/ducks/process';
import { Creators as CreatorsOpinions } from '../store/ducks/opinions';
import { MODES } from '../helpers';

function Pareceres() {
  const dispatch = useDispatch()
  const { selectForm, opinions } = useSelector(state => state.opinions)
  const { process } = useSelector(state => state.process)
  const { auth } = useSelector(state => state.users)

  useEffect(() => {
    dispatch(CreatorsProcess.getProcessRequest(auth))
    dispatch(CreatorsOpinions.getOpinionsRequest())
  }, [])

  const handleNew = () => {
    dispatch(CreatorsOpinions.formSetEmpty(MODES.CREATE));
  }

  const handleAction = (action, opinion) => {
    if (action === 'Fazer Parecer') {
      dispatch(CreatorsOpinions.formMakeOpinion(opinion, MODES.CREATE))
      return
    }
    if (action === 'Alterar' && opinion.id) {
      dispatch(CreatorsOpinions.formSelectOpinion(opinion, MODES.UPDATE))
      return
    }
    if (action === 'Apagar') {
      dispatch(CreatorsOpinions.deleteOpinionsRequest(opinion.id))
      return
    }
  }
  const actions = ['Fazer Parecer', 'Alterar']

  const headerTable = {
    process: "Processo",
    processTitle: "Processo Titulo",
    id: "Parecer",
    description: "Descrição",
  }

  const dataTable = process.filter(proc => proc.usersToOpinion?.some(user => user.id === auth.id)).map(proc => (
    {
      process: proc.id,
      processTitle: proc.title,
      id:          opinions.some(opinion => opinion.process.id === proc.id) ? opinions.find(opinion => opinion.process.id === proc.id)['id'] : '',
      description: opinions.some(opinion => opinion.process.id === proc.id) ? opinions.find(opinion => opinion.process.id === proc.id)['description'] : '',
    }
  ))

  return (
    <Page>
      <FormContainer disableNew={selectForm?.mode === MODES.CREATE} showNew={false} handleNew={handleNew}>
        {selectForm && (
          <FormOpinions opinion={selectForm?.opinion} mode={selectForm?.mode} />
        )}
      </FormContainer>
      <List actions={actions} headerTable={headerTable} dataTable={dataTable} handleAction={handleAction} />
    </Page>
  );
}

export default Pareceres;