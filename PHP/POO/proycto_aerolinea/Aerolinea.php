<?php 

class Aerolinea{
    private $id;
    private $nombre;
    private $cantidad;
    private $tipo;

    public function __construct($idParam, $nombreParam, $cantidadParam, $tipoParam) {
        $this->id = $idParam;
        $this->nombre = $nombreParam;
        $this->cantidad = $cantidadParam;
        $this->tipo = $tipoParam;
    }

    /**
     * 
     * Get the value of nombre
     */ 
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * Get the value of cantidad
     */ 
    public function getCantidad()
    {
        return $this->cantidad;
    }

    /**
     * Get the value of tipo
     */ 
    public function getTipo()
    {
        return $this->tipo;
    }

    /**
     * Set the value of nombre
     *@param string 
     *
     */ 
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;

    }

    /**
     * Set the value of cantidad
     *@param int
     * 
     */ 
    public function setCantidad($cantidad)
    {
        $this->cantidad = $cantidad;

    }

    /**
     * Set the value of tipo
     *@param string 
     */ 
    public function setTipo($tipo)
    {
        $this->tipo = $tipo;
    }

    /**
     * Get the value of id
     */ 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @Param int
     */ 
    public function setId($id)
    {
        $this->id = $id;
    }
}