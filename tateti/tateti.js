class Pieza{
    constructor(esCirculo){
        this.esCirculo = esCirculo
    }

    toString(){
        return this.esCirculo ? 'o' : 'x'
    }
}

class Casilla{
    constructor(posicion){
        this.posicion = posicion
        this.pieza = null
    }

    toString(){
        return this.pieza === null ? '' : this.pieza.toString()
    }

    setPieza(pieza){
        if (this.pieza !== null){
            throw new Error("Esta casilla ya esta ocupada")
        }
        this.pieza = pieza
    }
}

class Tablero{
    constructor(){
        this.casillas = []
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.casillas.push(new Casilla([i, j]))
                
            }
            
        }
    }
}