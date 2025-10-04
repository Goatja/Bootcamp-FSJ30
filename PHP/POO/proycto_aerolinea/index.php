<?php
//Inicamos la sesion para poder utilizar la variable $sessioin
require_once("./Aerolinea.php");
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
}else{
    echo '

        <div class="relative items-center block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white opacity-20">Noteworthy technology acquisitions 2021</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400 opacity-20">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <div role="status" class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    ';
}
//print_r($_POST);
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

    <h3 class="max-w-sm mx-auto text-4xl font-extrabold dark:text-white"">Crear una nueva aerolinea</h3>
    <form  method="POST" class="max-w-sm mx-auto bg-white dark:bg-gray-900 p-2">
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
                        <td class='px-6 py-4'> <button> Editar </button> </td> 
                    </tr> ";
                }
                ?>
            </tbody>
        </table>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
   
</body>

</html>