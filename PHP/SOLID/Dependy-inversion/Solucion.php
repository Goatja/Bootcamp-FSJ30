<?php 

interface IAdaptador{
    function conectarBD();
}
class BDConexion{
    private $adaptador;
   

    function __construct($bd){
        $this->adaptador = $bd;

    }
    function conectar(){
        $this->adaptador->conectarBD();
       
    }

}

class MySQLDB implements IAdaptador{
    //Credenciales

    function conectarBD(){
        //Logica para conectar la BD

        echo "Me estoy conectando a MySQL";
    }
}

class MongoDB implements IAdaptador{
    
    function conectarBD(){
        //Logica para conectar la BD
        echo "Me estoy conectando a MongoDb";
    }
}

class FireStore implements IAdaptador{
    
    function conectarBD(){
        //Logica para conectar la BD
        echo "Me estoy conectando a Fire Stores";
    }
}

$mysql = new MySQLDB();
$mongodb = new MongoDB();
$firedb = new FireStore();

$bdMysqlConection = new BDConexion($mysql);
$bdMongodbConection = new BDConexion($mongodb);
$bdFiredbConection = new BDConexion($firedb);

$bdMysqlConection->conectar();
$bdMongodbConection->conectar();
$bdFiredbConection->conectar();