<?php
class Usuario {
    private $nombre;
    private $apellido;
    private $email;
    private $password;
    private $tipo; 
    private $id;
    private static $usuarios = __DIR__ . '/../JSON/Usuarios.json';

    public static function validacion($data){
        $success = false;
        $message = "";
        $faltantes= null;
        $pasa = true;
        $campos = ['nombre', 'apellido', 'email', 'password', 'confirmPassword'];
        $camposFaltantes = [];

        // Revisar qué campos faltan
        foreach ($campos as $campo) {
            if (!isset($data[$campo]) || trim($data[$campo]) === '') {
                $camposFaltantes[] = $campo;
            }
        }


        // Si faltan campos, enviarlos al JS
        if (!empty($camposFaltantes)) {
            $success = false;
            $message = "Faltan datos obligatorios";
            $faltantes= $camposFaltantes;
            
        }
        // Validar que la contraseña y confirmación coincidan
        else if ($data['password'] !== $data['confirmPassword']) {
            $success = false;
            $message = "las contraseñas no coinsiden";
        }
        else{
            $usuariosArray = json_decode(file_get_contents(self::$usuarios), true) ?? [];
            foreach ($usuariosArray as $usuario) {
                if ($usuario['email'] == $data['email']) {
                    $success = false;
                    $message = "Email ya resgistrado";
                    $pasa = false;
                }
            }
            if ($pasa){
                // Si todo está bien, enviamos éxit
            $success = true;
            $message = "Usuario registrado con exito"; 
            }
            
        }
        $todo = [
            "success" => $success,
            "message" => $message,
            "datos" => $data,
            "faltantes" => $faltantes
        ];
        return $todo;
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
    public static function logueo($email, $password) {
        $valida = false;
        $usuariosArray = json_decode(file_get_contents(self::$usuarios), true) ?? [];
        foreach ($usuariosArray as $usuario) {
            if ($usuario['email'] == $email && $usuario['password'] == $password) {
                $datos = [
                    'id' => $usuario['id'],
                    'nombre' => $usuario['nombre'],
                    'apellido' => $usuario['apellido'],
                    'email' => $usuario['email'],
                    'tipo' => $usuario['tipo']
                ];
                echo json_encode([
                    "success" => true,
                    "message" => "Inicio de sesion exitoso",
                    "datos" => $datos
                ]);
                $valida = true;
                exit;
            }
        }
        if (!$valida){
            echo json_encode([
                "success" => false,
                "message" => "Credenciales inválidas"
            ]);
            exit;
        }
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
