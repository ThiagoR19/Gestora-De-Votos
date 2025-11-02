<?php

require_once __DIR__ . '/ProyectoBD.php';

class Proyecto{
    private $id;
    private $nombre;
    private $descripcion;
    private $alumnos =[];
    private $profesores =[];
    private $idCategoria = "";
    private $año;
    private $divicion;
    public function __construct($input){
        $this->nombre = $input['nombre'] ?? null;
        $this->descripcion = $input['descripcion'] ?? null;
        $this->alumnos = $input['alumnos'] ?? [];
        $this->profesores = $input['profesores'] ?? [];
        $this->idCategoria = $input['idCategoria'] ?? null;
    }
    public function guardar($input){
        $ProyectoBD = new ProyectoBD();
        $ProyectoBD->cargarProyecto($input);
    }
    static public function editar($input){
        $ProyectoBD = new ProyectoBD();
        $ProyectoBD->editarProyecto($input);
    }
    static public function deletear($input){
        $ProyectoBD = new ProyectoBD();
        $ProyectoBD->borrarProyecto($input);
    }
    static public function mostrarProyectos(){
        $ProyectoBD = new ProyectoBD();
        $ProyectoBD->pedirProyectos();
    }
}
?>