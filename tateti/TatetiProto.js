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
        //this.validarColumnas()
        //this.validarFilas()
        //this.validarDiagonales()
        for(let i = 0;i<3;i++){
            console.log("hola")
            if(this.casillas[i][0].pieza.esCirculo == this.casillas[i][1].pieza.esCirculo && this.casillas[i][1].pieza.esCirculo == this.casillas[i][2].pieza.esCirculo){
                console.log("Enhorabuena");
            }
            if(this.casillas[0][i].pieza.esCirculo == this.casillas[1][i].pieza.esCirculo && this.casillas[1][i].pieza.esCirculo == this.casillas[2][i].pieza.esCirculo){
                console.log("Enhorabuena");
            }
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

// const casilla_1_1 = new casilla([1,1])

// console.log(casilla_1_1);
const piezaCruzUno = Object.create(piezaCircUno)
piezaCruzUno.esCirculo = false

// console.log(piezaCruzUno.esCirculo);
// console.log(piezaCruzDos.esCirculo);
// console.log(piezaCruzTres.esCirculo);
// console.log(piezaCruzCuatro.esCirculo);
// console.log(piezaCruzCinco.esCirculo);

// console.log(piezaCircUno.esCirculo);
// console.log(piezaCircDos.esCirculo);
// console.log(piezaCircTres.esCirculo);
// console.log(piezaCircCuatro.esCirculo);
// console.log(piezaCircCinco.esCirculo);

try{
    tablero.agregar(piezaCircUno,[0,0])
    tablero.agregar(piezaCircUno,[0,1])
    tablero.agregar(piezaCircUno,[0,2])
    tablero.agregar(piezaCruzUno,[1,1])
    tablero.imprimir()
    tablero.validacion()
    //console.log(tablero)
}catch(e){
    console.log(e.message)
}


//Casilla Object es el objeto literal que creamos
//{} es un objeto vacio que clonamos a partir del circulo uno

