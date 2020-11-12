console.log('01)', '1'==1) // comparando apenas valor
console.log('01)', '1'===1) // comparando valor e tipom, o primeiro é string

console.log('01)', '1'!=1) // comparando apenas valor
console.log('01)', '1'!==1) // comparando valor e tipom, o primeiro é string > neste caso sao diferentes tanto em tipo ou valor

const d1= new Date(0)
const d2= new Date(0)
console.log(d1 == d2 ) // esta comparando um espaço de memoria
console.log(d1.getTime() == d2.getTime()) // esta comparando valor