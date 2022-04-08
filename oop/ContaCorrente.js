class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, saldo, cartao){
        super(agencia, numero, "Conta Corrente", saldo);
        this._cartao = cartao;
    }
    get cartao(){
        return this.cartao;
    }
    set cartao(cartao){
        this._cartao = cartao;
    }
}