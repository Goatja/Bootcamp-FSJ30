<?php 

interface Personaje{
    public function atacar();
    public function velocidad();
    
}

class Esqueleto implements Personaje{
    public function atacar(){
        echo 'Ateque esqueletico';
    }
    public function velocidad(){
        echo 'Carrera esqueletica';
    }
}
class Zombie implements Personaje{
    public function atacar(){
        echo 'Ataca zombiniano';
    }
    public function velocidad(){
        echo 'Velocidad zombiniana';
    }
}

class PersonajeFactory{
    public static function crearPersonaje($nivel): Personaje{
        return match($nivel){
            'facil' => new Esqueleto(),
            'dificil' => new Zombie(),
            default => new Exception(),
        };
    }
}


PersonajeFactory::crearPersonaje('facil')->velocidad();//Carrera esqueletica
PersonajeFactory::crearPersonaje('dificil')->velocidad();//Velocidad zombiniana
//PersonajeFactory::crearPersonaje('avanzado')->velocidad();





