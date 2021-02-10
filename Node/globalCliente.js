require('./global') // o uso do global deve ser utilizado com resguardo, a melhor opção é utilizar por modulos

console.log(MinhaApp.saudacao())

MinhaApp.nome= 'Eita' // por ser global, pode ser alterado em qualquer lugar// para que isso nao ocorre podemos utilizar o freeze
console.log(MinhaApp.nome)