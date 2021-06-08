import React from 'react';
import { Row, Col, Button, Container } from 'reactstrap';
import styled from 'styled-components';

const RowCustom = styled(Row)`
  margin-bottom: ${({show}) => show ? '0' : '60px' };
`;

function FormUsers({showNew = true, handleNew, disableNew, children}) {
  return (
    <RowCustom>
      { showNew && (
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Container>
            <Button disabled={disableNew} block size="lg" color="primary" onClick={handleNew}>Novo Cadastro</Button>
          </Container>
        </Col>
      )}
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        {children}
      </Col>
    </RowCustom>
  );
}

export default FormUsers;