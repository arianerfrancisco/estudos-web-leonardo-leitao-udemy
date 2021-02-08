// imperativo: os detalhes da execução são  mais explicitas
const alunos = [
    {nome: 'João', nota: 8.9},
    {nome: 'Pedro', nota: 5.9}
]
let total1 = 0

for (let i=0 ; i < alunos.length; i++) {
    total1 += alunos[i].nota
}

console.log(total1/alunos.length)

// declarativo

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma) // detalhes de execução implicitos
console.log(total2/alunos.length)