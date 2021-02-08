function soBoaNotiacia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade ...' + valor)
    }
}

soBoaNotiacia(8)
soBoaNotiacia(6)

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo('  ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})
