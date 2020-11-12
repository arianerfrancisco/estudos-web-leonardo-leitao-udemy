var numero = 10
{
    let numero = 20
    console.log('dentro= ', numero)
    // ele busca numero primeiro no escopo internet, caso nao tenha, buscará fora 
}
console.log('fora=', numero)
// estao em escopos diferentes, pois let esta em um bloco

// VARIAVEIS DEFINIDAS COM A PALAVRA VAR TEM ESCOPO GLOBAL E DE FUNÇÃO E  AS VARIAVEIS DEFINIDAS COM A PALAVRA LET TEM ESCOPO GLOBAL DE FUNCAO E  DE BLOCO 