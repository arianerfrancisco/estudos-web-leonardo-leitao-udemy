// O CASO ABAIXO É ATRIBUIÇÃO POR REFERÊNCIA para
const a = {name: 'Teste'}
// a variavel a não fixa os valores name: 'Teste', mas sim o espaço da memória - ela tem  o endereço que aponta para o objeto
const b = a // atribuicao por referencia
// neste caso a variavel b irá apontar para o mesmo local da variável a
b.name = 'Opa'
console.log(a)
// como alterou b, a constante a também.

let c = 3
let d = c // atribuicao de valor
d++
console.log(d)
console.log(c) // o valor de c foi mantido, pois estamos trabalhando com um tipo primitivo, no caso anterior era um objeto, dai sua atribuicao por referencia