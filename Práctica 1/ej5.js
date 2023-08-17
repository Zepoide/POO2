const howManyTimeAppears = (arrayNum, n) =>{
    const nuevoArray = arrayNum.filter(num=>num===n)
    
    console.log(nuevoArray.length)
}

const array = [ 3, 6, 9, 3, 1, 5, 2, 10]

howManyTimeAppears(array, 3)
howManyTimeAppears(array, 5)
howManyTimeAppears(array, 7)