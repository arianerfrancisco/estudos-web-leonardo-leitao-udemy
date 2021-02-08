// extends > forma no js de definir que uma classe tem a outra como prototype

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao= 'Professor') {
        super(sobrenome) // instanciando a funcao construtora sobrenome da classe avo
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)