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

