<?php
//Inicamos la sesion para poder utilizar la variable $sessioin
require_once("./Aerolinea.php");


print_r($_GET);
session_start();
 //print_r($_SESSION);
//Llamamos la clase aerolinea.
//Include ->Incluir el archivo y si no existe, mostrar un error y continuar la ejecucion del codigo
//Require ->Requirer el archivo y si no existe, mostrar un error y detener la ejecucion del codigo.

//Include_once -> Incluir el archivo una sola vez
//Require_once -> Requerir una sola vez, si se vuelve a llamar dentro de este archovo va usar

//$_SESSION -> Variable reservada para almacenar datos comos arr asociativo (Array_assoc)

//Persistencia de datos.
//Auxiliar para prechequear sesion.
if(!isset($_SESSION['aerolineas'])){
    $_SESSION['aerolineas'] = [];
}

$aerolineas = $_SESSION['aerolineas'];


if(isset($_POST['createForm'])){

    
    if (isset($_POST["nombre_aerolinea"], $_POST["cantidad"], $_POST["tipo_aerolinea"])) {
        $id = rand(1,1000);
        $nombre = $_POST["nombre_aerolinea"];
        $cantidad = $_POST["cantidad"];
        $tipo_aero = $_POST["tipo_aerolinea"];
        
        $aerolinea = new Aerolinea($id, $nombre, $cantidad, $tipo_aero);
        
        //print_r($aerolinea);
        array_push($aerolineas, $aerolinea);
        
        $_SESSION["aerolineas"] = $aerolineas;
        echo "<h1>Aerolineas hasta ahora.</h1><br>";
        //print_r($_SESSION['aerolineas']);
    }
}
//print_r($_POST);
//

function obtenerAerolineaPorId($aerolinea_array, $id){
    foreach($aerolinea_array as $aerolinea){
        if($aerolinea->getId() == $id){
            return $aerolinea;
        }
    }
}

if(isset($_POST['updateForm'])){
    //Logica para actualizar la aerolinea
    foreach($aerolineas as $aerolinea){
        if($aerolinea->getId() == $_GET['editar']){
            $aerolinea->setNombre($_POST['nombre_aerolinea']);
            $aerolinea->setCantidad($_POST['cantidad']);
            $aerolinea->setTipo($_POST['tipo_aerolinea']);
        }
    }
    
    header('Location: /PHP/POO/proycto_aerolinea/index.php');
}

if(isset($_GET['eliminar'])){
    foreach($aerolineas as $index => $aero){
        if($aero->getId === $_GET['eliminar']){
            unset($aerolineas[$index]);
            break;
        }
    }

    $_SESSION['aerolineas'] = $aerolineas;
    header('Location: /PHP/POO/proycto_aerolinea/index.php');
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css" rel="stylesheet" />

    <title>Practica CRUD aerolinea</title>
</head>

<body class="dark:text-white bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
    <h1 class="text-4xl font-extrabold dark:text-white">Hello airelines</h1>
    <!--Inicio del condicional que cambia los formularios  -->
    <?php
        if(isset($_GET['editar'])){
      
            $aerolineaEditable = obtenerAerolineaPorId($aerolineas, $_GET["editar"]);
            
            print_r($aerolineaEditable);
    ?>

     <!-- Formulario para editar -->
    <h3 class="max-w-sm mx-auto text-4xl font-extrabold dark:text-white"">Editar una nueva aerolinea</h3>
    <form  method="POST" class="max-w-sm mx-auto bg-white dark:bg-gray-900 p-2">
        <input type="hidden" name="updateForm" value="updateForm">
        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre Aerolinea</label>
        <input type="text" value='<?php echo $aerolineaEditable->getNombre() ?>' name="nombre_aerolinea" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <label for=""  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cantidad de Aviones</label>
        <input type="text" value='<?php echo $aerolineaEditable->getCantidad() ?>' name="cantidad" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <label for="tipo_aerolinea" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecciona tipo de aerolinea</label>
        <select id="t_aerolinea" name="tipo_aerolinea" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

            <option value="Privada" <?php echo ($aerolineaEditable->getTipo() === 'Privado') ? 'selected':'' ?>>Privada</option>
            <option value="Comercial" <?php echo ($aerolineaEditable->getTipo() === 'Comercial') ? 'selected':'' ?>>Comercial</option>
            <option value="Carga" <?php echo ($aerolineaEditable->getTipo() === 'Carga') ? 'selected':'' ?>>Carga</option>
            <option value="Nacional" <?php echo ($aerolineaEditable->getTipo() === 'Nacional') ? 'selected':'' ?>>Nacional</option>
        </select>
        <button type="submit" class=" mt-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Editar</button>
    </form>
    
    <?php 
        }else{
    ?>


        <!-- Formulario para crear -->
    <h3 class="max-w-sm mx-auto text-4xl font-extrabold dark:text-white">Crear una nueva aerolinea</h3>
    <form  method="POST" class="max-w-sm mx-auto bg-white dark:bg-gray-900 p-2">
        <input type="hidden" name="createForm" value="createForm">
        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre Aerolinea</label>
        <input type="text" name="nombre_aerolinea" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <label for=""  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cantidad de Aviones</label>
        <input type="text" name="cantidad" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <label for="tipo_aerolinea" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecciona tipo de aerolinea</label>
        <select id="t_aerolinea" name="tipo_aerolinea" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

            <option value="Privada">Privada</option>
            <option value="Comercial">Comercial</option>
            <option value="Carga">Carga</option>
            <option value="Nacional">Nacional</option>
        </select>
        <button type="submit" class=" mt-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Crear</button>
    </form>

    <?php } ?><!-- Fin de la condición para cambiar de crear a editar -->
    
    <main>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <th  scope="col" class="px-6 py-3">ID</th>
                <th  scope="col" class="px-6 py-3">Name</th>
                <th  scope="col" class="px-6 py-3">Cantidad</th>
                <th  scope="col" class="px-6 py-3">Tipo de aerolinea</th>
                <th  scope="col" class="px-6 py-3">Accion</th>
            </thead>
            <tbody >
                <?php 
                foreach($aerolineas as $aero){
                    echo " <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'> 
                        <td class='px-6 py-4'>{$aero->getId()}</td> 
                        <td class='px-6 py-4'>{$aero->getNombre()}</td> 
                        <td class='px-6 py-4'>{$aero->getCantidad()}</td> 
                        <td class='px-6 py-4'>{$aero->getTipo()}</td> 
                        <td class='px-6 py-4'>
                            <a href='?editar={$aero->getId()}'>Editar</a> 
                            <a href='?eliminar={$aero->getId()}'>Eliminar</a>
                          </td> 
                    </tr> ";
                }
                ?>
            </tbody>
        </table>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
   
</body>

</html>