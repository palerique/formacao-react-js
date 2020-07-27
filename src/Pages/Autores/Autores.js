import React, {Component} from 'react';
import Header from '../../Components/Header/Header';
import ApiService from '../../utils/ApiService';
import PopUp from '../../utils/PouUp';
import Tabela from '../../Components/Tabela/Tabela';

const SUCCESS = 'success';
const ERROR = 'error';

class Autores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nomes: [],
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
    const campos = [{titulo: 'Autores', dado: 'nome'}];
    return (
      <>
        <Header />
        <div className="container">
          <h1>Página de Autores</h1>
          <Tabela dados={nomes} titulo={titulo} campos={campos} />
        </div>
      </>
    );
  }
}

export default Autores;
