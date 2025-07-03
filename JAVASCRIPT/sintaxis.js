//Comentarios => deshabilitar lineas

/*
Multilenas
*/

//Impresiones en consola
console.log("Hola mundo");
//console.error()

//Variables/constantes
let nombre = "Juan";
var varaible ='VR';
const PI = 3.1416;

//Concatenacion +> Suma de algo a un string

console.log(nombre + " " + varaible + " " + PI);

//Cambiar los valores
//Parse
//Ante el proble de que js tiene problemas con el tipeo
let cinco = parseInt("5");
console.log(cinco + 5);

//Operadores matematicos
// + - * / % **
let suma= 5+5;
let resta = 10 - 5;
let division = 4/2;
let multiplicacion = 5*5;
let modulo = 10 % 3;
//Potencia
let potencia = 2 ** 3;

//Operadores logicos
// && || !
let verdadero = true;
let falso = false;
//AND
let and = verdadero && falso;
//OR
let or = verdadero || falso;
//NOT
let not = !verdadero;
//Comparaciones
// == === != !== > 
//
let comparacion = 5 == 5;
// Igualdad estricta
let comparacionEstricta = 5 === 5;
//Diferencia estricta
let diferenciaEstricta = 5 !== 5;
//Mayor que
let mayorQue = 5 > 5;
//Menor que
let menorQue = 5 < 5;
//Mayor o igual que
let mayorOIGualQue = 5 >= 5;
//Menor o igual que
let menorOIGualQue = 5 <= 5;


//Operadores de comparacion matematica
// >
// <
// >=
// <=
// ==
// ===
// !=
// !==

//Estructuras de control
// if
// else
// if else if
// switch
// while
// for
// do while
// if
if (true) {
    console.log("Si es verdadero");
    } else 
    {
        console.log("Si no es verdadero");
    }
        // else if
//Operador ternario
// ? :
let edad = 18;
let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);

//Estructuras repetitivas
// while 
// for
// do while
while (condition) {

    //contador++; incremento en uno
    
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

do {
    
} while (condition);


do {
    
} while (condition);


//Funciones que son
//Bloques de código
function name(params) {
    console.log("Heloo!");
}
//Funciones que retornan valores
function name(params) {
    return "Hola!";
    }
 
 //Funciones anonimas
 //Funciones que se pueden llamar
 const funcioncita = function(params){console.log("Soy una funcion anonima")}
 funcioncita(h);

 // Fat Arrow functions funciones de flecha
 //Funciones de flecha
 const funcion_flecha = (params) => console.log("Soy una funcion de flecha");
funcion_flecha();


