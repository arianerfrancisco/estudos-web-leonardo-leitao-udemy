function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() { // a cada 1000 milisegundos esta função será disparada
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa