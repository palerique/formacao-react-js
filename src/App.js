import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Tabela from './Tabela';
import Formulario from './Formulario';
import Header from './Header';
import PopUp from './PouUp';
import ApiService from './ApiService';

const SUCCESS = 'success';
const ERROR = 'error';
const DELETED = 'deleted';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      autores: [],
    };
  }

  componentDidMount() {
    ApiService.ListaAutores()
      .then(res => ApiService.TrataErros(res))
      .then(res => {
        const {message, data} = res;
        if (message === SUCCESS) {
          const {autores} = this.state;
          this.setState({autores: [...autores, ...data]});
        }
      })
      .catch(() =>
        PopUp.exibeMensagem(ERROR, 'Erro na comunicação com a API ao tentar listar os autores')
      );
  }

  removeAutor = id => {
    const {autores} = this.state;

    const autoresAtualizado = autores.filter(autor => {
      return autor.id !== id;
    });

    ApiService.RemoveAutor(id)
      .then(res => ApiService.TrataErros(res))
      .then(res => {
        if (res.message === DELETED) {
          this.setState({autores: [...autoresAtualizado]});
          PopUp.exibeMensagem(ERROR, 'Autor removido com sucesso');
        }
      })
      .catch(() =>
        PopUp.exibeMensagem(ERROR, 'Erro na comunicação com a API ao tentar remover o autor')
      );
  };

  escutadorDeSubmit = autor => {
    ApiService.CriaAutor(JSON.stringify(autor))
      .then(res => ApiService.TrataErros(res))
      .then(res => {
        const {autores} = this.state;
        this.setState({autores: [...autores, res.data]});
        PopUp.exibeMensagem(SUCCESS, 'Autor adicionado com sucesso');
      })
      .catch(() =>
        PopUp.exibeMensagem(ERROR, 'Erro na comunicação com a API ao tentar criar o autor')
      );
  };

  render() {
    const {autores} = this.state;
    return (
      <>
        <Header />
        <div className="container mb-10">
          <h1>Casa do código</h1>
          <Tabela autores={autores} removeAutor={this.removeAutor} />
          <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </>
    );
  }
}

export default App;
