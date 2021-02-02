// this dentro da funçao arrow, é FIXO. Assim, sendo chamado em contextos diferentes ele não será alterado.
// setInterval >> temporizador
function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade ++
        console.log(this.idade)
    },1000)
}

new Pessoa // new >> instanciar