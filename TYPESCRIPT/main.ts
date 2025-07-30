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
let numerito = 1; //JS

let numero:number = 1;//TS
let nombre:string = "Juan";
let activo:boolean = true;
let vacio:null = null;

//TIPOS DE DATOS QUE VAMOS A ROGAR, REZAR, INTENTAR, JUGAR Y PROMETER NO USAR
let nose:any = "PUEDO SER CUALQUIER COSA";
let noDefinido:undefined = undefined;


console.log(numero);
console.log(numerito);

//Declaracion de funciones
function saludar(nombreParam:string): string{
    return `Hello, ${nombreParam}`;
}

console.log(saludar(nombre));

//Estructuras de datos
//Array
let arraycito:number[] = [1,2,3];
//arraycito.push('add') no se puede en ts

//Tupla 
let arrayEspecifico : [number, string] = [27, 'Maria'];

//Podemos llegar a tener 2 tipos de datos

//Variable :1Tipo | 2tipo
let dosTiposDeDatos: null|string = null;
dosTiposDeDatos = "";

//Tipo de dato personalizado
type Persona = {
    name:string,
    age:number
}

let programador: Persona = {name:'Jorge', age:25};


