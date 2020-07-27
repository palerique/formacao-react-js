import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './Home.css';
import ApiService from '../../utils/ApiService';
import PopUp from '../../utils/PouUp';
import Header from '../../Components/Header/Header';
import Tabela from '../../Components/Tabela/Tabela';
import Formulario from '../../Components/Formulario/Formulario';

const SUCCESS = 'success';
const ERROR = 'error';
const DELETED = 'deleted';

class Home extends Component {
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
    const campos = [
      {titulo: 'Autores', dado: 'nome'},
      {titulo: 'Livros', dado: 'livro'},
      {titulo: 'Preços', dado: 'preco'},
    ];

    const {autores} = this.state;
    return (
      <>
        <Header />
        <div className="container mb-10">
          <h1>Casa do código</h1>
          <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
          <Tabela campos={campos} dados={autores} removeDados={this.removeAutor} />
        </div>
      </>
    );
  }
}

export default Home;
