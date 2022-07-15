const {conjuntoNumeros} = require('./number');
const mensaje = "Ingresa el número por favor";
const argv = process.argv.slice(2);

if(argv.length === 0) {
    console.info(mensaje)
} else {
    const numeros = argv[0]
    try {
        const pantallaNumeros= conjuntoNumeros(numeros)
        console.info(pantallaNumeros);
    }catch (error){
        console.error(error);
        console.info(mensaje);
    }
}