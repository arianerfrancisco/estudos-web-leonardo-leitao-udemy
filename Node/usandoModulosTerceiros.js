const _= require('lodash')
setInterval(() => console.log(_.random(1, 1000)),2000) // uma funcao dentro de uma biblioteca de terceiros, que irá imprimir no terminal numeros aleatorios
// este 2000 > se refere ao tempo de execucao, que no caso é 2000 milisegundos ou 2 segundos