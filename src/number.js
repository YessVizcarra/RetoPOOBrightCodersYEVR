const displaynums = require('./numbers');

const espacio = ' '
const retorno = '\n'

const numerodigito = function (numero) {
    return displaynums[numero]
}
const conjuntoNumeros = function (numeros) {
    const lineas = []
    let numeroIndex = 0

    for (const numero of numeros) {
        const digito = numerodigito(Number(numero))
        const division = digito.split(retorno)
        for (let altoIndex = 1; altoIndex < division.length - 1; altoIndex++) {
            if (numeroIndex === 0 && altoIndex === 1 && !lineas[altoIndex]) {
                division[altoIndex] = retorno + division[altoIndex] + espacio
            } else if (!lineas[altoIndex]) {
                lineas[altoIndex] = division[altoIndex]  + espacio
            } else if (numeroIndex + 1 <numeros.length) {
                lineas[altoIndex] += division[altoIndex] + espacio
            } else {
                lineas[altoIndex] += division[altoIndex]
            }
        }
        numeroIndex++
    }
    return LineasDelosDigitos(lineas)
}
const LineasDelosDigitos= function (lineas) {
    return lineas.reduce((resultado, linea) => {
        resultado += `${linea}\n`
        return resultado
    }, '')
}
module.exports = {
    numerodigito,
    conjuntoNumeros
}