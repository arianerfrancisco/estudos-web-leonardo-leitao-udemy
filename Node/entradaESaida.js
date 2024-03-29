// Ao passar dados pelo terminal, eles podem ser interpretados pelo process
const anonimo = process.argv.indexOf('-a') !== -1 // procurará o parametro -a. 
/*Para executar esse código, temos que chamar  o arquivo dentro do terminal
 dentro da pasta correta colocar: node ./entradaESaida.js -a > colocando esse valor o retorno será true 
caso contrário será false e solicitará o nome devido aos códigos abaixo. */
console.log(anonimo)
// console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n') 
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { // evento data é quando digita-se no teclado e depois tecla enter
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}`)
        process.exit()
    })
}

