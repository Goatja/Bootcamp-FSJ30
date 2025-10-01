<?php 


//Busqueda lineal O(n)
function linearSearch($arr, $target): int{
    if(!is_array($arr)) return -1;

    for($i = 0; $i < count($arr); $i++){
        if($arr[$i] === $target){
            return $i;
        }
    }

    return -1;
}

//Ejemplo practico con estudiantes

$estudiantes = [
    "Julian","Pedro", "Lucas", "Tula", "Perla", "Luna", "Andrea"
];

$posicion = linearSearch($estudiantes, "Andrea");

if($posicion !== -1){
    echo "Estudiante encontrado en la posicion: {$posicion}";
}else{
    echo "Estudiante no se encontro en la lista";
}


//Buscar pupusas


function searchPupusa($pupusaList, $targetPupusa){
    if(!is_array($pupusaList)) return -1;

    foreach($pupusaList as $index => $pupusa){
        if($pupusa === $targetPupusa){
            return $index;
        }
    }

    return -1;
}

/* $pupusaList = [
    "frijol", "revuelta", "loroco", "ajo", "jalapenio"
]; */



/* $indexPupusa = binarySearchPupusa($pupusaList, "revuelta");

if($indexPupusa !== -1){
    echo "Pupusa encontrada {$indexPupusa}";
}else{
    echo "No se encontro la pupusa";
}
 */
//binaria
function binarySearchPupusa($pupusaList, $pupusaTarget) {
    $left = 0;
    $right = count($pupusaList) - 1;

    while ($left <= $right) {
        $mid = floor(($left + $right) / 2);

        if ($pupusaList[$mid] === $pupusaTarget) {
            return $mid;
        } elseif ($pupusaList[$mid] < $pupusaTarget) {
            $left = $mid + 1;
        } else {
            $right = $mid - 1;
        }
    }

    return -1;
}
$pupusaList = [
    "frijol", "revuelta", "loroco", "ajo", "jalapenio"
];

sort($pupusaList); // orden necesario para búsqueda binaria

$ppas = binarySearchPupusa($pupusaList, "ajo");

if($ppas !== -1){
    echo "Pupusa encontrada en la posición {$ppas} (" . $pupusaList[$ppas] . ")";
} else {
    echo "No se encontró la pupusa";
}
