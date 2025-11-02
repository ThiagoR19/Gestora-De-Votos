<?php
require_once __DIR__ . '/CoordinadoresBD.php';
class Coordinadores{
    private $Correo;

    public function __construct($correo){
        $this->Correo = $correo;
    }
    public function guardar(){
        $Coordinadores = new CoordinadoresBD();
        $Coordinadores->guardar($this->Correo);
    }
    static public function editar(){

    }
    static public function deletear(){

    }
    static public function mostrarTodos(){
        $Coordinadores = new CoordinadoresBD();
        $Coordinadores->mostrarTodos("enviar");
    }
    public function validacion($motivo, $accionar){
        $Coordinadores = new CoordinadoresBD();
        $correo = $this->Correo;
        $todosLosCorreos = $Coordinadores->mostrarTodos("obtener");

        $suceso = true;
        foreach ($todosLosCorreos as $CorreoBD) {
            if (suceso){
                if ($CorreoBD == $correo){
                    $suceso = false;
                }
            }
        }
        if ($suceso){
            if ($accionar =="guardar"){
                //buscar en usuarios si existe el correo
                
                //si existe cambiar tipo a 2
                // si no existe guardarlo en la tabla
                this->guardar();
            }
            else{

            }
        }
        else{
            if ($motivo =="envie"){
                echo json_encode([
                    "success" => false,
                    "message" => "El coordinador que intenta guardar/editar sigue sin registrarse"
                ]);
            }
            else{
                echo json_encode([
                    "success" => false,
                    "message" => ""
                ]);
            }
        }

    }
}
?>