<?php 

//Principio de sustitucion de Liskow
//Poder reemplzar la clase hija de la clase padre
//Sin que esto rompa el funcionamiento (No tiene que dar error)

class Persona{
    function comer(){}
    function domir(){}
    
    function hablar(){}
    function caminar(){}
} 

class Programador extends Persona{

}

class Bebe extends Persona{
    function hablar(){
        return new Exception("Un bebe no habla");
    }
}