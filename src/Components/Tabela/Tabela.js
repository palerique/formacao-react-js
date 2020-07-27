import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

function Tabela(props) {
  const {autores, removeAutor} = props;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Autores</TableCell>
          <TableCell>Livros</TableCell>
          <TableCell>Preços</TableCell>
          <TableCell>Remover</TableCell>
        </TableRow>
      </TableHead>
      <TableHead />
      <TableBody>
        {autores.map(autor => (
          <TableRow key={autor.id}>
            <TableCell>{autor.nome}</TableCell>
            <TableCell>{autor.livro}</TableCell>
            <TableCell>{autor.preco}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  removeAutor(autor.id);
                }}
              >
                Remover
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default Tabela;
