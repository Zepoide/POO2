const pilotos = ["Verstappen", "Hamilton", "Russell", "Sainz", "Perez", "Leclerc", "Norris","Alonso", "Ocon", "Vettel"];

//a
console.log(pilotos.indexOf("Russell") + 1)
//b
console.log(pilotos[5])
//c
const result = pilotos.filter(piloto => piloto.includes("a") || piloto.includes("A"))

console.log(result)
//d
const otrosPilotos = ["Russell", "Bottas","Perez"]

const estaEnPilotos = otrosPilotos.map(piloto=>pilotos.includes(piloto))

console.log(estaEnPilotos)
//e
pilotos.splice(1, 0, 'Perez')

console.log(pilotos)