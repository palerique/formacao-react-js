import React, { Component } from "react";
import "./App.css";
import Tabela from "./Tabela";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      autores: [
        {
          nome: "Paulo",
          livro: "React",
          preco: "1000",
        },
        {
          nome: "Daniel",
          livro: "Java",
          preco: "99",
        },
        {
          nome: "Marcos",
          livro: "Design",
          preco: "150",
        },
        {
          nome: "Bruno",
          livro: "DevOps",
          preco: "100",
        },
      ],
    };
  }

  removeAutor = (index) => {
    const { autores } = this.state;
    this.setState({
      autores: autores.filter((autor, posAtual) => posAtual !== index),
    });
  };

  render() {
    const { autores } = this.state;
    return <Tabela autores={autores} removeAutor={this.removeAutor} />;
  }
}

export default App;
