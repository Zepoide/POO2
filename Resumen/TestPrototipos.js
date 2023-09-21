// Existen 3 formas de crear un objeto en javascript

//Literales

// var josefina = {
//     nombre: "Maria Josefina",
//     apellido: "Garcia Pereira",
//     fechaNacimiento : new Date(2003,5,7),
//     nombreCompleto: function(){
//         return this.nombre + " " + this.apellido;
//     }
// }

// Object.freeze(josefina)

// delete josefina.apellido

// console.log(josefina)

// var john = (function(){
//     var obj = {}
//     var name = "John"
//     var age = 10
//     obj.greet = function(){
//         console.log(`${name} has ${age} years.`)
//     }
//     return obj
// }) ()

// john.greet()

//funcion que se invoca con el operador new que hace de plantilla para la creacion de objetos
// No se debe olvidar el operador new porque sino las propiedades van al objeto global
// no es la mejor opcion si usamos prototipos
//Constructores

// function Persona(nombre,apellido,fechaNacimiento){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.fechaNacimiento = fechaNacimiento;
//     this.nombreCompleto = function(){
//         return this.nombre + " " + this.apellido;
//     }
// }

// let tanito = new Persona("Justo","Martinez Tanoeira",new Date(2003,1,3));
// console.log(tanito.nombreCompleto());

// en prototipos podemos prescindir de las clases, la herencia es mas simple ya que el nuevo objeto
// puede heredar las propiedades de un objeto antiguo

// para realizar la clonacion los objetos necesitan un objeto inicial esto
// se puede realizar mediante la creacion de un objeto vacio o de forma literal
//Clonacion

// var oterito = Object.create(josefina);
// oterito.nombre = "Agustin Gabriel";
// oterito.apellido = "Otero";
// oterito.nombreCompleto();

// console.log(Object.keys(josefina))
// console.log(Object.getOwnPropertyNames(josefina))
// Object.keys(josefina).map(item => console.log(josefina[item]))

// Propiedad constructor
// un Objeto que fue construido por medio de un constructor, posee una propiedad .constructor
// que apunta a la funcion constructora

// Propiedad prototype
// 

// Mutacion de objetos
// los objetos en javascript son modificables en tiempo de ejecucion
// se los puede modificar agregando propiedades
// 1. con el operador punto
// 2. aplicandolo a la propiedad prototipo
// 3. Utilizando Object.defineProperty

// Object.defineProperty(objeto,propiedad,descriptor)

// El concepto de Delegacion en prototipos es la analogia a la herencia en un enfoque de clases
// a partir de la delegacion podemos modelar lo particular para luego ir generalizando, es decir,
// si veo que todos los objetos comparten caracteristicas o comportamientos puedo pasarlo a un 
// prototipo

// En los prototipos existe una forma dinamica de resolucion de problemas en la cual se recorren
// los objetos "hacia arriba" buscando algun prototipo que pueda resolver el problema.
// a esto se lo conoce como cadena de prototipos

// Cada objeto tiene una propiedad que apunta a su prototipo (no confundir con prototype de la 
// clase constructora). los objetos obtienen su prototipo por medio del objeto Object
// Object.getPrototypeOf(obj);

// cuando clonamos un objeto, no tenemos problemas por que el prototipo del objeto creado
// va a apuntar siempre a su prototipo.

// Relacionamos los prototipos de Persona y Empleado
// Empleado.prototype = Object.create(persona.prototype);

// Asignamos el constructor al prototipo
// Empleado.prototype.constructor = Empleado;

// Evitando Extensiones

// Object.preventExtensions(obj)
// previene que nuevas propiedades sean agregadas a un objeto

// Object.isExtensible(obj)
// Nos permite saber si el objeto es extensible

// Object.seal(obj)
// previene que nuevas propiedades puedan ser añadidas al objeto y marcando las existentes como no
// configurables

// Object.isSealed(obj)
// Nos permite saber si un objeto esta sellado (?)

// Object.freeze(obj)
// previene que nuevas propiedades puedan ser añadidas al objeto y marcando los existentes como no
// configurables

// Object.isFrozen(obj)
// Nos permite saber si un objeto esta congelado

// Igualdad e identidad

// Dos objetos son iguales cuando los valores de sus propiedades son iguales.
// Un objeto es identico solo a si mismo, por lo tanto si tenemos dos referencias (con distinto nombre)
// al mismo objeto, la comparacion de esas referencias nos deberia indicar que el objeto es el mismo.




