<?php
class Usuario {
    private $nombre;
    private $apellido;
    private $email;
    private $password;
    private $tipo; 
    private $id;
    private static $usuarios = "../JSON/Usuarios.json";

    public static function validacion($data){

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
            echo json_encode([
                "success" => false,
                "message" => "Faltan datos obligatorios",
                "faltantes" => $camposFaltantes
            ]);
            return false;
        }
        // Validar que la contraseña y confirmación coincidan
        if ($data['password'] !== $data['confirmPassword']) {
            echo json_encode([
                "success" => false,
                "message" => "Las contraseñas no coinciden"
            ]);
            
            return false;
        }
        else{
            // Si todo está bien, enviamos éxit
            echo json_encode([
                "success" => true,
                "message" => "Usuario registrado con éxito",
                "datos" => $data
            ]);
            return true;
        }
        
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
        $usuariosArray = json_decode(file_get_contents(self::$usuarios), true) ?? [];
        foreach ($usuariosArray as $usuario) {
            if ($usuario['email'] === $email && $usuario['password'] === $password) {
                file_put_contents("log.json", "he llegado hasta aqui");
                return true;
            }
        }
        return false;
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
