import validador from 'validator';

class FormValidator {
  constructor(validacoes) {
    this.validacoes = validacoes;
  }

  valida(state) {
    const validacao = this.valido();

    this.validacoes.forEach(regra => {
      const campoValor = state[regra.campo.toString()];
      const metodoValidacao =
        typeof regra.metodo === 'string' ? validador[regra.metodo] : regra.metodo;
      const args = regra.args || [];

      if (metodoValidacao(campoValor, ...args, this.state) !== regra.validoQuando) {
        validacao[regra.campo] = {
          isInvalid: true,
          message: regra.mensagem,
        };
        validacao.isValid = false;
      }
    });
    return validacao;
  }

  valido() {
    const validacao = {};
    this.validacoes.forEach(regra => {
      validacao[regra.campo] = {
        isInvalid: false,
        message: '',
      };
    });
    return {isValid: true, ...validacao};
  }
}

export default FormValidator;
