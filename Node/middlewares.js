// middleware pattern (chain of responsibility) - cadeia de responsabilidade
// Express é fortemente baseado em middlewares 
// Existe um acoplamento entre as etapas, mas nao esta definido uma sequencia
// a funcao next() passa para o proximo passo
//  a cadeia é interrompida, quando a proxima funcao deixa de ter netx()

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx =>  ctx.valor3 = 'mid3' // se ele for executado primeiro, os proximos nao serao chamados, pois ele nao tem next()
    
const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length && // verificando se o indice passado existe
        middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)