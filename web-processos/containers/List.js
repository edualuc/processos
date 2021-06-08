import React from 'react';
import { Table, Button } from 'reactstrap';
import Column, { ColumnHeader } from '../components/Column';
import Field from '../components/Fields';
import Row from '../components/Row';

const actionsDefault = ['Alterar']

function List({headerTable, dataTable, actions = actionsDefault, handleAction}) {
  return (
    <Table>
      <thead>
        <Row>
          {headerTable && Object.keys(headerTable).map(keyField => (
            <Column key={`column${keyField}`}>
              <Field readOnly value={headerTable[keyField]} />
            </Column>
          ))}
          {!headerTable && dataTable?.[0] && Object.keys(dataTable[0]).map(keyField => (
            <ColumnHeader key={`column-header${keyField}`}>
              <Field readOnly value={keyField} />
            </ColumnHeader>
          ))}
          {/* {actions.map(action => (
            <ColumnHeader key={`column-header${action}`}>
              
            </ColumnHeader>
          ))} */}
        </Row>
      </thead>
      <tbody>
        {dataTable?.map(datum => (
          <Row key={datum?.id || Object.values(datum)?.join('-')}>
            {Object.keys(datum).map(keyField => (
              <Column key={`column${datum[keyField].id}${keyField}`}>
                <Field readOnly value={datum[keyField]} />
              </Column>
            ))}
            {actions.map(action => (
              <Column key={`column-${datum.id}${action}`}>
                <Button color="primary" onClick={() => handleAction(action, datum)}>
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

export default List;