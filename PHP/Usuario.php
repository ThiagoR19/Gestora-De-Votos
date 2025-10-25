<?php
class Usuario {
    private $nombre;
    private $apellido;
    private $email;
    private $password;
    private $tipo; 
    private $id;
    private static $usuarios = __DIR__ . '/../JSON/Usuarios.json';

    public static function validacion($data, $pdo) {
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
            require_once 'controladores/PedirUsuarios.php';
            $usuariosCorreoArray = PedirCorreos($pdo);

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
            }
        }

        return [
            "success" => $success,
            "message" => $message,
            "datos" => $data,
            "faltantes" => $faltantes
        ];
    }
    public function mensaje($suceso,$mensaje,$datos,$faltantes){
        echo json_encode([
            "success" => $suceso,
            "message" => $mensaje,
            "datos" => $datos,
            "faltantes" => $faltantes
        ]);
    }

    public function __construct($nombre, $apellido, $email, $password, $tipo) {
       
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->email = $email;
        $this->password = $password;
        $this->tipo = $tipo;
        $this->id = $this->verificacionId();
        $this->guardar();
    }

    private function verificacionId() {
        $usuariosArray = json_decode(file_get_contents(self::$usuarios), true) ?? [];

        if (empty($usuariosArray)) {
            return 0;
        } else {
            $ids = array_column($usuariosArray, 'id');
            return max($ids) + 1;
        }
    }

    private function toArray() {
        return [
            'id' => $this->id,
            'nombre' => $this->nombre,
            'apellido' => $this->apellido,
            'email' => $this->email,
            'password' => $this->password,
            'tipo' => $this->tipo
        ];
    }

    public function guardar() {
        $usuariosArray = json_decode(file_get_contents(self::$usuarios), true) ?? [];
        $usuariosArray[] = $this->toArray();
        file_put_contents(self::$usuarios, json_encode($usuariosArray, JSON_PRETTY_PRINT));
    }
    
    public static function logueo($email, $password, $pdo) {
        require_once 'controladores/PedirUsuarios.php';
        $usuariosArray = PedirUsuario($pdo);
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
    // Getters
    public function getNombre() { return $this->nombre; }
    public function getApellido() { return $this->apellido; }
    public function getEmail() { return $this->email; }
    public function getPassword() { return $this->password; }
    public function getTipo() { return $this->tipo; }
    public function getId() { return $this->id; }
}
?>
