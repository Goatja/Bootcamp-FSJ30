<?php ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practica de variables reservadas</title>
</head>
<body>
    <h1>Hola dummys</h1>
    
    <form action="procesamientoDatos.php" method="POST">
        <label for="">Nombre: </label>
        <input type="text" name="nombre" required>
        <label for="">Edad: </label>
        <input type="text" name="edad">
        <label for="">Email: </label>
        <input type="text" name="email" required>
        <button type="submit">Enviar</button>
    </form>
</body>
</html>