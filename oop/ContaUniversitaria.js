class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia, numero, "Conta Universitaria", saldo)
    }
    sacar(valor){
        if (valor >= 500){
            return "Valor indisponivel para o tipo de conta"
        }
        else{
            this._saldo -= valor;
        }
    }

}