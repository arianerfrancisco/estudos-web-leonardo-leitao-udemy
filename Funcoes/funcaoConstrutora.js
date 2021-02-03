// funcao construtora: se comporta como uma classe (molde), onde varios objetos podem ser criados

function Carro(velocidadeMaxima= 200, delta=5) {
    // atributo privado
    let velocidadeAtual = 0
    // metodo publico
    this.acelerar = function() { // this torna visivel fora da funcao construtora
        if (velocidadeAtual + delta <= velocidadeMaxima) {
        velocidadeAtual += delta
     }
        else {
        velocidadeAtual = velocidadeMaxima
     } }
    // metodo publico, estrategia para tornar visivel fora deste escopo
    this.getVelocidadeAtual = function() {
    return velocidadeAtual
}
}

const uno = new Carro  // neste carro como nao fornecemos o valor de parametro, ele ira assumir o padrao da funcao
uno.acelerar() // apesar de nao imprimir nada na tela. A função foi executada
console.log(uno.getVelocidadeAtual()) //  esta função conforme foi definida, ira retornar o valor da velocidade atual, levando em conta que a mesma foi alterada pela chamada da funcao acelera // 

const ferrari = new Carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar() // a velocidade foi alterada 3 vezes, devido a quantidade de chamadas da funcao
console.log(ferrari.getVelocidadeAtual()) 