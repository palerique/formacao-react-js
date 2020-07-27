import React, {Component} from 'react';
import Header from './Header';
import DataTable from './DataTable';
import ApiService from './ApiService';
import PopUp from './PouUp';

const SUCCESS = 'success';
const ERROR = 'error';

class Autores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nomes: [],
      titulo: 'Autores',
    };
  }

  componentDidMount() {
    ApiService.ListaNomes()
      .then(res => ApiService.TrataErros(res))
      .then(res => {
        if (res.message === SUCCESS) {
          PopUp.exibeMensagem(SUCCESS, 'Autores listados com sucesso');
          const {nomes} = this.state;
          this.setState({nomes: [...nomes, ...res.data]});
        }
      })
      .catch(() =>
        PopUp.exibeMensagem(ERROR, 'Falha na comunicação com a API ao listar os autores')
      );
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
