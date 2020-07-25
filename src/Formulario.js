import React, {Component} from 'react';

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.stateInicial = {
      nome: '',
      livro: '',
      preco: '',
    };

    this.state = this.stateInicial;
  }

  submitFormulario = () => {
    const {escutadorDeSubmit} = this.props;
    escutadorDeSubmit(this.state);
    this.setState(this.stateInicial);
  };

  escutadorDeInput = event => {
    const {name, value} = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const {nome, livro, preco} = this.state;
    return (
      <form>
        <label htmlFor="nome">
          Nome
          <input id="nome" type="text" name="nome" value={nome} onChange={this.escutadorDeInput} />
        </label>

        <label htmlFor="livro">
          Livro
          <input
            id="livro"
            type="text"
            name="livro"
            value={livro}
            onChange={this.escutadorDeInput}
          />
        </label>

        <label htmlFor="preco">
          Preço
          <input
            id="preco"
            type="text"
            name="preco"
            value={preco}
            onChange={this.escutadorDeInput}
          />
        </label>

        <button onClick={this.submitFormulario} type="button">
          Salvar
        </button>
      </form>
    );
  }
}

export default Formulario;
