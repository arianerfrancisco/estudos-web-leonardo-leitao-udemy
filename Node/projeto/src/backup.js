const porta = 3003 // toda aplicacao que se comunica na rede precisará realizar por uma porta - caminho unico para um processo.

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true })) // qualquer requisao que fizermos no servidor pelo express...
// ele passará or aqui - vai transformar o corpo da requisicao em objeto 

app.get('/produtos', (req, res, next) => {  // GET > Requisição à produtos
    res.send({nome:'Notebook', preco: 123.45}) // ira converter para JSON // resposta ao get - Função SEND - envia resposta
    res.send(bancoDeDados.getProdutos()) // ira converter para JSON // resposta ao get - Função SEND - envia resposta
})
app.get('/produtos/:id',(req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id)) // os parametros estao na requisicao

})
app.post('/produtos',(req, res, next) =>{ // submeter os dados e salvar um novo produto // mandamos o dados  como formularios 
    const produto = bancoDeDados.salvarProduto ({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})     

// alterar dados atraves do produto

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

// excluir dados

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

app.listen(porta,() => { 
    console.log(`Servidor executando na porta, teste ${porta}.`)
    console.log(`Servidor executando na porta, teste  ${porta}.`)
})