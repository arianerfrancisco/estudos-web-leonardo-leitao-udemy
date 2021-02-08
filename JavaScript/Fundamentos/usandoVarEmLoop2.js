const funcs = []

for (var i = 0; i < 10 ; i++) {
    funcs.push(function() {
    // push > adicionar termos em um array de
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
// a variavel assumiu o ultimo valor