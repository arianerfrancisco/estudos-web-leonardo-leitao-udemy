// com o forEach tem acesso ao indice do array 
// podemos passar tres parametros para esta funcao nome, indice e array

const aprovados = ['Aluno1','Aluno2','Aluno3','Aluno4','Aluno5','Aluno6' ]

aprovados.forEach(function(nome,indice) {
    console.log(`${indice + 1} ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)