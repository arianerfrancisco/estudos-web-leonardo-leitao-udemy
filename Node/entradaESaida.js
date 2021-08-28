// Ao passar dados pelo terminal, eles podem ser interpretados pelo process
const anonimo = process.argv.indexOf('-a') !== -1 // estamos procurando a flag -a
console.log(anonimo)
// console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}