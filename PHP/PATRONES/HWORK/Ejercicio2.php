<!-- Patron de diseño creacional Adapter  -->

<!-- Problema -->
 <!-- 
Estamos trabajando con distintas versiones de sistemas operativos Windows 7 y Windows 10. 
Al compartir archivos como Word, Excel, Power Point, surgen problemas al abrirlos en Windows 10 debido a la falta de compatibilidad con la versión Windows 7. 
Debes crear un programa donde Windows 10 pueda aceptar estos archivos independientemente de que sean de versiones anteriores.
 -->
<?php
// Clase antigua
class ArchivoAntiguo {
    public function abrirDoc() {
        return "Abriendo archivo .doc (versión antigua)";
    }
    public function abrirPPX() {
        return "Abriendo archivo .ppx (versión antigua)";
    }
    public function abrirExcel() {
        return "Abriendo archivo .xls (versión antigua)";
    }
}

// Interfaz moderna
interface ArchivoModerno {
    public function abrirDocx();
    public function abrirPPX();
    public function abrirExcel();
}

// Adaptador
class AdaptadorArchivo implements ArchivoModerno {
    private $archivoAntiguo;

    public function __construct(ArchivoAntiguo $archivoAntiguo) {
        $this->archivoAntiguo = $archivoAntiguo;
    }

    public function abrirDocx() {
        // Redirige la llamada al método antiguo
        return $this->archivoAntiguo->abrirDoc();
    }
    public function abrirPPX() {
        // Redirige la llamada al método antiguo
        return $this->archivoAntiguo->abrirPPX();
    }
    public function abrirExcel() {
        // Redirige la llamada al método antiguo
        return $this->archivoAntiguo->abrirExcel();
    }
}

// Cliente
function abrirArchivo(ArchivoModerno $archivo) {
    echo $archivo->abrirDocx();
}

// Uso
$archivoAntiguo = new ArchivoAntiguo();
$adaptador = new AdaptadorArchivo($archivoAntiguo);

abrirArchivo($adaptador);
?>
