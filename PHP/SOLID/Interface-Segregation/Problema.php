<?php

/* 
 Principio de segregacion de interfaces -> Si nosotros tenemos una interface demasiado generica
 es mejor dividir en interfaces mas especificas
*/

interface Ave{
    function comer();
    function caminar();
    function picar();

    function volar();
}

class Pinguino implements Ave{
     function comer() {}
    function caminar() {}
    function picar() {}

    function volar(){
        return new Exception("No puedo volar");
    }
}

