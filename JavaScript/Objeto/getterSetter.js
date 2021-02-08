//getter (ler) e setter(alterar): sao funcoes que permitem alterar variaveis
const sequencia = {
    _valor: 1, // convenção > _ indica que a variavel precisa ser acessada só internamente
    get valor() { return this._valor++ },
    set valor (valor) {
        if (valor > this._valor) {
            this._valor = valor 
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // nao ira passar na condicional, assumindo assim o valor anterior
console.log(sequencia.valor, sequencia.valor)