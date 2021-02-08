const a = 1
const b= 2
const c = 3

const obj1 = {a, b, c}
console.log(obj1)
const obj2 = {a:2, b, c} // caso queira alterar algum valor
console.log(obj2)

// Criando objetos a partir de variaveis ja inicializadas

const nomeAtributo= 'Nota'
const valorAtributo= 7

const obj3 = {[nomeAtributo]: valorAtributo}
console.log(obj3)

// criando funcoes dentro de objetos

const obj4 = {
    funcao1() {
        return
    }
}
console.log(obj4)