<?php 


//Array indexados
$array1 = [1,2,3,4,5,6];

$array2 = array(1,2,3,4,4);

$array3 = new ArrayObject();

//Array asociativos
$arrayAsociativo = [
    "nombre" => "Jhon",
    "edad" => 18,
    "ciudad" => "Lima"
];

print_r($arrayAsociativo["nombre"] . "\n");

//Array propiedades y metodos


//Saber el largo del array
print count($array1) . "\n"; //6

array_push($array1, 7); //Agrega un elemento al final del array
$array1[] = 8; //Agrega un elemento al final del array
print_r($array1); //1,2,3,4,5,6,7,8

//Agregar un elemento al inicio del array

array_unshift($array1, 12); //Agrega un elemento al inicio del array
print_r($array1); //12,1,2,3,4,5,

//Eliminar un elemento del final del array
array_pop($array1); //Elimina el ultimo elemento del array  
print_r($array1); //12,1,2,3,4,5,6,7
//Eliminar un elemento del inicio del array
array_shift($array1); //Elimina el primer elemento del array
print_r($array1); //1,2,3,4,5,6,7

//Recorrer un array
foreach ($array1 as $valor) {
    echo "El valor es: {$valor}\n";
};

//Array multidimensional
$arrayMultiDimencional = [
    "nombre" => "Juan",
    "edad" => 30,
    "Hoobies" => ["Futbol", "Musica", "Lectura", "otros" => ["Cine", "Videojuegos"]]
];

print_r($arrayMultiDimencional["Hoobies"]["otros"][0]);


//Clases y objetos
class Persona {

    //Atributos o propiedades
    private $nombre;
    private $edad;

    //Constructor
    public function __construct($nombreParam, $edadParam) {
        $this->nombre = $nombreParam;
        $this->edad = $edadParam;
    }

    //Metodos o funciones 
    


    /**
     * Get the value of edad
     */ 
    public function getEdad()
    {
        return $this->edad;
    }

    /**
     * Set the value of nombre
     *
     * @return  self
     */ 
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;

        return $this;
    }

    /**
     * Get the value of nombre
     */ 
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * Set the value of edad
     *@param int $edad
     * @return  self
     */ 
    public function setEdad($edad)
    {
        $this->edad = $edad;

        return $this;
    }
}

//Crear un objeto
$persona1 = new Persona("Juan", 23);

//Acceder a los metodos del objeto
echo $persona1->getNombre() . "\n"; //Juan
echo $persona1->getEdad() . "\n"; //23

//LIFO -> Last In First Out (Pila)
class Stack{
    private $data;

    //constructor con parametros opcionales
    public function __construct($dataParams = []){
        $this->data = $dataParams;
    }

    //Para agregar elementos
    public function add($elemento){
        array_push($this->data, $elemento);
    }

    //Eliminar un elemento
    public function remove(){
        return array_pop($this->data);
    }

}

$stackcito = new Stack([1,2,3,4,2]);

//FIFO -> First In First Out (Cola)

class Queue{

    private $data;

    //constructor con parametros opcionales
    public function __construct($dataParams = []){
        $this->data = $dataParams;
    }

    //Para agregar elementos
    public function add($elemento){
        array_push($this->data, $elemento);
    }

    //Eliminar un elemento
    public function remove(){
        return array_shift($this->data);
    }

}
//Stack -> Pila
//Queue -> Cola

class Node{
    private $value;
    private $next;
    public function __construct($valueParam) {
        $this->value = $valueParam;
        $this->next = null;
    }

    public function setNext($nextValue){
        $this->next = $nextValue;
    }

    public function getNext(){
        return $this->next;
    }
}


class LinkedList {
    private $head;
    public function __construct() {
        $this->head = null;
    }
    function add($value){
        //Creamos un nuevo nodo.
        $newNode = new Node($value);

        if($this->head === null){
            //creamos un nuevo node
            $this->head = $newNode;
        }else{
            
            $current = $this->head;
//Recorremos la lista mientras el siguiente no sea nulo
            while($current->getNext() !== null){
                $current = $current->getNext();
            }
//Cuando encontramos el final, agregamos el nuevo node.
            $current->setNext($newNode);
        }
    }
}

$lista = new LinkedList();

$lista->add(1);
$lista->add(5);
$lista->add(2);

print_r($lista);


