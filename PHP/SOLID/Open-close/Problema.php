<?php 
/* 
    Principio de abierto/cerrado -> las partes de nuestra app tienen que
    estar abiertas para entension y cerradas
    para modificacion
*/

class ConductorAutomovil{
    function acelerar(Auto $auto){
        $auto->aumentarVelocidad();
    }
}


//Clase intermedia generica -> Contiene el metodo principal del funcionamiento
class Auto{
    
    function aumentarVelocidad(){
        echo "Estoy acelerando mm";
    }
}

class RollRoyce extends Auto{
    function aumentarVelocidad(){
        echo 'Acelerando';
    }
}

class Mercedez extends Auto{
    function aumentarVelocidad(): void{
        echo 'Aumentar velocida';
    }
}

$schuma = new ConductorAutomovil();
$vehiculoHumilde = new RollRoyce();
$otroVehiculoHumilde = new Mercedez(); 

$schuma->acelerar($vehiculoHumilde);
$otroVehiculoHumilde->aumentarVelocidad();

