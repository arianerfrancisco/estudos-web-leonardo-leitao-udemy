function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve('Vishi!')
            }, tempo)
})
}
//esperarPor(3000).then(texto => console.log(texto)) < atribuindo tempo de espera,abaixo valor padrão
esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)