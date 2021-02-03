/* contexto lexico = uma funcao pode ser instanciada em qualquer local do codigo, mas no momento que ela é instanciada ela carregará 
o contexto na qual foi inscrita */

const valor = 'Global'

function minhaFuncao() {
    // sobrepõe o valor no contexto global e nao o que foi declarado localmente na funcao abaixo, que chamou esta funcao
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()
