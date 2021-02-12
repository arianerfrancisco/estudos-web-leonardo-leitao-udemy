const fs = require('fs') // fs> referencia ao file system, para leitura do arquivo json]

const caminho = __dirname + '/arquivo.json'

// modo sincrono - lendo o arquivo COMPLETO  // metodo nao recomendado para arquivos grandes
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// modo assincrono

fs.readFile(caminho, 'utf-8', (err, conteudo) => { // o callback so ocorre depois do arquivo carregado, logo esse console.log ocorrerá depois do comando da linha 18
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// lendo arquivos JSON

const config = require('./arquivo.json') // ja traz o arquivo convertido em objeto, no entanto é necessario especificar o formato json, pois por padrão o programa ira procurar pelo formato js
console.log(config.db)

// __dirname ===>> representa o diretorio atual

// leitura de pasta

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta ... ')
    console.log(arquivos)
})