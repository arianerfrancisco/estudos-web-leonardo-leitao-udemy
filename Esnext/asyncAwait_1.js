// executa sincrono mesmo sendo assincrono, ou seja colocar a função para esperar
function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), tempo)
})
}

async function executar() { //não sendo necessário utilizar o .then para executar sequencialmente
    await esperarPor(1500)
    console.log('Async/Await 1 ...')

    await esperarPor(1500)
    console.log('Async/Await 2 ...')

    await esperarPor(1500)
    console.log('Async/Await 3 ...')
}

executar()