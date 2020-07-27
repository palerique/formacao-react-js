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
  const linhas = autores.map(linha => {
    return (
      <tr key={linha.id}>
        <td>{linha.nome}</td>
        <td>{linha.livro}</td>
        <td>{linha.preco}</td>
        <td>
          <button
            className="waves-effect waves-light indigo lighten-2 btn"
            type="submit"
            onClick={() => removeAutor(linha.id)}
          >
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
    <table className="centered highlight">
      <TableHead />
      <TableBody autores={autores} removeAutor={removeAutor} />
    </table>
  );
}

export default Tabela;