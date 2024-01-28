import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js"

export class NegociacaoControler {
    private _inputData: HTMLInputElement
    private _inputQuantidade: HTMLInputElement
    private _inputValor: HTMLInputElement
    private negociacoes = new Negociacoes()

    constructor() {
        this._inputData = document.querySelector('#data'),
        this._inputQuantidade = document.querySelector('#quantidade'),
        this._inputValor = document.querySelector('#valor')
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao()
        this.negociacoes.adiciona(negociacao)
        console.log(this.negociacoes.lista())
        this.limparForm()
    }

    criaNegociacao(): Negociacao {
        const exp = /-/g
        const date = new Date(this._inputData.value.replace(exp, ','))
        const quantidade = parseInt(this._inputQuantidade.value)
        const valor = parseFloat(this._inputValor.value)
        return new Negociacao(date, quantidade, valor)
    }

    limparForm(): void {
        const inputs = [this._inputData, this._inputQuantidade, this._inputValor];
        inputs.forEach(input => {
            input.value = '';
        });
        this._inputData.focus()
    }
}