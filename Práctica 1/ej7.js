const personas = ["Lionel Messi", "Rodrigo Depaul", "Emiliano Martinez", "Angel Dimaria", "Soledad Jaimes", "Yamila Rodriguez", "Florencia Bonsegundo"];

const alfNombre = personas.sort()

console.log(alfNombre)

const invertido = personas.map((persona) => persona.split(' ').reverse().join(' '))

console.log(invertido)

const alfApellido = invertido.sort()

console.log(alfApellido)

