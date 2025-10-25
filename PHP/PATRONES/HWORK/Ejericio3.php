<!-- Patron de diseño Decorator -->
<!-- Problema -->
 <!--  Crear un programa donde sea posible añadir diferentes armas a ciertos personajes de videojuegos. 
       Debes utilizar al menos dos personajes para este ejercicio
-->

<?php 

interface IGuerrero{
      function armar();
}

class Guerrero implements IGuerrero{
      private $arma;

      function __construct(){
            $this->arma; 
      }

      function armar(){
            return "Arma basica";
      }
}

//Clase abstracta que sera el padre de las demas hijas que se extienden de ella
abstract class GuerreroDocorator implements IGuerrero{
      private $guerrero;

      function __construct(Guerrero $guerrero){
            $this->guerrero = $guerrero;
      }

      function armar(){
            $this->guerrero->armar();
      }
}

class ArmaGnu extends GuerreroDocorator{

      function armar(){

            return 'Arma Gnu';
      }
}
class ArmaPtx extends GuerreroDocorator{

      function armar(){

            return 'Arma Ptx';
      }
}
class ArmaJungle extends GuerreroDocorator{

      function armar(){

            return 'Arma Jungle plop!';
      }
}

$guerrero1 = new Guerrero();
$guerrero2 = new Guerrero();

$guerrero1 = new ArmaGnu($guerrero1);
$guerrero2 = new ArmaJungle($guerrero2);

print 'Guerrero 1 con'. $guerrero1->armar();
print '   ';
print 'Guerrero 2 con'. $guerrero2->armar();

