let contador = 1
while (contador <= 10) {
    console.log(`contador = ${contador}`)
    contador ++
}

for (let i= 1; i <= 10; i++) {
    console.log(`i= ${i}`)
}

const notas = [1.1, 2.5, 4.5, 8.8]
for (let i=0; i < notas.length; i++) { // declarando com let para nao ficar acessivel fora deste bloco
    console.log(`nota= ${notas[i]}`) // percorrente o array
}

