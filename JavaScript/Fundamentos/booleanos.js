let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
// negacao duas vezes volta pro valor original

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(isAtivo=true)

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(isAtivo = false)
console.log(!!('' || null || 0 || ' ')) //// se um destes for verdadeiro, irá retornar true

let nome =''
console.log(nome||'Desconhecido')
// caso o nome nao tenha sido digitado, será executado o termo seguinte que é imprimir a palavra desconhecido






