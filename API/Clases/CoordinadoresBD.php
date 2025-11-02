<?php
require_once __DIR__ . '/../Conexion.php';
require_once __DIR__ . '/UsuarioBD.php';
class CoordinadoresBD extends ConexionBD{
    public function mostrarTodos($motivo){
        try{
            $sql = "SELECT csr.CorreoCoordinador from CoordinadoresSinRegistrar as csr";
            $stmt = self::$pdo->prepare($sql);
            $stmt->execute();

            $correos = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if ($motivo=="enviar"){
                echo json_encode([
                    "success" => true,
                    "message" => "Correo encontrados exitosamente",
                    "correos" => $correos
                ]);
            }
            elseif ($motivo=="obtener"){
                return $correos;
            }
        }
        catch(PDOException $e) {
            echo json_encode([
                "status" => "error",
                "message" => $e->getMessage()
            ]);
        }
    }
    public function guardar($correo){
        try {
            $sql = "INSERT INTO CoordinadoresSinRegistrar(CorreoCoordinador) VALUES (:correo)";
            $stmt = self::$pdo->prepare($sql);
            $stmt->execute([
                ':correo' => $correo ?? null
            ]);

            echo json_encode(["status" => "ok", "message" => "El coordinador aun no esta registrado, asi que su correo se ha guardado hasta que se registre"]);
        } catch (PDOException $e) {
            echo json_encode(["status" => "error", "message" => $e->getMessage()]);
        }
    }
    public function BuscarUsuariosCorreos($correo){
        $Usuarios = new UsuarioBD;
        $correosUsuarios = $Usuarios->PedirCorreos();

        $suceso = false;
        foreach ($correosUsuarios as $usuarioCorreo){
            if ($usuarioCorreo==$correo){
                $suceso=true;
            }
        }
        if (suceso){
            this->editar($correo);
        }
    }
    public function editar($correo){
        
    }
}
?>