function fibonacci(num){
    validarNumeroSeaPositivo(num)
    return num>=3 ? fibonacci(num-1) + fibonacci(num-2) : num - 1;
}

function validarNumeroSeaPositivo(num){
    if(num<=0){
        throw Error("Fibonacci no esta definido para numeros negativos o cero")
    }
}

module.exports = fibonacci;