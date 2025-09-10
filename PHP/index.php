
<?php 
    
    //1. PHP es un lenguaje compilado (Interpretado por apache)
    //2. pHP es un lenguaje de tipado debil pero con tipado obligatorio
    //3. PHP no es case sensitive en sus palabras reservadas pero si en variables y funciones
    //4. Vamos a usar a utilizar una POO con todos los pilares

    

    // Delimitadores
    /* comentario
        multilinea*/

        // Salto de linea \n
        //Concatenacion es con punto .
    echo "Hola mundo!\n";
    print "Hola mundo con print" . "\n";

    //Variables 
    $nombre = "Jhon";

    //constantes
    define("PI", 3.1416);   


    //Template string
    $templateString = "Hola, mi nombre es:{$nombre}";
    echo $templateString . "\n";

    //Operadores matematicos
    $suma = 2 + 2;
    $resta  = 2 - 2;
    $multiplicacion = 2 * 2;
    $division = 2 / 2;
    $modulo = 10 % 3;
    $exponenciacion = 2 ** 3;

    //Operadores de comparacion
    $igual = (2 == '2'); //true
    $identico = (2 === '2'); //false
    $diferente = (2 != '2'); //false
    $diferenteIdentico = (2 !== '2'); //true
    $mayor = (2 > 1); //true
    $menor = (2 < 1); //false
    $mayorIgual = (2 >= 2); //true
    $menorIgual = (2 <= 1); //false

    //Operadores logicos
    $and = (true && false); //false
    $or = (true || false); //true   
    $not = !true; //false   
    $xor = (true xor false); //true

    //Funciones
    //Funcion expresada
    function saludar($nombre) {
        return "Hola, mi nombre es: {$nombre}";
    }
    echo saludar("Jhon") . "\n";
    //Funcion anonima
    $saludar = function($nombre) {
        return "Hola, mi nombre es: {$nombre}";
    };
    echo $saludar("Jhon") . "\n";

    //Funciones flecha (PHP 7.4+)
    $saludarFlecha = fn($nombre) => "Hola, mi nombre es: {$nombre}";
    echo $saludarFlecha("Jhon") . "\n";

    //Estruturas condicionales
    $edad = 18;
    if ($edad < 18) {
        echo "Eres menor de edad\n";
    } elseif ($edad == 18) {
        echo "Tienes 18 años\n";
    } else {
        echo "Eres mayor de edad\n";
    }

    //Switch
    $dia = 3;
    switch ($dia) {
        case 1:
            echo "Lunes\n";
            break;
        case 2:
            echo "Martes\n";
            break;
        case 3:
            echo "Miercoles\n";
            break;
        case 4:
            echo "Jueves\n";
            break;
        case 5:
            echo "Viernes\n";
            break;
        case 6:
            echo "Sabado\n";
            break;
        case 7:
            echo "Domingo\n";
            break;
        default:
            echo "Dia no valido\n";
            break;
    }

    //ternario
    $mayorDeEdad = ($edad >= 18) ? "Eres mayor de edad\n" : "Eres menor de edad\n";
    echo $mayorDeEdad;
    //Null coalescing operator (PHP 7+)
    $nombreUsuario = $_GET['nombre'] ?? 'Invitado';
    echo "Hola, {$nombreUsuario}\n";
    
?>