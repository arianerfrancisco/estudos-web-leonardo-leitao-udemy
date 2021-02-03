// Arrow Function > forma reduzida
// Function sem redução
let dobro = function(a) {
    return 2 * a
}

// Arrow - função anônima, para chamá-la é necessário 
dobro = (a) => {
    return 2 * a
}

// pode-se tirar o parenteses quando há apenas 1 parametro, função de um unico trabalho> neste caso tem um retorno implicito
dobro = a => 2 * a

let ola = function() {
    return 'Olá!'
}

ola = () => 'Olá!'

console.log(dobro(Math.PI))
console.log(ola())