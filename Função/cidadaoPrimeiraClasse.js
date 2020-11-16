function fun1() {}

// funcao pode ser armazenar numa variavel
const fun2 = function (){} 

// podemos armazenar num array 
const array = [function (a,b){ return a + b}, fun1, fun2] 
console.log(array[0](2,3))

// armazenar num objeto
const obj = {}
obj.falar = function (){return 'Opa'}
console.log(obj.falar())

// uma funcao pode ser passsada como parametro 
function run(fun){
    fun()
}
run(function () { console.log('Executando...')})


// uma funcao pode retornar outra funcao 

function soma (a,b) { 
    return function (c) { 
        console.log(a+b+c)
    }
}

soma(3,2)(4)

// ou chamando indiretamente

const cincoMais = soma(3,2)
cincoMais(4)