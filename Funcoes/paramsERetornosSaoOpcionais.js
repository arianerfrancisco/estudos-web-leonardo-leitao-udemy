// exemplo  extrapolado
function area (altura, largura) {
    const area = altura * largura
    if (area >20) {
        console.log(`Valor acima do permitido ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2,4))
console.log(area(25,4))