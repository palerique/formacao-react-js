import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormValidator from '../../utils/FormValidator';
import PopUp from '../../utils/PouUp';

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.validador = new FormValidator([
      {
        campo: 'nome',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com um nome',
      },
      {
        campo: 'livro',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com um livro',
      },
      {
        campo: 'preco',
        metodo: 'isInt',
        validoQuando: true,
        args: [{min: 0, max: 9999}],
        mensagem: 'Entre com um numero',
      },
    ]);

    this.stateInicial = {
      nome: '',
      livro: '',
      preco: '',
      validacao: this.validador.valido(),
    };

    this.state = this.stateInicial;
  }

  submitFormulario = () => {
    const {escutadorDeSubmit} = this.props;
    const validacao = this.validador.valida(this.state);

    if (validacao.isValid) {
      escutadorDeSubmit(this.state);
      this.setState(this.stateInicial);
    } else {
      const {nome, livro, preco} = validacao;
      const campos = [nome, livro, preco];

      const camposInvalidos = campos.filter(elem => {
        return elem.isInvalid;
      });
      camposInvalidos.forEach(campo => PopUp.exibeMensagem('error', campo.message));
    }
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
        <Grid container spacing={2} alignItems="center">
          <Grid className="col s4">
            <TextField
              id="nome"
              label="Nome"
              name="nome"
              variant="outlined"
              value={nome}
              onChange={this.escutadorDeInput}
            />
          </Grid>
          <Grid className="col s4">
            <TextField
              id="livro"
              label="Livro"
              name="livro"
              variant="outlined"
              value={livro}
              onChange={this.escutadorDeInput}
            />
          </Grid>
          <Grid className="col s4">
            <TextField
              id="preco"
              label="Preco"
              name="preco"
              variant="outlined"
              value={preco}
              onChange={this.escutadorDeInput}
            />
          </Grid>
        </Grid>
        <Grid className="col offset-s4 s4">
          <button
            onClick={this.submitFormulario}
            className="btn waves-effect waves-light indigo lighten-2 right"
            type="button"
          >
            Salvar
          </button>
        </Grid>
      </form>
    );
  }
}

export default Formulario;
