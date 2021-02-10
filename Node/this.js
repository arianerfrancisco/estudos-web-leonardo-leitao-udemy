console.log(this === global) // this aponta para module.exports
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

// dentro de uma funcao, this nao aponta para exports e module.exports

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this===exports)
    console.log(this===module.exports)
    console.log(this===global)
}

logThis()

//this dentro de uma função, ele aponta para o global 
// this dentro de um modulo e fora de uma função, ele aponta para module.exports >> o que torna ele publico (visivel fora daquele modulo)