const peso1 = 1.0
const peso2 = Number('2.0') // number >> está covertendo para tipo número, mesmo que tenha sido digitado como string

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // resultado true, pois é inteiro

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1*peso1 + avaliacao2*peso2
const media = total /(peso1 + peso2)

console.log(media.toFixed(2)) // toFixed(2) > quantidade de casas decimais
console.log(media.toString()) // >> convertendo para string
console.log(media.toString(2)) // >> convertendo para BINÁRIO

