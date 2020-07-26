import React, {Component} from 'react';
import Header from './Header';
import DataTable from './DataTable';

class Livros extends Component {
  constructor(props) {
    super(props);

    this.state = {
      autores: [
        {
          nome: 'Paulo',
          livro: 'React',
          preco: '1000',
        },
        {
          nome: 'Daniel',
          livro: 'Java',
          preco: '99',
        },
        {
          nome: 'Marcos',
          livro: 'Design',
          preco: '150',
        },
        {
          nome: 'Bruno',
          livro: 'DevOps',
          preco: '100',
        },
        {
          nome: 'Nico',
          livro: 'Java',
          preco: '9999',
        },
      ],
      titulo: 'Livros',
    };
  }

  render() {
    const {titulo, autores} = this.state;
    return (
      <>
        <Header />
        <div className="container">
          <h1>Página de Livros</h1>
          <DataTable dados={autores} titulo={titulo} colunas={['livro']} />
        </div>
      </>
    );
  }
}

export default Livros;
