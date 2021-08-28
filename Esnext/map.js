const tecnologias = new Map() // com o map podemos criar várias tipos de chave/valores para um objeto como funções ou outros objetos, por exemplo.
tecnologias.set('react', { framework: false }) // SET > defini
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // retorno no terminal > undefined
console.log(tecnologias.get('react').framework) // forma de correta de acessar os valores > GET> pegue

const chavesVariadas = new Map([ // isso não daria para fazer num objeto 
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => { // acessando os dados de chavesVariadas
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // has> se o elemento está ou não contido
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) // quantos elementos estão presentes. Neste caso são 2, pois o 123 foi excluido

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') // como as chaves não podem ser duplicadas, os valores serão subtituidos
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)