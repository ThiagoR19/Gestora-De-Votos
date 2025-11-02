<?php
require_once __DIR__ . '/UsuarioBD.php';
class Usuario {
    private $nombre;
    private $apellido;
    private $email;
    private $password;
    private $tipo; 
    private $id;    

    public static function validacion($data, $accion) {
        $success = false;
        $message = "";
        $faltantes = [];

        if (!is_array($data)) {
            return [
                "success" => false,
                "message" => "Datos inválidos recibidos",
                "datos" => $data,
                "faltantes" => []
            ];
        }

        $data = array_change_key_case($data, CASE_LOWER);

        $campos = ['nombre', 'apellido', 'email', 'password', 'confirmpassword'];

        foreach ($campos as $campo) {
            if (!isset($data[$campo]) || trim($data[$campo]) === '') {
                $faltantes[] = $campo;
            }
        }

        if (!empty($faltantes)) {
            $success = false;
            $message = "Faltan datos obligatorios";
        } 
        elseif (trim($data['password']) !== trim($data['confirmpassword'])) {
            $success = false;
            $message = "Las contraseñas no coinciden";
        } 
        else {
            $UsuarioBD = new UsuarioBD();
            $usuariosCorreoArray = $UsuarioBD->PedirCorreos();

            $existeCorreo = false;
            foreach ($usuariosCorreoArray as $usuario) {
                if (strtolower($usuario['Correo']) === strtolower($data['email'])) {
                    $existeCorreo = true;
                    break;
                }
            }

            if ($existeCorreo) {
                $success = false;
                $message = "Email ya registrado";
            } 
            else {
                $success = true;
                $message = "Usuario registrado con éxito";
                if ($accion === "Guardar"){
                    $nuevoUsuario = new Usuario($data['nombre'],$data['apellido'],$data['email'],$data['password'],1 );
                    $nuevoUsuario->guardar();
                    exit;
                }
                else if ($accion === "Instanciar"){
                    $nuevoUsuario = new Usuario($data['nombre'],$data['apellido'],$data['email'],$data['password'],1 );
                }
            }
        }

        if ($success !== true){
            echo json_encode([
                "success" => $success,
                "message" => $message,
                "datos" => $data,
                "faltantes" => $faltantes
            ]);
        }
    }
    public function __construct($nombre, $apellido, $email, $password, $tipo) {
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->email = $email;
        $this->password = $password;
        $this->tipo = $tipo;
    }
    private function PedirUsuarioId() {
        $usuarioBD = new UsuarioBD();
        
    }
    private function guardar() {
        $usuarioBD = new UsuarioBD();
        $usuarioBD->guardarUsuario($this);
    }
    static public function editar($input){
        $usuarioBD = new UsuarioBD();
        $usuarioBD->actualizarCuenta($input);
    }
    public function MostrarDatosinstanciados(){
        $datos = [
            "Nombre" => $this->nombre,
            "Apellido" => $this->apellido,
            "Email" => $this->email,
            "Password" => $this->password,
            "Tipo" => $this->tipo
        ];
        return $datos;
    }
    public static function logueo($email, $password) {
        $UsuarioBD = new UsuarioBD();
        $usuariosArray = $UsuarioBD->PedirUsuarios();
        $suceso = false;
        $mensaje = "";
        $datos = null;
        foreach ($usuariosArray as $usuario) {
            if ($usuario['Correo'] == $email && $usuario['contrasenia'] == $password) {
                $datos = [
                    'id' => $usuario['id'],
                    'nombre' => $usuario['Nombre'],
                    'apellido' => $usuario['Apellido'],
                    'email' => $usuario['Correo'],
                    'tipo' => $usuario['Nivel_Usuario']
                ];
                $suceso = true;
                $mensaje = "Inicio de sesion exitoso";
            }
        }
        if (!$suceso){
            $suceso = false;
            $mensaje = "Credenciales inválidas";
        }
        echo json_encode([
            "success" => $suceso,
            "message" => $mensaje,
            "datos" => $datos
        ]);
    }
    static public function deletear($input){
        $usuarioBD = new UsuarioBD();
        $usuarioBD->borrarCuenta($input);
    }
    static public function MostrarUnaCuenta(){
        $usuarioBD = new UsuarioBD();
        $usuarioBD->verCuenta();
    }
}
?>