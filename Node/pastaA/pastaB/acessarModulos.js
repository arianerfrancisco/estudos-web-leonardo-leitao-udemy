//require: acionando modulos em outros locais
const moduloA = require('../../moduloA') // ===> ../ > significa retorno a uma pasta anterior
console.log(moduloA.ola)

//acessando modulos internos do node

// para importar um outro modulo desta pasta
const c = require('./pastaC/index') // pela funcao estar em index, podemos apenas citar o nome da pasta, que será acionado automaticamente
console.log(c.ola2)

/* ===const http = require('http') // neste caso nao precisa de caminho relativo
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080) 
console.log('ola') */

