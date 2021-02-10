const url ='http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // axios> client http, que faz requisicoes para obter informacoes de algo remoto
// encontrar na lista a chinesa de menor salario

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => { // esta funcao sera utilizada em reduce> q ficará varrendo o menor salario
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)
    console.log(func)
}) // obter o conteudo do arquivo que há no url citado


