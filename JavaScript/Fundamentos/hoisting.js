console.log('a', a) // a variavel a sera reconhecida mesmo que tenha sido declarada na linha abaixo, exceto que nao tera a definicao de valor - existe, mas nao tem valor - conceito de hosting
var a = 2
console.log('a',a)



// este efeito de içamento - hoisting - nao funciona com let - ira retornar que a variavel nao foi iniciada
console.log('b', b) // a variavel a sera reconhecida mesmo que tenha sido declarada na linha abaixo, exceto que nao tera a definicao de valor - existe, mas nao tem valor - conceito de hosting
// este efeito de içamento - hoisting - nao funciona com let
let b = 2
console.log('b',b)