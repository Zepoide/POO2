const valores = [1,2,4,3,4,5,4,1,6,7,8,1,4,9,9,9,9,9,9]

// me fijo que número es el que más se repite

function mRepeticion(array){
    return array.reduce((acc, curr) => {
        const cant_actual = array.filter(e => e === curr).length
        const cantAcc = array.filter((item) => item === acc).length
        return cantAcc > cant_actual ? acc : curr
    }, 0)
}
    

const masRepetido = mRepeticion(valores)

console.log(masRepetido)