const funcs = []

for (let i = 0; i < 10 ; i++) {
    funcs.push(function() {
    // push > adicionar termos em um array de
        console.log(i)
    })
}

funcs[2]()
funcs[8]()