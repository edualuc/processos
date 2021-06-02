import React from 'react';

// import { Container } from './styles';

function Column({ children }) {
  return (
    <td>
      {children}
    </td>
  );
}

export function ColumnHeader({ children }) {
  return (
    <th>
      {children}
    </th>
  );
}

export default Column;