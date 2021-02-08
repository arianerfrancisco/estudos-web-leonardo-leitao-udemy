const pilotos = ['Pilotos1', 'Pilotos2', 'Pilotos3', 'Pilotos4']
console.log(pilotos)

pilotos.pop() // > remove o ultimo elemento 
console.log(pilotos)

pilotos.push('Piloto5') // > adiciona esse elemento no ultimo indice
console.log(pilotos)

pilotos.shift() // > remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Piloto6') // > adiciona esse elemento no primeiro indice
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // >> cria um  novo array a partir do indice 2
console.log(algunsPilotos1)

// pode-se fatiar um novo array com slice, sendo o primeiro termo o inicio (incluindo ele) até o ultimo (excluindo este)

pilotos2 = [ 'Pilotos1', 'Pilotos2', 'Pilotos3', 'Piloto4','Piloto5', 'Piloto6' ]
const novosPilotos =  pilotos2.slice(3,5) // criará um novo array com elementos dos indices 3 e 4, excluindo do indice 5
console.log(novosPilotos)