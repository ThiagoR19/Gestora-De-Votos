<?php
require_once __DIR__ . '/CoordinadoresBD.php';
class Coordinadores{
    private $Correo;

    public function __construct($correo){
        $this->Correo = $correo;
    }
    public function guardar($estado){
        $Coordinadores = new CoordinadoresBD();
        $Coordinadores->guardar($this->Correo, $estado);
    }
    private function editar($id){
        $nuevoCorreo = $this->Correo;
        $CoordinadorBD = new CoordinadoresBD();
        $CoordinadorBD->editar($this->Correo, $id);
    }
    static public function mostrarTodos(){
        $Coordinadores = new CoordinadoresBD();
        $Coordinadores->mostrarTodos("enviar");
    }
    public function validacion($accionar,$id){
        $correo = $this->Correo;
            //consulta para buscar el usuario con ese correo
        if ($accionar =="guardar"){
            $CoordinadorBD = new CoordinadoresBD();
            $queOcurrio = $CoordinadorBD->buscarUsuario($correo,2);
            if ($queOcurrio){
                $this->guardar(1);
            }
            else{
                $this->guardar(0);
            }
        }
        else{
            $CoordinadorBD = new CoordinadoresBD();
            $datos=$CoordinadorBD->BuscarPorId($id);

            if ($datos["estado"] == 1){
                $CoordinadorBD = new CoordinadoresBD();
                $queOcurrio = $CoordinadorBD->buscarUsuario($correo,1);
                $this->editar($id);
            }
            else{
                $this->editar($id);
            }
        }
        
        

    }
    static public function deletear($correo){
        $CoordinadorBD = new CoordinadoresBD();
        $datos=$CoordinadorBD->BuscarPorCorreo($correo);

        if ($datos["estado"] == 1){
            $CoordinadorBD = new CoordinadoresBD();
            $queOcurrio = $CoordinadorBD->buscarUsuario($correo,1);
        }
        $CoordinadorBD->eliminar($datos["id"]);
    }
}
?>