import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Page from '../containers/Page';
import FormContainer from '../containers/FormContainer';
import List from '../containers/List';

import FormUsers from '../containers/FormUsers';
import { Creators as CreatorsUsers } from '../store/ducks/users';
import { MODES } from '../helpers';

function Usuarios() {
  const dispatch = useDispatch()
  const { auth: userAuth, selectForm, users } = useSelector(state => state.users)

  useEffect(() => {
    dispatch(CreatorsUsers.getUsersRequest())
  }, [])

  const handleNew = () => {
    dispatch(CreatorsUsers.formSetEmpty(MODES.CREATE));
  }

  const handleAction = (action, user) => {
    if (action === 'Alterar') {
      dispatch(CreatorsUsers.formSelectUser(user, MODES.UPDATE))
      return
    }
    if (action === 'Apagar') {
      dispatch(CreatorsUsers.deleteUsersRequest(user.id))
      return
    }
  }

  const headerTable = {
    id: "Processo",
    type: "Tipo",
    name: "Nome",
  }

  return (
    <Page>
      <FormContainer disableNew={selectForm?.mode === MODES.CREATE} handleNew={handleNew}>
        {selectForm && (
          <FormUsers user={selectForm?.user} mode={selectForm?.mode} />
        )}
      </FormContainer>
      <List headerTable={headerTable} dataTable={users} handleAction={handleAction} />
    </Page>
  );
}

export default Usuarios;