aprovados = ['Bia', 'Bia1', 'Bia2']
console.log(aprovados[0])// no js o array é indexado
aprovados[3]='Bia3' // adicionar ou substituir valores a partir de um indices
aprovados[1]= 'Trocado'
console.log(aprovados)
aprovados.push('Bia4') // ===> forma mais apropriada para adicionar um termo no array
console.log(aprovados.length) // comprimento 
aprovados[10] = 'Bia10'
console.log(aprovados)
aprovados.sort() // organiza por ordem crescente
console.log(aprovados)

delete aprovados[1] // excluindo itens, no entanto ele apenas retira o valor daquela posição, tornando-a indefininda. Assim não ocorre uma reorganizaçao dos itens
console.log(aprovados)


reprovados = ['aluno1', 'aluno2', 'aluno3', 'aluno4', 'aluno5', 'aluno6']
reprovados.splice(2,2) // ele vai excluir a partir do indice especificado no primeiro termo, seguindo pela quantidade de exclusao do seguinte.
console.log(reprovados)
// resultado: reprovados = ['aluno1', 'aluno2', 'aluno5', 'aluno6']

reprovados1 = ['aluno1', 'aluno2', 'aluno3', 'aluno4', 'aluno5', 'aluno6']
reprovados1.splice(2,2, 'Inclusao1', 'Inclusao2') // exclui, mas adiciona estes termos no lugar
console.log(reprovados1)

reprovados2 = ['aluno1', 'aluno2', 'aluno3', 'aluno4', 'aluno5', 'aluno6']
reprovados2.splice(2,0, 'Inclusao1', 'Inclusao2') // nao exclui, mas adiciona no indice 2 estes termos no lugar
console.log(reprovados2)