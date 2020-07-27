import React, {Component} from 'react';
import Header from '../../Components/Header/Header';
import ApiService from '../../utils/ApiService';
import PopUp from '../../utils/PouUp';
import Tabela from '../../Components/Tabela/Tabela';

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
    const campos = [
      {
        titulo: 'Livros',
        dado: 'livro',
      },
    ];
    return (
      <>
        <Header />
        <div className="container">
          <h1>Página de Livros</h1>
          <Tabela dados={livros} titulo={titulo} campos={campos} />
        </div>
      </>
    );
  }
}

export default Livros;
