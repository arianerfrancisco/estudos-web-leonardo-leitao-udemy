{{{{{{
    var sera = 'Será???'
}}}}}}
// a variavel var dentro do bloco é visivel fora dele, mas em uma funcao não

console.log(sera)

function teste(){
    var local = 1234
    console.log(local)
}

teste()
console.log(local) //  a variavel local nao consegue ser referenciada fora dela