import React from 'react';

const TableHead = () => (
  <thead>
    <tr>
      <th>Autor</th>
      <th>Titulo</th>
      <th>Preco</th>
      <th>Remover</th>
    </tr>
  </thead>
);

const TableBody = ({autores, removeAutor}) => {
  const linhas = autores.map((linha, index) => (
    <tr key={linha.nome - linha.titulo}>
      <td>{linha.nome}</td>
      <td>{linha.titulo}</td>
      <td>{linha.preco}</td>
      <td>
        <button type="submit" onClick={() => removeAutor(index)}>
          Remover
        </button>
      </td>
    </tr>
  ));

  return <tbody>{linhas}</tbody>;
};

function Tabela(props) {
  const {autores, removeAutor} = props;

  return (
    <table>
      <TableHead />
      <TableBody autores={autores} removeAutor={removeAutor} />
    </table>
  );
}

export default Tabela;
