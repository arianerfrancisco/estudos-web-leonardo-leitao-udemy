const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // retorna uma funcao factory
const contadorD = require('./instanciaNova')()

contadorA.inc() 
contadorA.inc()
console.log(contadorB.valor) // node faz cache, por isso mostra o que foi executado com esse objeto ao executar o contadorA duas vezes
// o valor original era 1 e o resultado saiu agora como 3, devido as 3 incrementações sofridas

contadorC.inc() 
contadorC.inc()
console.log(contadorD.valor) // o valor nao esta alterado, pois sao novas instancias a partir de uma factory