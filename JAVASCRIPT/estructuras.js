/*Estructuras de datos con javascript*/

//Datos primitivos => son aquellos que solo se puede asignar un dato.
//como string, integer, float, double, bool, null.

/*================ Datos primitivos ================*/
let vacio;//undefined es vacio para el sistema, la pc no encuentra nada.
//let vacio = null; evita que se rompa el programa.

/*======= Estructuras de datos ===========*/

//Podemos no solo almacenar un solo dato en una variable sino que varios datos.

//---Objetos
//Js trabaja con objetos.

//Objetos literales ==> 

//El siguiente caso es el ejemplo de un obj literal en js
//En esta variable se guarda un objeto literal.    
 let perro = {
    //clave : valor
    nombre : "Chowchow",
    edad : 4
 }   
//Mostrar caracteristicas del perro.
console.log(perro.nombre);

/*======================================================*/
//POO ==> Programacion orientada a objetos.
//Esto es solo una forma de escribir codigo ==> Reutilizable.

// Clases        / Objetos
//Clase => molde : Objeto => Instancia de una clase.

/*



*/

class Persona{
    //Caracterisicas de la clase -=>Propiedades.
    //Constructor -=> Metodo para crear objetos.
    constructor(nombreParam, edadParam){
        //this => APUNTAMOS A ESTA CLASE
        this.nombre = nombreParam;//this solo se puede usar dentro de la clase
        this.edad = edadParam;
    }

    //Metodos -=> Funciones son las cosas que hacen estas clases.
    correr(){
        console.log("Estoy corriendo");//esta es la forma en js
    }
}

//Utilizar el constructor de Persona => INSTANCIA OBJETOS.
let personita = new Persona("Michael", 26);
console.log(personita);

//Accder a algo de un objeto.
personita.correr();


//Los pilares de la POO
//Existen para asegurarnos un codigo mas escalable, flexible y seguro.
//4 Pilares
//
//Pilares de si se pueden usar en js
//Herencia => una clase hija de otra, copia el comportamiento de padre.
//Polimorfismo => cambiar el comportamiento de un metodo del padre con respecto a su hijo.

//Herencia
class Programador extends Persona { 
    //Caracteristicas propias de un programador
    constructor(nombreParam, edadParam, lenguajesParam){
        //seguir usando las propiedades del padre.
        super(nombreParam, edadParam);//Super recibe los parametros de del padre de esta clase.
        this.lenguajesProgra = lenguajesParam;
    }

    //Metodo propio de programador
    codear(){
        console.log("Estoy codeando");
        
    }

    //Polimorfismo => lo que diferencia en accion al padre
    //Sobre escritura del metodo
    correr(){
        //super.correr();
        console.log("Pero, no corro tan rapido, pero puedo trotar!");
        
    }
}

//Crear un programador
let programador = new Programador("Ger", 34, "Javascript");
console.log(programador);
programador.correr();//En este caso aunque sea la misma funcion de padre esto cambia


//Pilares que no se pueden utilizar con javascript.
//Encapsulamiento => limitar el acceso a la informacion de una clase
//Abstraccion => no da herramientas  o metodos para acceder a informacion encapsualda.


/*============== ARRAYS =================*/
//Los arrays son aquellos que guardan datos de forma ordenada.
//Pueden haber arrays indexados
let arraicitoidx = [18,19,25,33]; //Podemos guardar cualquier tipo de datos
//lo recomendable se pide que solo se use con un solo tipo de dato.
console.log(arraicitoidx);

//array asociativo.
//Guardamos en clave valor
let arrayAsociativo = {
    nombre:"Lucas"
};

console.log(arrayAsociativo);

//Array multidimencional
let arraycitoMulti = [
    [1,2],
    [{nombre:"Lucas"}]
];

console.log(arraycitoMulti[1][0].nombre);//nos devuelve el valor de la fila 1 columna 0

//acceder al indice 0
let cajadeIndiceCero = arraycitoMulti[0];
console.log(cajadeIndiceCero[1]);//inidice 0 posicion 1

//accedemos al indice 1
let cajaIndiceUno = arraycitoMulti[1];
console.log(cajaIndiceUno[0]);//posicion 0 con un objeto
console.log(cajaIndiceUno[0].nombre);//con este se llama al valor del objeto

//Metodos para arrays
//Recorrer arrays

let nombres = ["David", "Luz", "Alejandro", "Kevin"];
let nombresALReves = nombres.reverse().join(" ").split();
console.log(nombresALReves)
//forEach
 nombres.forEach((nombre, index, nombresALReves) => {
    index++;
    console.log(nombre +" " + index, nombresALReves.join(" "))
 })

 /*for(nombre of nombres){

 }*/

 //Metodos utiles
 //map recorre el array y nos retorna al por cada posicion -> Transformar valores.
 let nombresMayuscula = nombres.map(nombre =>  nombre.toUpperCase());

 console.log(nombresMayuscula)
 


let numeritos = [1,2,4,3,6,7];

let numeritosPorDos = numeritos.map((value) => {
    return value * 2;
}).join("").split("")

console.log(numeritosPorDos)

let enteros = numeritosPorDos.map(value => parseInt(value))

console.log(enteros);


////filter => filtrar valores de un array
//En este caso vamos a filtrar los numeros pares de un array
//El filter devuelve un nuevo array con los valores que cumplan la condicion.

let numerosPares = numeritos.filter((numero) => {
    return numero % 2 === 0;
})

//Filtrar la info y los retornamos en base de una condicion
const usuarios = [
    { nombre: "David", edad: 18 },
    { nombre: "Luz", edad: 25 },
    { nombre: "Alejandro", edad: 30 },
    { nombre: "Kevin", edad: 22 }
];

