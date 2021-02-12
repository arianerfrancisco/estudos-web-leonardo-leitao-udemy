const porta = 3003 // toda aplicacao que se comunica na rede precisará realizar por uma porta - caminho unico para um processo.

const express = require('express')
const app = express()



app.get('/produtos', (req, res, next) => {  // GET > Requisição à produtos
    res.send({nome:'Notebook', preco: 123.45}) // ira converter para JSON // resposta ao get - Função SEND - envia resposta
})

app.listen(porta,() => { 
    console.log(`Servidor executando na porta, teste ${porta}.`)
    console.log(`Servidor executando na porta, teste  ${porta}.`)
})