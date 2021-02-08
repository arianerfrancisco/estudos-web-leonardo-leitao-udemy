// acessar os modulos A e B
const moduloA = require('./moduloA') // (./ > exportando caminho relativo)
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemvindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)
