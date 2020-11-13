function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min // por exemplo se o intervalor é 5 e 10 >> 10 - 5 = 5 elementos do intervalos + 5 > para iniciar a partir do intervalo
    return Math.floor(valor)
}

let opcao = 0

while ()