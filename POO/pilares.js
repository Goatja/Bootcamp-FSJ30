//Pilares POO typescript
//Paradigma => modelo de programar.
//POO es una forma de programar que se basa en modelos y objetos.
//POO -> es una forma de ver y pensa el codigo y las soluciones de implementacion de software.
/*
Vamos a imaginar los moldes para poder estandarizar las consas -> clases
Utilizar los moldes para crear funcionalidad en nuestra app -> objetos

*/
/* PILARES DE POO
- Herencia
- Polimorfismo
- Encapsulamiento -> Limitar el acceso a la informacion.
= Modificadores de acceso: public, protected, private, default
- Abstraccion -> Nos da herramientas(metodos) para acceder a informacion limitada

*/
var Animal = /** @class */ (function () {
    //Constructor -> metodo que se ejecuta al instanciar un objeto de una clase => new
    function Animal(especieParam, edadParam, generoParam, colorParam) {
        this.especie = especieParam;
        this.edad = edadParam;
        this.genero = generoParam;
        this.color = colorParam;
    }
    //Metodos => Funciones que va a pertenecer a una clase => Comportamiento
    Animal.prototype.comer = function () {
        return 'Estoy comiendo';
    };
    //Getters y Setters
    Animal.prototype.getEdad = function () {
        return this.edad;
    };
    Animal.prototype.setEdad = function (edadParam) {
        this.edad = edadParam;
    };
    return Animal;
}());
var animalito = new Animal('Chucho', 18, 'Masculino', 'Cafe');
//Accedemos a un atributo del objeto instanciado de una clase
console.log(animalito.especie);
console.log(animalito.getEdad());
