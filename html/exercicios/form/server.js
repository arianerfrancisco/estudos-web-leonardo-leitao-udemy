const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// para executar colocar no cmd C:\Users\Ariane\Desktop\Meus Projetos\Estudos-LeonardoLeitao-WEB\html\exercicios\form>node server.js
//  lembrando que o outro precisa estar funcionando PS C:\Users\Ariane\Desktop\Meus Projetos\Estudos-LeonardoLeitao-WEB\html> http-server .

// app.use(bodyParser.urlencoded({ extended: true })) remove esse e teste o de baixo
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    console.log(req.query)
    resp.send('<h1>Parabéns. Usuário Incluido!!!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Alterado!!!</h1>')
})

app.listen(3003)