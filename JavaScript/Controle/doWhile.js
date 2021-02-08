function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min // por exemplo se o intervalor é 5 e 10 >> 10 - 5 = 5 elementos do intervalos + 5 > para iniciar a partir do intervalo
    return Math.floor(valor)
}

let opcao = -1

do { // com a utilizacao do DO, o bloco será executado pelo menos 1 vez, mesmo que esteja no valor da exceção
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
} while (opcao != -1)

console.log('Até a próxima')