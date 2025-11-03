<?php
require_once __DIR__ . '/../Conexion.php';
class CoordinadoresBD extends ConexionBD{
    public function mostrarTodos($motivo){
        try{
            $sql = "SELECT c.Correo from Coordinadores as c";
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
    public function guardar($correo, $estado){
        try {
            $sql = "INSERT INTO Coordinadores(Correo, estado) VALUES (:correo, :estado)";
            $stmt = self::$pdo->prepare($sql);
            $stmt->execute([
                ':correo' => $correo ?? null,
                ":estado"=> $estado
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
        if ($suceso){
            $this->editar($correo,1);
        }
    }
    public function editar($correo, $id){
        try{
            $usuario = new UsuarioBD();
            $sql = "UPDATE Coordinadores SET Correo=:correo WHERE id=:id";
            $stmt = self::$pdo->prepare($sql);
            $stmt->execute([
                ":correo"=>$correo,
                ":id"=>$id
            ]);

            $QueOcurrio=$usuario->BuscarUnCorreoParaSerCoordinador($correo,2)["success"];
            if ($QueOcurrio){
                $nuevoEstado = 1;
            }
            else{
                $nuevoEstado = 0;
            }
            try{
                $sql = "UPDATE Coordinadores SET estado=:estado WHERE id=:id";
                $stmt = self::$pdo->prepare($sql);
                $stmt->execute([
                    ":estado"=>$nuevoEstado,
                    ":id"=>$id
                ]);
                echo json_encode([
                    "success"=>"ok",
                    "message"=>"el coordinador ha sido editado con exito"
                ]);
            }
            catch(PDOException $e) {
                echo json_encode([
                    "status" => "error",
                    "message" => $e->getMessage()
                ]);
            }


        }
        catch(PDOException $e) {
            echo json_encode([
                "status" => "error",
                "message" => $e->getMessage()
            ]);
        }
    }
    public function buscarUsuario($correoDeBusqueda, $nivel){
        require_once __DIR__ . '/UsuarioBD.php';
        $usuario = new UsuarioBD();
        return $usuario->BuscarUnCorreoParaSerCoordinador($correoDeBusqueda, $nivel)["success"];
        
    }
    public function buscarPorId($id){
        try{
            $sql = "SELECT c.Correo, c.estado from Coordinadores as c where id=:id";
            $stmt = self::$pdo->prepare($sql);
            $stmt->execute([
                ":id"=>$id
            ]);

            $correo = $stmt->fetch(PDO::FETCH_ASSOC);
            return $correo;
        }
        catch(PDOException $e) {
            echo json_encode([
                "status" => "error",
                "message" => $e->getMessage()
            ]);
        }
    }
    public function BuscarPorCorreo($correo){
        try{
            $sql = "SELECT c.id, c.estado from Coordinadores as c where Correo=:correo";
            $stmt = self::$pdo->prepare($sql);
            $stmt->execute([
                ":correo"=>$correo
            ]);

            $correo = $stmt->fetch(PDO::FETCH_ASSOC);
            return $correo;
        }
        catch(PDOException $e) {
            echo json_encode([
                "status" => "error",
                "message" => $e->getMessage()
            ]);
        }
    }
    public function eliminar($id){
        try{
            $sql = "DELETE from Coordinadores WHERE id=:id";
            $stmt = self::$pdo->prepare($sql);
            $stmt->execute([
                ":id"=>$id
            ]);

            echo json_encode([
                "success"=>"ok",
                "message"=>"el coordinar ha sido eliminado con exito"
            ]);
        }
        catch(PDOException $e) {
            echo json_encode([
                "status" => "error",
                "message" => $e->getMessage()
            ]);
        }
    }
}
?>