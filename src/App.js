import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Tabela from './Tabela';
import Formulario from './Formulario';
import Header from './Header';
import PopUp from './PouUp';

class App extends Component {
  constructor(props, context) {
    super(props, context);
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
      ],
    };
  }

  removeAutor = index => {
    const {autores} = this.state;
    this.setState({
      autores: autores.filter((autor, posAtual) => posAtual !== index),
    });
    PopUp.exibeMensagem('error', 'Autor removido com sucesso!');
  };

  escutadorDeSubmit = autor => {
    const {autores} = this.state;
    const novosAutores = [...autores, autor];
    this.setState({autores: novosAutores});
    PopUp.exibeMensagem('success', 'Autor adicionado com sucesso!');
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
