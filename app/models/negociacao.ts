export class Negociacao {
    private _data: Date
    private _quantidade: Number
    private _valor: Number

    constructor(data: Date, quantidade: Number, valor: Number) {
        this._data = data,
        this._quantidade = quantidade,
        this._valor = valor
    }

    get data(): Date {
        return this._data
    }

    get quantidade(): Number {
        return this._quantidade
    }

    get valor(): Number {
        return this._valor
    }

    // get volume(): Number {
    //     return this._quantidade * this._valor
    // }
}