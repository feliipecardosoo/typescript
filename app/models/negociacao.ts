export class Negociacao {
    private _data: Date
    private _quantidade: Number
    private _valor: Number

    constructor(data: Date, quantidade: Number, valor: Number) {
        this._data = data,
        this._quantidade = quantidade,
        this._valor = valor
    }

    get data() {
        return this._data
    }

    get quantidade() {
        return this._quantidade
    }

    get valor() {
        return this._valor
    }

    // get volume() {
    //     return this._quantidade * this._valor
    // }
}