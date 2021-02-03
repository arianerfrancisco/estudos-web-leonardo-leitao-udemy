// this dentro da funçao arrow, é FIXO. Assim, sendo chamado em contextos diferentes ele não será alterado.
// exemplo abaixo é feito no contexto global
let comparaComThis = function(param) {
    console.log(this===param)
}

comparaComThis(global)

const obj= {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // com o uso de bind >> this não aponta mais para o contexto global


//  agora dentro de uma função arrow no contexto global, this nao aponta para o contexto globalEval

let comparaComThisArrow = param => console.log(this===param)
comparaComThisArrow(global)

// utilizando o arrow o this irá apontar para o objeto em questão.

comparaComThisArrow (module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // arrow function sobrepõe bind