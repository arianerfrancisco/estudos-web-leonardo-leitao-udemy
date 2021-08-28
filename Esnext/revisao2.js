// arrow function : funções anônimas. Atribuimos a elas uma constante para ser chamada
const soma = (a,b) => a + b

// em caso de 1 parametro não precisa de () const soma = a => a * 2
// caso queira definir a função em modo de bloco é obrigatório utilizar return

const soma1 = (a,b) => {
   return a + b
}
console.log(soma(15,3))
console.log(soma1(15,3))

//Arrow function (this) . No conexto tradicional do JS o this aponta conforme foi definido, mas no arrow function > sempre apontará
// ao local que foi criado, assim apontará para module.exports
const lexico1 = () => console.log(this==exports)

// parametro default > podemos definir um parametro padrão para a função, quando esta não for definida
function log(texto = 'Node'){
    console.log(texto)
}
log('Ariane')
log()

// operador rest > varios parametros de uma função

function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(15,3))