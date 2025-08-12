//ejemplo de uso de interfaces en POO

//Ejemplo simple - > No es una estructura que usarias en un proyecto

class Animal{
    private nombre:string;
    private especie:string;

    constructor(nombreParam:string, especieParam:string){
        this.nombre = nombreParam;
        this.especie = especieParam;
    }

    comer():string{
        return "estoy comiendo";
    }

    getAnimal():Animal{
        return this;
    }
}

let cr7:Animal = new Animal('c', 'chucho');
console.log(cr7.getAnimal());


class Gato extends Animal implements IAnimal{
    raza:string;
    color: string;

   constructor(nombreParam:string, especieParam:string, razaParam:string, colorParam:string){
        super(nombreParam, especieParam);
        this.raza = razaParam;
        this.color = colorParam;
    }

    hacerRuido():string{
        return 'Miau!';
    }
}


//Implements le avisa a js Y TS que la clase Perro OBLIGATORIAMENTE
//tiene que tener lo que tiene IAnimal.
class Perro extends Animal implements IAnimal{
    //Tenemos 2 atributos publicos, no hay encapsulamiento
    raza:string;
    color: string;

    hacerRuido(): string {
        return "woof";
    }
}

interface IAnimal{
    //Los atributos tienen que quedar publicos
    raza:string;
    color:string;

    //Los metodos tienen que quedar publicos
    hacerRuido():string;
}

