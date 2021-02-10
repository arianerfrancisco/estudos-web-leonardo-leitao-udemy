// formas de exportar: com this, exports e module.exports
console.log(module.exports === this)
console.log(module.exports === exports)

this.a= 1 // ficará visivel fora deste modulo
exports.b = 2
module.exports.c = 3