import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Tabela from './Tabela';
import Formulario from './Formulario';
import Header from './Header';
import PopUp from './PouUp';
import ApiService from './ApiService';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      autores: [],
    };
  }

  componentDidMount() {
    ApiService.ListaAutores().then(res => {
      const {autores} = this.state;
      this.setState({autores: [...autores, ...res.data]});
    });
  }

  removeAutor = id => {
    const {autores} = this.state;

    this.setState({
      autores: autores.filter(autor => {
        return autor.id !== id;
      }),
    });
    PopUp.exibeMensagem('error', 'Autor removido com sucesso');
    ApiService.RemoveAutor(id);
  };

  escutadorDeSubmit = autor => {
    ApiService.CriaAutor(JSON.stringify(autor))
      .then(res => res.data)
      .then(autorRecebido => {
        const {autores} = this.state;
        this.setState({autores: [...autores, autorRecebido]});
        PopUp.exibeMensagem('success', 'Autor adicionado com sucesso');
      });
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
