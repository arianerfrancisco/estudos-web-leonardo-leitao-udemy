//JSON é um formato de dados. Textual de forma genérico, que não carrega informações do sistema que foi criado. Simples leitura, onde todas
// as linguagens consegue utilizar
// Ele serve para comunicar sistemas de tecnologias diferentes

// convertendo um objeto para JSON 
const obj = { a:1, b:2, c:3, soma() { return a + b + c}}
console.log(JSON.stringify(obj)) // imprimi um texto, exluindo a funcao, ja que ele possui um formato de dados, nao executando nada

// convertendo um  JSON para objeto
console.log(JSON.parse('{"a":1, "b":2, "c":3}')) // JSON string e atributos  precisas de aspas duplas