import React, {Component} from 'react';
import Header from './Header';
import DataTable from './DataTable';
import ApiService from './ApiService';

class Livros extends Component {
  constructor(props) {
    super(props);

    this.state = {
      livros: [],
      titulo: 'Livros',
    };
  }

  componentDidMount() {
    ApiService.ListaLivros().then(res => {
      const {livros} = this.state;
      this.setState({livros: [...livros, ...res.data]});
    });
  }

  render() {
    const {titulo, livros} = this.state;
    return (
      <>
        <Header />
        <div className="container">
          <h1>Página de Livros</h1>
          <DataTable dados={livros} titulo={titulo} colunas={['livro']} />
        </div>
      </>
    );
  }
}

export default Livros;
