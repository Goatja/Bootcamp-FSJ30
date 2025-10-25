<?php 

//Pricipio de Inversion de Depencias
//Los modulos de alto nivel no deben depender de los modulos de bajo nivel.
//Ambos debe de depender de abstraciones.
//Las abstraccciones no deben de depender de los detalles
//Los detalles deben de depender de las abstracciones

class BDConexion{
    private $adaptador;
    private $adaptador2;

    function __construct(){
        $this->adaptador = new MySQLDB();
        $this->adaptador2 = new MongoDB();
    }
    function conectar(){
        $this->adaptador->conectarDB();
        $this->adaptador2->conectarDB();
    }

}

class MySQLDB{
    //Credenciales

    function conectarDB(){
        //Logica para conectar la BD
    }
}

class MongoDB{
    
    function conectarDB(){
        //Logica para conectar la BD
    }
}

$baseMySQL = new MySQLDB();

