// funcao construtora
function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123) // utilizando operador new para instanciar objetos nessa funcao construtora
const aula2= new Aula('Até breve', 456)
console.log(aula1, aula2)