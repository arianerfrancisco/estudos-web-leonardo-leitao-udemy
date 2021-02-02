// acessando o atributo de um objeto com this
// this pode variar dependendo da forma que é chamado
const pessoa = {
    saudacao: 'Bom dia!', 
    falar () {
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() // neste contexto this não apontará mais para o falar da função anterior, para resolver esta situação, deve-se usar BIND

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()