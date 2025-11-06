<?php

require_once __DIR__ . '/../Conexion.php';

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
                ':nivel' => $data["Tipo"],
                ':nombre' => $data['Nombre'] ?? null,
                ':apellido' => $data['Apellido'] ?? null
            ]);

            $ultimoId = (int) self::$pdo->lastInsertId();

            echo json_encode([
                "status" => "ok",
                "message" => "Usuario insertado correctamente",
                "datos" => [
                    "tipo" => $data["Tipo"],
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
            $data = $input;

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
    public function actualizarCuenta($input, $salt) {
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
            $contrasenia = (trim($data["contrasenia"]) . $salt);

            $imagen = isset($data["imagen"]) && trim($data["imagen"]) !== "" ? $data["imagen"] : null;
            $rutaFinal = null;

            if ($imagen !== null) {
                $stmtCheck = self::$pdo->prepare("SELECT imagen FROM usuarios WHERE Id = ?");
                $stmtCheck->execute([$idUsuario]);
                $imagenActual = $stmtCheck->fetchColumn();

                $carpeta = __DIR__ . '/../../Js/imagenes/';

                if ($imagenActual && file_exists($carpeta . $imagenActual)) {
                    unlink($carpeta . $imagenActual);
                }

                if (preg_match('/^data:image\/(\w+);base64,/', $imagen, $type)) {
                    $imagen = substr($imagen, strpos($imagen, ',') + 1);
                    $tipo = strtolower($type[1]);
                    $imagen = base64_decode($imagen);

                    $carpeta = __DIR__ . '/../../Js/imagenes/';
                    if (!is_dir($carpeta)) mkdir($carpeta, 0777, true);

                    $nombreArchivo = "usuario_" . $idUsuario . "_" . time() . "." . $tipo;
                    $rutaFinal = $carpeta . $nombreArchivo;
                    file_put_contents($rutaFinal, $imagen);

                    $rutaFinal = $nombreArchivo;
                }
            }

            $sql = "UPDATE usuarios SET Nombre = :nombre, Apellido = :apellido, contrasenia = :contrasenia";
            $params = [
                ":nombre" => $nombre,
                ":apellido" => $apellido,
                ":contrasenia" => $contrasenia,
                ":id" => $idUsuario
            ];

            if ($rutaFinal !== null) {
                $sql .= ", imagen = :imagen";
                $params[":imagen"] = $rutaFinal;
            }

            $sql .= " WHERE Id = :id";

            $stmt = self::$pdo->prepare($sql);
            $stmt->execute($params);

            if ($stmt->rowCount() > 0) {
                echo json_encode([
                    "success" => true,
                    "message" => $rutaFinal !== null
                        ? "Usuario actualizado correctamente con imagen."
                        : "Usuario actualizado correctamente sin cambiar imagen.",
                    "rutaImagen" => $rutaFinal
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
    public function verCuenta() {
        try {
        if (!isset($_GET["idUsuario"])) {
            echo json_encode([
                "success" => false,
                "message" => "Falta el parámetro idUsuario."
            ]);
            exit;
        }

        $idUsuario = intval($_GET["idUsuario"]);

        $stmt = self::$pdo->prepare("SELECT Nombre, Apellido, contrasenia, imagen FROM usuarios WHERE id = ?");
        $stmt->execute([$idUsuario]);
        $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($usuario) {
            echo json_encode([
                "success" => true,
                "data" => $usuario
            ]);
        } else {
            echo json_encode([
                "success" => false,
                "message" => "Usuario no encontrado."
            ]);
        }

        } catch (Exception $e) {
            echo json_encode([
                "success" => false,
                "message" => "Error al obtener usuario: " . $e->getMessage()
            ]);
        }
    }
    public function BuscarUnCorreoParaSerCoordinador($correo, $nivel){
        try{
            $sql = "SELECT id FROM usuarios WHERE Correo=:correo";
            $stmt = self::$pdo->prepare($sql);
            $stmt->execute([
                ":correo"=>$correo
            ]);

            $usuarioId = $stmt->fetch(PDO::FETCH_ASSOC);
            if ($usuarioId){
                try{
                    $sql = "UPDATE usuarios SET Nivel_Usuario=:nivel WHERE Correo=:correo";
                    $stmt = self::$pdo->prepare($sql);
                    $stmt->execute([
                        ":correo"=>$correo,
                        ":nivel"=>$nivel
                    ]);

                    return [
                        "success"=>true
                    ];
                }
                catch(PDOException $e) {
                    echo json_encode([
                        "status" => "error",
                        "message" => $e->getMessage()
                    ]);
                }
            }
            else{
                return [
                    "success"=>false
                ];
            }
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