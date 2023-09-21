const suma = require("./suma");

test("suma 2 + 5 = 7", () =>{
    expect(suma(2,5)).toBe(7)
})

test("suma 5 + 5 = 10", () =>{
    expect(suma(5,5)).toBe(10)
})

test("suma 3 + 5 = 8", () =>{
    expect(suma(3,5)).toBe(8)
})