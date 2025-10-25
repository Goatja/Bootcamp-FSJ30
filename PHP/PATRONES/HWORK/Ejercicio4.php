
<?php 
/* <!-- 
        Tenemos un sistema donde mostramos mensajes en distintos tipos de salida, como por consola, formato JSON y archivo TXT.
        Debes crear un programa donde se muestren todos estos tipos de salidas. 
--> */
//
interface Salida{
    function mensaje();
}

class SalidaConsola implements Salida{

    
    public function mensaje(){
        return "-------Console msg------------";
    }
}

class SalidaJson implements Salida{

    public function mensaje(){
        return "JsonMsg[{Saludo:'Hello', mimi:'Sansan'}]";
    }
}

class SalidaTXT implements Salida{

    public function mensaje(){
        return "This is a txt msg";
    }
}


 function setOutPut(Salida $salida): Salida | string{
     if ($salida instanceof SalidaConsola ||
        $salida instanceof SalidaJson ||
        $salida instanceof SalidaTXT) {
        return $salida;
    }

    return "Opps! Not valid ent";

    
 }


 //Salida de consola
 $msg = setOutPut(new SalidaConsola());
 print_r( $msg->mensaje());
echo "   →    ";
//Salida en formato Json
 $msg = setOutPut(new SalidaJson());
 print_r( $msg->mensaje());
echo "   →    ";
 //Salida en formato Txt
 $msg = setOutPut(new SalidaTXT());
 print_r( $msg->mensaje());