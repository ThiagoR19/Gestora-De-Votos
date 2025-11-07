<?php
require_once __DIR__ . '/../Conexion.php';

class EstrellasBD extends ConexionBD {
    public function insertarCalificacion($data) {
        file_put_contents('php://stderr', print_r($data, true));

        try {
            $sql = "INSERT INTO usuario_estrellas(IdUsuario, IdProyecto, cantEstrellas) VALUES (:userId,:proyecto,:calificacion)";
            $stmt = self::$pdo->prepare($sql);
            $stmt->execute([
                ':calificacion' => $data['calificacion'] ?? null,
                ':userId' => $data['userid'] ?? null,
                ':proyecto' => $data['proyecto'] ?? null
            ]);

            echo json_encode(["status" => "ok", "message" => "Calificación agregada correctamente"]);
        } catch (PDOException $e) {
            echo json_encode(["status" => "error", "message" => $e->getMessage()]);
        }
    }

    public function verCalificados($input) {
        try {
            $idUsuario = $input['idUsuario'] ?? null;

            if (!$idUsuario) {
                echo json_encode([
                    "success" => false,
                    "message" => "Falta el id del usuario",
                    "proyectos" => []
                ]);
                exit;
            }

            $stmt = self::$pdo->prepare("SELECT cantEstrellas, idProyecto FROM usuario_estrellas WHERE idUsuario = ?");
            $stmt->execute([$idUsuario]);
            $proyectos = $stmt->fetchAll(PDO::FETCH_ASSOC);

            echo json_encode([
                "success" => true,
                "message" => "Proyectos calificados obtenidos correctamente",
                "proyectos" => $proyectos
            ]);

        } catch (Exception $e) {
            echo json_encode([
                "success" => false,
                "message" => "Error en el servidor: " . $e->getMessage(),
                "proyectos" => []
            ]);
        }
    }
}
?>
