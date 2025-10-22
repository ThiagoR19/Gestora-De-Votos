<?php
class Usuario {
    private $nombre;
    private $apellido;
    private $email;
    private $password;
    private $tipo; 
    private $id;
    private static $usuarios = __DIR__ . '/../JSON/Usuarios.json';

    public static function validacion($data) {
        $success = false;
        $message = "";
        $faltantes = [];
        $pasa = true;

        $data = array_change_key_case($data, CASE_LOWER);

        // 🔄 Aceptar ambas formas (correo o email, contra o password)
        if (isset($data['correo']) && !isset($data['email'])) {
            $data['email'] = $data['correo'];
        }
        if (isset($data['contra']) && !isset($data['password'])) {
            $data['password'] = $data['contra'];
        }
        if (!isset($data['confirmpassword']) && isset($data['confirmar'])) {
            $data['confirmpassword'] = $data['confirmar'];
        }

        $campos = ['nombre', 'apellido', 'email', 'password', 'confirmpassword'];

        // ✅ Revisar campos faltantes
        foreach ($campos as $campo) {
            if (!isset($data[$campo]) || trim($data[$campo]) === '') {
                $faltantes[] = $campo;
            }
        }

        if (!empty($faltantes)) {
            $success = false;
            $message = "Faltan datos obligatorios";
        }

        elseif ($data['password'] !== $data['confirmpassword']) {
            $success = false;
            $message = "Las contraseñas no coinciden";
        }
        else {
            // 📂 Leer usuarios existentes (si usás un JSON)
            $usuariosArray = file_exists(self::$usuarios)
                ? json_decode(file_get_contents(self::$usuarios), true)
                : [];

            foreach ($usuariosArray as $usuario) {
                if ($usuario['email'] == $data['email']) {
                    $success = false;
                    $message = "Email ya registrado";
                    $pasa = false;
                    break;
                }
            }

            if ($pasa) {
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
    
    public static function logueo($email, $password) {
        $suceso = false;
        $mensaje = "";
        $datos = null;
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
