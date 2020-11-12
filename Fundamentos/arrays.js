// array heterogeneos -- dinâmico
const valores = [7.7, 8.9, 9.0, 5.6]
console.log(valores[0], valores[3])
console.log(valores[4])
// solicitando o indice que nao existe no array, ele irá retornar apenas undefined
valores[4] = 10
console.log(valores[4])
valores[10] = 50
// ele irá retornar itens vazios nos indices anteriores ao 10
console.log(valores)
console.log(`Possui ${valores.length} elementos`) // comprimento do array

valores.push({id:3}, false, null) // push > adicionar novos elementos no array -- id > objeto
console.log(valores)
console.log(valores.pop()) // pop > ultimo valor do array
delete valores[0]
console.log(valores)
console.log(typeof valores)