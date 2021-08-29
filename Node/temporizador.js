const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('/5 * * * * *', function () { 
    // */5(intervalo de 5 seg) * (ignorar minuto) 16 (hora) * (ignorar dia do mes) * (ignorar  mes) 5 (dia da demana, sendo o domingo 0)'
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

// Temporizador padrão do JS 

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1')
}, 200)

// Outro temporadorizadores padrões js
// setImediate - Não recisa de definição de intervalo
// setInterval - Executa em intervalos definidos 

const regra = new schedule.RecurrenceRule() // executar regras recorrentes
regra.dayOfWeek = [new schedule.Range(1,5)] // 1 -5 executará  de segunda a sexta
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})



