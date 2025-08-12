//Pilares POO typescript
//Paradigma => modelo de programar.
//POO es una forma de programar que se basa en modelos y objetos.
//POO -> es una forma de ver y pensa el codigo y las soluciones de implementacion de software.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    //Abstraccion
    Animal.prototype.aumentarEdad = function (value) {
        this.edad += value;
    };
    return Animal;
}());
var animalito = new Animal('Chucho', 18, 'Masculino', 'Cafe');
//Accedemos a un atributo del objeto instanciado de una clase
console.log(animalito.especie);
console.log(animalito.getEdad());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(especieParam, edadParam, generoParam, colorParam, razaParam, nombreParam) {
        var _this = _super.call(this, especieParam, edadParam, generoParam, colorParam) || this;
        _this.raza = razaParam;
        _this.nombre = nombreParam;
        return _this;
    }
    Perro.prototype.ladrar = function () {
        return "Woof";
    };
    //Polimorfismo
    Perro.prototype.aumentarEdad = function () {
        _super.prototype.aumentarEdad.call(this, this.getEdad() + 7);
    };
    return Perro;
}(Animal));
var perrito = new Perro("Cannis", 2, "Masculino", "Marron", "Pitbull", "Caimito");
console.log(perrito.especie);
console.log(perrito.ladrar());
