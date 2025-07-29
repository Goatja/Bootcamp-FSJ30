//Diferencias entre JS y TS
/* JS
-Flexible
-Facil de aprender
-Forma de programar  a traves de funciones
-WEB -> Navegador {Interpretado}
*/
/*TS
-Tipado duro +> No es tan flexible
-POO +> Forma de programar => Los pilares estan completos
-Un poco mas dificil de aprender
-El navegador no entiende TS---Compilado--->Se debe de traducir el codigo de TS a JS
*/
//Declaracion de variables
var numerito = 1; //JS
var numero = 1; //TS
var nombre = "Juan";
var activo = true;
var vacio = null;
//TIPOS DE DATOS QUE VAMOS A ROGAR, REZAR, INTENTAR, JUGAR Y PROMETER NO USAR
var nose = "PUEDO SER CUALQUIER COSA";
var noDefinido = undefined;
console.log(numero);
console.log(numerito);
//Declaracion de funciones
function saludar(nombreParam) {
    return "Hello, ".concat(nombreParam);
}
console.log(saludar(nombre));
//Estructuras de datos
//Array
var arraycito = [1, 2, 3];
//arraycito.push('add') no se puede en ts
//Tupla 
var arrayEspecifico = [27, 'Maria'];
//Podemos llegar a tener 2 tipos de datos
//Variable :1Tipo | 2tipo
var dosTiposDeDatos = null;
dosTiposDeDatos = "";
var programador = { name: 'Jorge', age: 25 };
