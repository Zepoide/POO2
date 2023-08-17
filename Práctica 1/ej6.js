const array1 = [4, 8, 2, 13, 20]
const array2 = [ 4, 8, 2, -5, 20]

const sumaValorMasChico = array =>{
    const arrayOrdenado = array.sort((a,b) => a - b)
    const numeroMasChico = arrayOrdenado[0]
    const arraySumado = arrayOrdenado.map(num=>num + numeroMasChico)

    console.log(arraySumado)

}

sumaValorMasChico(array1)
sumaValorMasChico(array2)

