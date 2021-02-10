module.exports = function (... nome) {// o uso de ... é deixar a possibilidade de inserir quantos nomes desejar
    return nome.map(nome => `Boa Semana ${nome}!`) 
}

