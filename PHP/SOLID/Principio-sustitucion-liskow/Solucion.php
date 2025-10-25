<?php

class Persona{
    function comer(){}
    function domir(){}
    
    function hablar(){}
    function caminar(){}
} 

interface PersonaHablador{
    function hablar();
}

interface PersonaCaminadora{
    function caminar();
}

class Programador extends Persona implements PersonaHablador, PersonaCaminadora{

}

class Bebe extends Persona{
    function hablar(){
        return new Exception("Un bebe no habla");
    }
}