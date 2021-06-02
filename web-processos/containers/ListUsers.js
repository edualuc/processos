import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'reactstrap';
import Column, { ColumnHeader } from '../components/Column';
import Field from '../components/Fields';
import Row from '../components/Row';

import { Creators as UserCreators } from '../store/ducks/users'

// import { Container } from './styles';

function ListUsers() {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.users)

  console.log('listusers', users);
  useEffect(() => {
    dispatch(UserCreators.getUsersRequest())
  }, [])

  const actions = ['Alterar', 'Apagar']

  const handleAction = (action, user) => {
    console.log('handleAction', action, user)
    if (action === 'Alterar') {
      dispatch(UserCreators.selectForm(user))
      return
    }
    if (action === 'Apagar') {
      dispatch(UserCreators.deleteUsersRequest(user.id))
      return
    }
  }

  return (
    <Table>
      <thead>
        <Row>
          {users?.[0] && Object.keys(users[0]).map(keyField => (
            <ColumnHeader key={`column-header${keyField}`}>
              <Field value={keyField} />
            </ColumnHeader>
          ))}
          {actions.map(action => (
            <ColumnHeader key={`column-header${action}`}>
              
            </ColumnHeader>
          ))}
        </Row>
      </thead>
      <tbody>
        {users?.map(user => (
          <Row key={user?.id}>
            {Object.keys(user).map(keyField => (
              <Column key={`column${user[keyField].id}${keyField}`}>
                <Field value={user[keyField]} />
              </Column>
            ))}
            {actions.map(action => (
              <Column key={`column-${user.id}${action}`}>
                <Button color="primary" onClick={() => handleAction(action, user)}>
                  {action}
                </Button>
              </Column>
            ))}
          </Row>
        ))}
      </tbody>
    </Table>
  );
}

export default ListUsers;