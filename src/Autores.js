import React, {Component} from 'react';
import Header from './Header';
import DataTable from './DataTable';
import ApiService from './ApiService';

class Autores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nomes: [],
      titulo: 'Autores',
    };
  }

  componentDidMount() {
    ApiService.ListaNomes().then(res => {
      const {nomes} = this.state;
      this.setState({nomes: [...nomes, ...res.data]});
    });
  }

  render() {
    const {titulo, nomes} = this.state;
    return (
      <>
        <Header />
        <div className="container">
          <h1>Página de Autores</h1>
          <DataTable dados={nomes} titulo={titulo} colunas={['nome']} />
        </div>
      </>
    );
  }
}

export default Autores;
