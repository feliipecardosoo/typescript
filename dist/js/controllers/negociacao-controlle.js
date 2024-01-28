import { Negociacao } from "../models/negociacao.js";
export class NegociacaoControler {
    constructor() {
        this._inputData = document.querySelector('#data'),
            this._inputQuantidade = document.querySelector('#quantidade'),
            this._inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
        this.limparForm();
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this._inputData.value.replace(exp, ','));
        const quantidade = parseInt(this._inputQuantidade.value);
        const valor = parseFloat(this._inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparForm() {
        const inputs = [this._inputData, this._inputQuantidade, this._inputValor];
        inputs.forEach(input => {
            input.value = '';
        });
        this._inputData.focus();
    }
}
