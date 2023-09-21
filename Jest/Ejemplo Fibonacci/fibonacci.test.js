const fibonacci = require("./fibonacci");

test("Fibonacci devuelve 0 cuando el parametro es 1", ()=>{
    resultado = fibonacci(1);

    expect(resultado).toBe(0)
})

test("Fibonacci devuelve 1 cuando el parametro es 2", ()=>{
    resultado = fibonacci(2);

    expect(resultado).toBe(1)
})

test("Fibonacci devuelve 1 cuando el parametro es 3", ()=>{
    resultado = fibonacci(3);

    expect(resultado).toBe(1)
})

test("Fibonacci devuelve 2 cuando el parametro es 4", ()=>{
    resultado = fibonacci(4);

    expect(resultado).toBe(2)
})

test("Fibonacci devuelve 3 cuando el parametro es 5", ()=>{
    resultado = fibonacci(5);

    expect(resultado).toBe(3)
})

test("Fibonacci devuelve 5 cuando el parametro es 6", ()=>{
    resultado = fibonacci(6);

    expect(resultado).toBe(5)
})

test("Fibonacci devuelve 8 cuando el parametro es 7", ()=>{
    resultado = fibonacci(7);

    expect(resultado).toBe(8)
})

test("Fibonacci devuelve 13 cuando el parametro es 8", ()=>{
    resultado = fibonacci(8);

    expect(resultado).toBe(13)
})

test("Fibonacci debe devolver error cuando el parametro es cero",()=>{

    const resultado = () => fibonacci(0);

    expect(resultado).toThrow(Error("Fibonacci no esta definido para numeros negativos o cero"))
}) 

test("Fibonacci debe devolver error cuando el parametro es numero negativo",()=>{

    const resultado_1 = () => fibonacci(-1);
    const resultado_2 = () => fibonacci(-2);
    const resultado_3 = () => fibonacci(-3);

    expect(resultado_1).toThrow(new Error("Fibonacci no esta definido para numeros negativos o cero"))
    expect(resultado_2).toThrow(new Error("Fibonacci no esta definido para numeros negativos o cero"))
    expect(resultado_3).toThrow(new Error("Fibonacci no esta definido para numeros negativos o cero"))
}) 
