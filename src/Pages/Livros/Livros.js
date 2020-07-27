import React, {Component} from 'react';
import Header from '../../Components/Header/Header';
import DataTable from '../../Components/DataTable/DataTable';
import ApiService from '../../utils/ApiService';
import PopUp from '../../utils/PouUp';

const SUCCESS = 'success';
const ERROR = 'error';

class Livros extends Component {
  constructor(props) {
    super(props);

    this.state = {
      livros: [],
      titulo: 'Livros',
    };
  }

  componentDidMount() {
    ApiService.ListaLivros()
      .then(res => ApiService.TrataErros(res))
      .then(res => {
        if (res.message === SUCCESS) {
          PopUp.exibeMensagem(SUCCESS, 'Livros listados com sucesso');
          const {livros} = this.state;
          this.setState({livros: [...livros, ...res.data]});
        }
      })
      .catch(() =>
        PopUp.exibeMensagem(ERROR, 'Falha na comunicação com a API ao listar os livros')
      );
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
