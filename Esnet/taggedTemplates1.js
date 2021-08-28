// tagged templates - processa o template dentro de uma função
function tag(partes, ...valores) {
    //console.log(partes)
   // console.log(valores)
    return 'Outra string'
}
/*
 resultado do terminal> 
[ '', ' está ', '.' ]
[ 'Gui', 'Aprovado' ]
*/

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)
/* 
Como utilizou TAG> o returno será 'Outra string'
 resultado do terminal> Outra string 
 */