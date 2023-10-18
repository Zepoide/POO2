const contar = require('./contar')

describe('contar', () => {
    test("Funcion que devuelve 0", () =>{
        const res = contar("")
        expect(res).toBe(0)
    })
})