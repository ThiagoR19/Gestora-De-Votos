<?php
require_once __DIR__ . '/EstrellasBD.php';

class Estrellas {
    private $cant;
    private $proyecId;
    private $usuarioId;

    public function __construct($cant, $proyec, $usuario) {
        $this->cant = $cant;
        $this->proyecId = $proyec;
        $this->usuarioId = $usuario;
    }

    public function guardar() {
        $datos = [
            "calificacion" => $this->cant,
            "proyecto" => $this->proyecId,
            "userid" => $this->usuarioId
        ];

        $EstrellasBD = new EstrellasBD();
        $EstrellasBD->insertarCalificacion($datos);
    }

    static public function mostrarEstrellasUser($input) {
        $EstrellasBD = new EstrellasBD();
        $EstrellasBD->verCalificados($input);
    }
}

?>