const fabricantes = ['carro 1', 'carro 2', 'carro 3']

function imprimir(nome,indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))