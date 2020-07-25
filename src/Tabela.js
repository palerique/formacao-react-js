import React from 'react';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Autor</th>
        <th>Livro</th>
        <th>Preco</th>
        <th>Remover</th>
      </tr>
    </thead>
  );
};

const TableBody = ({autores, removeAutor}) => {
  const linhas = autores.map((linha, index) => {
    return (
      <tr key={linha.nome - linha.livro - linha.preco}>
        <td>{linha.nome}</td>
        <td>{linha.livro}</td>
        <td>{linha.preco}</td>
        <td>
          <button type="submit" onClick={() => removeAutor(index)}>
            Remover
          </button>
        </td>
      </tr>
    );
  });

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
