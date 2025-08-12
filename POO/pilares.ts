//Pilares POO typescript
//Paradigma => modelo de programar.
//POO es una forma de programar que se basa en modelos y objetos.
//POO -> es una forma de ver y pensa el codigo y las soluciones de implementacion de software.


/* 
Vamos a imaginar los moldes para poder estandarizar las consas -> clases
Utilizar los moldes para crear funcionalidad en nuestra app -> objetos

*/

/* PILARES DE POO
- Herencia -> Obtener el comportamiento del padre en una clase hija
- Polimorfismo
- Encapsulamiento -> Limitar el acceso a la informacion.
= Modificadores de acceso: public, protected, private, default 
- Abstraccion -> Nos da herramientas(metodos) para acceder a informacion limitada

*/

class Animal{
    //Atributos o propiedades -> Caracteristicas de esta clase
    public especie: string;
    private edad: number;
    genero: string;
    color: string;

    //Constructor -> metodo que se ejecuta al instanciar un objeto de una clase => new
    constructor(especieParam:string, edadParam:number, generoParam:string, colorParam:string){
        this.especie = especieParam;
        this.edad = edadParam;
        this.genero = generoParam;
        this.color = colorParam;
    }

    //Metodos => Funciones que va a pertenecer a una clase => Comportamiento
    comer(): string{//Debe de ser un verbo
        return 'Estoy comiendo';
    }

    //Getters y Setters
    getEdad():number {
        return this.edad;    
    }

    setEdad(edadParam:number){
        this.edad = edadParam;
    }

    //Abstraccion
    aumentarEdad(value:number){
        this.edad += value;
    }
    
}

const animalito = new Animal('Chucho', 18, 'Masculino', 'Cafe');
//Accedemos a un atributo del objeto instanciado de una clase
console.log(animalito.especie);
console.log(animalito.getEdad());


class Perro extends Animal{
    private raza:string;
    private nombre:string;

    constructor(especieParam:string, edadParam:number, generoParam:string, colorParam:string, razaParam:string, nombreParam:string){
        super(especieParam, edadParam, generoParam,colorParam);
        this.raza = razaParam;
        this.nombre = nombreParam;
    }

    ladrar():string{
        return "Woof";
    }

    //Polimorfismo
    aumentarEdad(): void {
        super.aumentarEdad(this.getEdad() + 7);
    }
}

const perrito = new Perro("Cannis", 2, "Masculino", "Marron", "Pitbull", "Caimito");


console.log(perrito.especie);
console.log(perrito.ladrar());

//Tipos personalizados

type User = {
    name:string,
    email:string,
    password:string,
    rol:string
}

let usuarito:User = {
    name:"Maria",
    email:"maria@email.com",
    password:'12345678',
    rol:"admin"
}

interface IUser {
    name:string,
    email:string,
    password:string,
    rol:string

    login():string;
}

let usuarito2:IUser = {
    name:"Maria",
    email:"maria@email.com",
    password:'12345678',
    rol:"admin",
    login(){
        return "Some";
    }
}

/* Ejemplo de uso de interfaces es POO */

