const escola = 'Cod3r'

console.log(escola.charAt(4)) // ira trazer a letra no indice 4
console.log(escola.charCodeAt(3)) // retorno unicode 
console.log(escola.indexOf('3')) // irá procurar pelo índice 3, achando ele irá mostrar sua posição
console.log(escola.substring(1))// imprimir do indice 1 para frente
console.log(escola.substring(0, 3)) // irá especificar o intervalo - sem incluir o indice 3 neste exemplo
console.log('Escola'.concat(escola).concat("!")) // concatenação
// literal > valores que nao são armanezados em variáveis
// string > conjunto de caracteres
console.log(escola.replace(3,'e')) // substituicao
console.log('Ana, Maria, Pedro'.split(',')) // irá criar um array (elementos independentes alinhados) separado por virgulas