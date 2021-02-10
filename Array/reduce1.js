const alunos = [
    {nome: 'Aluno1', nota: 5, bolsista: false},
    {nome: 'Aluno2', nota: 15, bolsista: true},
    {nome: 'Aluno3', nota: 5, bolsista: false},
    {nome: 'Aluno4', nota: 8, bolsista: true},
    {nome: 'Aluno5', nota: 6, bolsista: false},
]
console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador,atual) { // acumuladador >> resultado da funcao anterior, no caso map
    console.log(acumulador, atual)
    return acumulador + atual 
})
console.log(resultado)
// podemos definir um valor inicial nesta function de acumulador + atual, acrescenta o 10 conforme exemplo na linha 19
console.log(alunos.map(a => a.nota))
const resultado1 = alunos.map(a => a.nota).reduce(function(acumulador,atual) { // acumuladador >> resultado da funcao anterior, no caso map
    console.log(acumulador, atual)
    return acumulador + atual 
},10)
console.log(resultado1)