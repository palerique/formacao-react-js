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
        <div className="row">
          <div className="input-field col s4">
            <label className="input-field" htmlFor="nome">
              Nome
              <input
                className="validate"
                id="nome"
                type="text"
                name="nome"
                value={nome}
                onChange={this.escutadorDeInput}
              />
            </label>
          </div>
          <div className="input-field col s4">
            <label className="input-field" htmlFor="livro">
              Livro
              <input
                className="validate"
                id="livro"
                type="text"
                name="livro"
                value={livro}
                onChange={this.escutadorDeInput}
              />
            </label>
          </div>
          <div className="input-field col s4">
            <label className="input-field" htmlFor="preco">
              Preço
              <input
                className="validate"
                id="preco"
                type="text"
                name="preco"
                value={preco}
                onChange={this.escutadorDeInput}
              />
            </label>
          </div>
        </div>

        <div className="col offset-s4 s4">
          <button
            onClick={this.submitFormulario}
            className="btn waves-effect waves-light indigo lighten-2 right"
            type="button"
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

export default Formulario;
