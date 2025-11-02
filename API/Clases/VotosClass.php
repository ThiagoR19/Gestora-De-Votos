<?php
require_once __DIR__ . '/VotosBD.php';
Class Votos{
    private $idUsuario;
    private $idProyecto;

    public function __construct($input){
        $this->idUsuario = $input["idUsuario"];
        $this->idProyecto = $input["idProyecto"];
    }
    public function guardar($input): void{
        $VotosBD = new votosBD();
        $VotosBD->votar($input);
    } 
    static function obtenerVotos($input){
        $VotosBD = new votosBD();
        $VotosBD->verVotos($input);
    }
}
?>