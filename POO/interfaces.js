//ejemplo de uso de interfaces en POO
//Ejemplo simple - > No es una estructura que usarias en un proyecto
var Animal = /** @class */ (function () {
    function Animal(nombreParam, especieParam) {
        this.nombre = nombreParam;
        this.especie = especieParam;
    }
    Animal.prototype.comer = function () {
        return "estoy comiendo";
    };
    Animal.prototype.getAnimal = function () {
        return this;
    };
    return Animal;
}());
var cr7 = new Animal('c', 'chucho');
console.log(cr7.getAnimal());
