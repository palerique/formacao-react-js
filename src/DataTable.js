import React from 'react';

const DataTable = ({colunas, dados, titulo}) => {
  const linhas = dados.map(item => (
    <tr key={item.id}>
      {colunas.map(coluna => (
        <td key={`${item.id}${item[coluna]}`}>{item[coluna]}</td>
      ))}
    </tr>
  ));
  return (
    <table className="centered highlight">
      <thead>
        <tr>
          <th>{titulo}</th>
        </tr>
      </thead>
      <tbody>{linhas}</tbody>
    </table>
  );
};
export default DataTable;
