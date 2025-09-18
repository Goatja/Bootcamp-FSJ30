<?php

//Workspace php

//1. Problema de lista invertida:
//Escriba un programa que tome un array de numermosy devuelva una nueva lista
//que contenga los mismos elementos en orden inverso
//SIN UTILIZAR EL METODO ARRAY_REVERSE.
function listaIvertida($array){
    
    $arraycitoNuevo = [];

    for($i = count($array) - 1; $i >= 0 ; $i-- ){
        $arraycitoNuevo[] = $array[$i];
    } 

    return $arraycitoNuevo;
}


//2.
//Suma de numeros pares.

function sumarPares($array){
    $total = 0;

    foreach($array as $numero){
        //si
        if($numero % 2 === 0){
            $total += $numero;
        }
    }

    return $total;
}

//3.
//Problema  de frecuencia de caracteres

function contarFrecuenciaCaracteres($stringParam){

    $frecuenciaCaracter = [];

    $caracteres = str_split($stringParam);

    foreach($caracteres as $caracter){
        //isset() -> determina un valor existe, si eso pasa nos da true

        if(isset($frecuenciaCaracter[$caracter])){
            $frecuenciaCaracter[$caracter]++;
        }else{
            $frecuenciaCaracter[$caracter] = 1;
        }
    }

    return $frecuenciaCaracter;

}

print_r(contarFrecuenciaCaracteres('heloo mishtuu!'));

//4.
/* 
    Problema del bucle anidado:
    Escribe un programa que utilice bucles anidados
    para imprimir un patron de asteriscos en forma de pimarimide.

*/

function imprimirPiramide(){
    
    $filas = 5;
//Primer bucle es para la altura
    //Por eso empezamos  en 1 y se repite la cantidad de altura que queremos que tenga
    for($i = 1; $i <= $filas ; $i++){
        //2do bucle controla los espacios en blancos antes de dibujar los asteriscos
        for($espacios = 1; $espacios <= $filas - $i; $espacios++){
            echo' ';
        }

        //3er bucle controla los asteriscos por fila
        //formula para saber cuantos asterisoos necesitamos es  (2 * $i - 1)
        for($asteriscos = 1; $asteriscos <= (2 * $i - 1); $asteriscos++){
            echo'*';
        }

        echo "\n";
    }
}

imprimirPiramide();