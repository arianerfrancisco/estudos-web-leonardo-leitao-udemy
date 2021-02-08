function rand({min= 0, max=1000}) {
    // foi definido o valor padrao para max e min, mas lembrando que pode ser alterado no momento de refereciar a funcao
    const valor = Math.random()*(max-min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min:955}))
console.log(rand({})) // como nao estamos passando nada, ele ira assumir o valor padrao