const mayoresDe21 = usuarios.filter( value =>  value.edad > 21 && value.edad < 30);
console.log(mayoresDe21);

//find => encontrar un valor en un array
////El find devuelve el primer valor que cumpla la condicion  

const usuarioDavid = usuarios.find(usuario => usuario.nombre === "David");
console.log(usuarioDavid);

/*=================== METODOS OBLIGATORIOS PARA ARRAYS    ===========================*/
//push => Agregar un valor al final del array
nombres.push("Michael");
//pop => Eliminar el ultimo valor del array
nombres.pop();
//shift => Eliminar el primer valor del array
nombres.shift();
//unshift => Agregar un valor al inicio del array
nombres.unshift("Nuevo Nombre");

nombres.length; //Obtener la cantidad de valores del array

//Metodo para elimiar los espacios en blanco de un array
nombres = nombres.filter(nombre => nombre.trim() !== ""); //Eliminar los espacios en blanco


//splice => Eliminar un valor en una posicion especifica del array
nombres.splice(1, 1); //Elimina el valor en la posicion 1
//slice => Retorna un nuevo array con los valores de una posicion a otra
nombres.slice(0, 2); //Retorna un nuevo array con los valores desde la posicion 0 hasta la 2 (sin incluirla)
//concat => Unir dos arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let arrayConcatenado = array1.concat(array2); //Unir los dos arrays
//join => Unir los valores de un array en un string 
let arrayJoin = nombres.join(", "); //Unir los valores del array en un string separado por comas
//split => Dividir un string en un array
let string = "Hola, mundo";
let arraySplit = string.split(", "); //Dividir el string en un array por las comas
//reverse => Invertir el orden de los valores del array
let arrayReverso = nombres.reverse(); //Invertir el orden de los valores del array
//sort => Ordenar los valores del array
let arrayOrdenado = nombres.sort(); //Ordenar los valores del array en orden alfabetico
//includes => Verificar si un valor esta en el array
let estaEnArray = nombres.includes("Michael"); //Verificar si el valor "Michael" esta en el array
//indexOf => Obtener el indice de un valor en el array
let indiceDeMichael = nombres.indexOf("Michael"); //Obtener el indice del valor "Michael" en el array
//lastIndexOf => Obtener el ultimo indice de un valor en el array
let ultimoIndiceDeMichael = nombres.lastIndexOf("Michael"); //Obtener el ultimo indice
//de "Michael" en el array
//every => Verificar si todos los valores del array cumplen una condicion
let todosMayoresDe18 = usuarios.every(usuario => usuario.edad > 18); //
//Verificar si todos los usuarios tienen una edad mayor a 18
//some => Verificar si al menos un valor del array cumple una condicion
let alMenosUnoMayorDe18 = usuarios.some(usuario => usuario.edad > 18); //Verificar si al menos un usuario tiene una edad mayor a 18
//reduce => Reducir el array a un solo valor
let sumaEdades = usuarios.reduce((acumulador, usuario) => {
    return acumulador + usuario.edad;
}, 0); //Reducir el array a la suma de las edades de los usuarios   
console.log(sumaEdades); //Mostrar la suma de las edades de los usuarios
//flat => Aplana un array multidimensional a un array unidimensional
let arrayMultidimensional = [[1, 2], [3, 4]];
let arrayAplanado = arrayMultidimensional.flat(); //Aplana el array multidimensional a un array unidimensional
console.log(arrayAplanado); //Mostrar el array aplanado
//flatMap => Aplana un array multidimensional y aplica una funcion a cada valor
let arrayConMap = arrayMultidimensional.flatMap(value => value.map(valor => valor *
2)); //Aplana el array multidimensional y multiplica cada valor por 2
console.log(arrayConMap); //Mostrar el array aplanado y con los valores multiplicados
//findIndex => Obtener el indice del primer valor que cumpla una condicion
let indiceDeUsuario = usuarios.findIndex(usuario => usuario.nombre === "David"); //Obtener
//el indice del primer usuario que tenga el nombre "David"
console.log(indiceDeUsuario); //Mostrar el indice del usuario "David"
//fill => Rellenar un array con un valor
let arrayRellenado = new Array(5).fill("Relleno"); //Crear  
//un array de 5 posiciones y rellenarlo con el valor "Relleno"
console.log(arrayRellenado); //Mostrar el array rellenado
//Array.from => Crear un array a partir de un objeto iterable
let iterable = "Hola";
let arrayDesdeIterable = Array.from(iterable); //Crear un array a partir del objeto iterable
console.log(arrayDesdeIterable); //Mostrar el array creado a partir del objeto iterable
//Array.isArray => Verificar si un valor es un array
let esArray = Array.isArray(nombres); //Verificar si el valor "nombres" es un array
console.log(esArray); //Mostrar si el valor "nombres" es un array   
//Array.of => Crear un array a partir de una lista de valores
let arrayDesdeValores = Array.of(1, 2, 3, 4, 5); //Crear un array a partir de una lista de valores
console.log(arrayDesdeValores); //Mostrar el array creado a partir de la lista de valores
//Array.prototype => Prototipo de los arrays
//El prototipo de los arrays contiene todos los metodos y propiedades que se pueden utilizar con los arrays
//Se puede acceder al prototipo de los arrays a traves de Array.prototype
console.log(Array.prototype); //Mostrar el prototipo de los arrays
//Array.prototype es un objeto que contiene todos los metodos y propiedades que se pueden utilizar con los arrays
//Se pueden agregar nuevos metodos al prototipo de los arrays
Array.prototype.nuevoMetodo = function() {
    console.log("Este es un nuevo metodo del prototipo de los arrays");
}