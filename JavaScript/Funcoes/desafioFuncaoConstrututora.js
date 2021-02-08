// função construtora - retorna um objeto, onde seus atributos (tanto funcoes como variaveis) podem ser acessadas no contexto global
function pessoa (nome) {
    this.nome= nome
    this.falar= function () {
        console.log(`Meu nome é ${nome}`)
    }
}

const p1 = new pessoa ('João')
p1.falar()
