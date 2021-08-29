
/* 
A promessa possui uma função com outra como paramentro, que sempre será chamada quando quisermos cumprir a promessa,
Ela gera apenas um único valor, logo outros parametros passados serão desconsiderados. Como opção,podemos passar os parametros
como objeto, por exemplo, cumprirPromessa({x:3,y:4}) > para acessar valor,valor.x ou valor.y
ou um array.
Acessar os dados com .then - mas só quando a chamada é cumprida
Podemos criar arrow function para acessar os dados
p.then(valor=>console.log(valor))
podemos tratar esse retorno do .then toda vez que for chamado.
Na segunda chamada do .then o valor é atualizado, ou seja os resultados são herdados
*/

new Promise(function(resolve) {
    cumprirPromessa(['Ana', 'Bia'])
})
    .then(valor)
    .then(valor)
    .then(valor)
    .then(valor)
