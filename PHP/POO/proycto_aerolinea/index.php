<?php

//Llamamos la clase aerolinea.
//Include ->Incluir el archivo y si no existe, mostrar un error y continuar la ejecucion del codigo
//Require ->Requirer el archivo y si no existe, mostrar un error y detener la ejecucion del codigo.

//Include_once -> Incluir el archivo una sola vez
//Require_once -> Requerir una sola vez, si se vuelve a llamar dentro de este archovo va usar
require_once("./Aerolinea.php");
//Persistencia de datos.
$aerolineas = [];
if(isset($_POST["nombre_aerolinea"], $_POST["cantidad"], $_POST["tipo_aerolinea"])){
    $nombre = $_POST["nombre_aerolinea"];
    $cantidad = $_POST["cantidad"];
    $tipo_aero = $_POST["tipo_aerolinea"];

    $aerolinea = new Aerolinea($nombre, $cantidad, $tipo_aero);

    print_r($aerolinea);
    array_push( $aerolineas, $aerolinea);
    echo "<h1>Aerolineas hasta ahora.</h1><br>";
    print_r($aerolineas);    
}
//print_r($_POST);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practica CRUD aerolinea</title>
</head>
<body style="background-color:gray">
    <h1>Hello airelines</h1>

    <h3>Crear una nueva aerolinea</h3>
    <form method="POST">
        <label for="">Nombre Aerolinea</label>
        <input type="text" name="nombre_aerolinea" required>
        <label for="">Cantidad de Aviones</label>
        <input type="text" name="cantidad" required>
        <label for="tipo_aerolinea">Tipo de Aerolinea</label>
        <select name="tipo_aerolinea">
            <option value="Privado">Privado</option>
            <option value="Comercial">Comercial</option>
            <option value="Carga">Carga</option>
            <option value="Nacional">Nacional</option>
        </select>
        <button type="submit">Crear</button>
    </form>
    
</body>
</html>