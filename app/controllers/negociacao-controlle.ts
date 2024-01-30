import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js"
import {NegociacoesView} from "../views/negociacoes-view.js"

export class NegociacaoControler {
    private _inputData: HTMLInputElement
    private _inputQuantidade: HTMLInputElement
    private _inputValor: HTMLInputElement
    private negociacoes = new Negociacoes()
    private negociacoesView = new NegociacoesView('#negociacoesView')

    constructor() {
        this._inputData = document.querySelector('#data'),
        this._inputQuantidade = document.querySelector('#quantidade'),
        this._inputValor = document.querySelector('#valor')
        this.negociacoesView.update(this.negociacoes)
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao()
        this.negociacoes.adiciona(negociacao)
        this.negociacoesView.update(this.negociacoes)
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