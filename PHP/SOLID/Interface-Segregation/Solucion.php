<?php

interface Ave{
    function comer();
    function caminar();
    function picar();
}
interface AveVoladora{
    function volar();
}
class Pinguino implements Ave{
     function comer() {}
    function caminar() {}
    function picar() {}
}