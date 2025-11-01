<?php
require_once "API/Conexion.php";
require_once __DIR__ . "/../API/Conexion.php";

class UsuarioBD extends ConexionBD {

    public function GuardarUsuario($usuario) {
        $data = $usuario->MostrarDatosinstanciados();

        try {
            $sql = "INSERT INTO usuarios (Correo, Cant_Rest_votos, contrasenia, Nivel_Usuario, Nombre, Apellido)
                    VALUES (:correo, :cant, :contra, :nivel, :nombre, :apellido)";
            $stmt = self::$pdo->prepare($sql);
            $stmt->execute([
                ':correo' => $data['Email'] ?? null,
                ':cant' => 3,
                ':contra' => $data['Password'] ?? null,
                ':nivel' => 1,
                ':nombre' => $data['Nombre'] ?? null,
                ':apellido' => $data['Apellido'] ?? null
            ]);

            $ultimoId = (int) self::$pdo->lastInsertId();

            echo json_encode([
                "status" => "ok",
                "message" => "Usuario insertado correctamente",
                "datos" => [
                    "tipo" => 1,
                    "id" => $ultimoId
                ]
            ]);
        } catch (PDOException $e) {
            echo json_encode([
                "status" => "error",
                "message" => $e->getMessage()
            ]);
        }
    }
    public function PedirCorreos(){
    try{
        $sql = "SELECT u.Correo from usuarios as u";
        $stmt = self::$pdo->prepare($sql);
        $stmt->execute();

        $correos = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    catch(PDOException $e) {
        echo json_encode([
            "status" => "error",
            "message" => $e->getMessage()
        ]);
    }
    return $correos;
    }
    public function PedirUsuarios(){
        try{
            $sql = "SELECT * from usuarios";
            $stmt = self::$pdo->prepare($sql);
            $stmt->execute();

            $usuarios = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        catch(PDOException $e) {
            echo json_encode([
                "status" => "error",
                "message" => $e->getMessage()
            ]);
        }
        return $usuarios;
    }
    public function borrarCuenta($input) {
  
        try {
            $data = json_decode(file_get_contents("php://input"), true);

            if (!isset($data['idUsuario'])) {
                echo json_encode(["success" => false, "message" => "Falta el id del usuario."]);
                exit;
            }

            $idUsuario = intval($data['idUsuario']);

            self::$pdo->beginTransaction();

            $stmt = self::$pdo->prepare("DELETE FROM usuario_votos WHERE idUsuario = ?");
            $stmt->execute([$idUsuario]);

            $stmt = self::$pdo->prepare("DELETE FROM usuario_estrellas WHERE idUsuario = ?");
            $stmt->execute([$idUsuario]);

            $stmt = self::$pdo->prepare("DELETE FROM usuarios WHERE id = ?");
            $stmt->execute([$idUsuario]);

            self::$pdo->commit();

            echo json_encode([
                "success" => true,
                "message" => "Usuario y sus registros asociados fueron eliminados correctamente."
            ]);

        } 
        catch (Exception $e) {
            if (self::$pdo->inTransaction()) {
                self::$pdo->rollBack();
            }

            echo json_encode([
                "success" => false,
                "message" => "Error al eliminar usuario: " . $e->getMessage()
            ]);
        }
    }
    public function actualizarCuenta($input) {
        try {
            $data = json_decode(file_get_contents("php://input"), true);

            $camposObligatorios = ["idUsuario", "nombre", "apellido", "contrasenia"];
            foreach ($camposObligatorios as $campo) {
                if (!isset($data[$campo]) || trim($data[$campo]) === "") {
                    echo json_encode([
                        "success" => false,
                        "message" => "Falta el campo obligatorio: $campo."
                    ]);
                    exit;
                }
            }

            $idUsuario = intval($data["idUsuario"]);
            $nombre = trim($data["nombre"]);
            $apellido = trim($data["apellido"]);
            $contrasenia = trim($data["contrasenia"]);

            $stmt = self::$pdo->prepare("UPDATE usuarios SET Nombre = ?, Apellido = ?, contrasenia = ? WHERE Id = ?");
            $stmt->execute([$nombre, $apellido, $contrasenia, $idUsuario]);

            if ($stmt->rowCount() > 0) {
                echo json_encode([
                    "success" => true,
                    "message" => "Usuario actualizado correctamente."
                ]);
            } else {
                echo json_encode([
                    "success" => false,
                    "message" => "No se encontró el usuario o no hubo cambios."
                ]);
            }

        } catch (Exception $e) {
            echo json_encode([
                "success" => false,
                "message" => "Error al actualizar usuario: " . $e->getMessage()
            ]);
        }
    }
}
?>