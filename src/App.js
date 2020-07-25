import React, {Component} from 'react';
import './App.css';
import Tabela from './Tabela';
import Formulario from './Formulario';

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
  };

  escutadorDeSubmit = autor => {
    const {autores} = this.state;
    const novosAutores = [...autores, autor];
    this.setState({autores: novosAutores});
  };

  render() {
    const {autores} = this.state;
    return (
      <div>
        <Tabela autores={autores} removeAutor={this.removeAutor} />
        <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
      </div>
    );
  }
}

export default App;
