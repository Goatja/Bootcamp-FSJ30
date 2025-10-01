<?php

echo "<h1>LLegaste a procesamiento de datos</h1>";

print_r($_GET);
print_r($_POST["nombre"]);

class Usuario{
    private $nombre;
    private $edad;
    private $email;

    public function __construct($nombreParam, $edadParam, $emailParam)
    {
        $this->nombre = $nombreParam;
        $this->edad = $edadParam;
        $this->email = $emailParam;
    }

    public function getUser(){
        return $this;
    }
}

$user = new Usuario($_POST["nombre"], $_POST["edad"], $_POST["email"]);

print_r($user->getUser());