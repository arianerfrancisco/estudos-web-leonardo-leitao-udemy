const fs = require('fs')

const produto ={
    nome: 'Celular',
    preco: 1249.99, 
    desconto: 0.15
}

// convertendo para formato json salvando no disco com o metodo writeFile

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => { // este callback ira ocorrer somente em caso de erro
    console.log(err || 'Arquivo salvo!') // se a mensagem de erro for nula, ira apresentar a mensagem 'Arquivo salvo'
})