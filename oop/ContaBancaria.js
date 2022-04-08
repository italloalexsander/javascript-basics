class ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }
    get saldo(){
        return this._saldo;
    }
    set saldo(saldo){
        this._saldo = saldo;
    }
    sacar(valor){
        if(valor > this.saldo){
            return "Operacao Negada";
        }
        this._saldo -= valor;
    }
    depositar(valor){
        this._saldo += valor;
    }
}