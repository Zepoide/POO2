const piezaCircUno = {
    esCirculo: true
}

function Casilla(posicion){
    this.pieza = null
    this.posicion = posicion

    this.agregarPiezaACasilla = function(pieza){
        if(this.pieza == null){
            this.pieza = pieza;
            // this.estaVacio = false
        }else{
            throw new Error("Casilla ocupada.");
        }
    }

    this.estaEnEstaPosicion = function(posicion){
        return this.posicion[0] == posicion [0] && this.posicion[1] == posicion [1]
    }


}

function Tablero(){
    this.casillas = []
    for(let i = 0; i<3;i++){
        for(let j = 0; j<3;j++){
            this.casillas.push(new Casilla([i,j]))
        }
    }
    this.agregar = function(pieza,posicion){
        //this.casillas[posicion].agregarPiezaACasilla(pieza)
        let casilla = this.casillas.find(casilla => casilla.estaEnEstaPosicion(posicion))
        casilla.agregarPiezaACasilla(pieza)
        //this.validacion()
    }
    
    this.validacion = function(){
        // Validar filas
        for(let i = 0; i < 3; i++){
            if(this.casillas[i * 3].pieza && this.casillas[i * 3 + 1].pieza && this.casillas[i * 3 + 2].pieza &&this.casillas[i * 3].pieza.esCirculo === this.casillas[i * 3 + 1].pieza.esCirculo && this.casillas[i * 3 + 1].pieza.esCirculo === this.casillas[i * 3 + 2].pieza.esCirculo){
                console.log(`Felicidades gano ${this.casillas[i * 3].pieza.esCirculo ? 'Circulo' : 'Cruz'}`);
            }
        }
    
        // Validar columnas
        for(let i = 0; i < 3; i++){
            if(this.casillas[i].pieza && this.casillas[i + 3].pieza && this.casillas[i + 6].pieza &&this.casillas[i].pieza.esCirculo === this.casillas[i + 3].pieza.esCirculo && this.casillas[i + 3].pieza.esCirculo === this.casillas[i + 6].pieza.esCirculo){
                console.log(`Felicidades gano ${this.casillas[i].pieza.esCirculo ? 'Circulo' : 'Cruz'}`);
            }
        }
    
        // Validar diagonales
        if(this.casillas[0].pieza && this.casillas[4].pieza && this.casillas[8].pieza &&this.casillas[0].pieza.esCirculo === this.casillas[4].pieza.esCirculo && this.casillas[4].pieza.esCirculo === this.casillas[8].pieza.esCirculo){
            console.log(`Felicidades gano ${this.casillas[0].pieza.esCirculo ? 'Circulo' : 'Cruz'}`);
        }
        
        if(this.casillas[2].pieza && this.casillas[4].pieza && this.casillas[6].pieza &&this.casillas[2].pieza.esCirculo === this.casillas[4].pieza.esCirculo && this.casillas[4].pieza.esCirculo === this.casillas[6].pieza.esCirculo){
            console.log(`Felicidades gano ${this.casillas[2].pieza.esCirculo ? 'Circulo' : 'Cruz'}`);
        }
    }

    this.imprimir = function(){
        let cont = 0;
        let res = "";
        this.casillas.forEach(casilla =>{
            const simbolo = casilla.pieza === null ? " . " : casilla.pieza.esCirculo ? " O " : " X ";
            res += simbolo;
            cont++;
            cont % 3 === 0 ? res += "\n ---------- \n" : res += "|";
        })
        console.log(res)
    }
    
}


const tablero = new Tablero()


const piezaCruzUno = Object.create(piezaCircUno)
piezaCruzUno.esCirculo = false
const piezaCruzDos = Object.create(piezaCircUno)
piezaCruzDos.esCirculo = false
const piezaCruzTres = Object.create(piezaCircUno)
piezaCruzTres.esCirculo = false

const piezaCircDos = Object.create(piezaCircUno)
const piezaCircTres = Object.create(piezaCircUno)

try{
    tablero.agregar(piezaCircUno,[0,0])
    tablero.agregar(piezaCircDos,[1,0])
    tablero.agregar(piezaCruzUno,[2,0])
    tablero.agregar(piezaCruzDos,[1,1])
    tablero.agregar(piezaCruzTres,[0,2])
    tablero.imprimir()
    tablero.validacion()
}catch(e){
    console.log(e.message)
}


//Casilla Object es el objeto literal que creamos
//{} es un objeto vacio que clonamos a partir del circulo uno

