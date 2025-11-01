<?php
require_once __DIR__ . "/../API/Conexion.php";

class ProyectoBD extends ConexionBD {
    public function cargarProyecto($input) {
        try {
            $data = $input;

            $camposObligatorios = ["nombre", "descripcion", "idCategoria", "anio", "division"];
            $faltantes = [];

            foreach ($camposObligatorios as $campo) {
            if (!isset($data[$campo]) || trim($data[$campo]) === "") {
                $faltantes[] = $campo;
            }
            }

            if (!empty($faltantes)) {
            echo json_encode([
                "success" => false,
                "message" => "Faltan datos obligatorios",
                "faltantes" => $faltantes
            ]);
            exit;
            }

            $nombre = trim($data["nombre"]);
            $descripcion = trim($data["descripcion"]);
            $idCategoria = intval($data["idCategoria"]);
            $anio = intval($data["anio"]);
            $division = trim($data["division"]);

            $imagenesNuevas = $data["imagenes"] ?? [];
            $estudiantes = $data["estudiantes"] ?? [];
            $profesores = $data["profesores"] ?? [];

            self::$pdo->beginTransaction();

            $stmt =  self::$pdo->prepare("
            INSERT INTO proyectos (Nombre, Descripcion, idCategoria, anio, divicion)
            VALUES (?, ?, ?, ?, ?)
            ");
            $stmt->execute([$nombre, $descripcion, $idCategoria, $anio, $division]);
            $idProyecto =  self::$pdo->lastInsertId();

            if (!empty($imagenesNuevas)) {
            $carpetaDestino = __DIR__ . "/../../Js/imagenes/";
            if (!file_exists($carpetaDestino)) {
                mkdir($carpetaDestino, 0777, true);
            }

            $stmtImg =  self::$pdo->prepare("INSERT INTO proyecto_imagenes (idProyecto, imagen) VALUES (?, ?)");
            foreach ($imagenesNuevas as $img) {
                if (preg_match('/^data:image\/(\w+);base64,/', $img, $tipo)) {
                $extension = strtolower($tipo[1]);
                $img = substr($img, strpos($img, ',') + 1);
                $img = base64_decode($img);
                if ($img === false) throw new Exception("Error al decodificar imagen");

                $nombreArchivo = "proyecto_{$idProyecto}_" . uniqid() . ".{$extension}";
                $rutaArchivo = $carpetaDestino . $nombreArchivo;
                file_put_contents($rutaArchivo, $img);

                $stmtImg->execute([$idProyecto, $nombreArchivo]);
                } else {
                $stmtImg->execute([$idProyecto, basename($img)]);
                }
            }
            }

            if (!empty($estudiantes)) {
            $stmtEst =  self::$pdo->prepare("INSERT INTO proyecto_alum (idProyecto, AlumNombre) VALUES (?, ?)");
            foreach ($estudiantes as $nombreEst) {
                $nombreEst = trim($nombreEst);
                if ($nombreEst !== "") {
                $stmtEst->execute([$idProyecto, $nombreEst]);
                }
            }
            }

            if (!empty($profesores)) {
            $stmtProf =  self::$pdo->prepare("INSERT INTO proyecto_profes (idProyecto, profNombre) VALUES (?, ?)");
            foreach ($profesores as $nombreProf) {
                $nombreProf = trim($nombreProf);
                if ($nombreProf !== "") {
                $stmtProf->execute([$idProyecto, $nombreProf]);
                }
            }
            }

            self::$pdo->commit();

            echo json_encode([
            "success" => true,
            "message" => "Proyecto cargado correctamente con sus imágenes, estudiantes y profesores.",
            "idProyecto" => $idProyecto
            ]);

        } catch (Exception $e) {
            if ( self::$pdo->inTransaction()) {
             self::$pdo->rollBack();
            }

            echo json_encode([
            "success" => false,
            "message" => "Error al cargar proyecto: " . $e->getMessage()
            ]);
        }
    }
    public function borrarProyecto($input) {
        
        try {
            $data = $input;

            if (!isset($data['idProyecto'])) {
                echo json_encode(["success" => false, "message" => "Falta el id del proyecto."]);
                exit;
            }

            $idProyecto = intval($data['idProyecto']);

            self::$pdo->beginTransaction();

            $stmt = self::$pdo->prepare("DELETE FROM proyecto_alum WHERE idProyecto = ?");
            $stmt->execute([$idProyecto]);

            $stmt = self::$pdo->prepare("DELETE FROM proyecto_imagenes WHERE idProyecto = ?");
            $stmt->execute([$idProyecto]);
            
            $stmt = self::$pdo->prepare("DELETE FROM proyecto_profes WHERE idProyecto = ?");
            $stmt->execute([$idProyecto]);

            $stmt = self::$pdo->prepare("DELETE FROM usuario_estrellas WHERE idProyecto = ?");
            $stmt->execute([$idProyecto]);

            $stmt = self::$pdo->prepare("DELETE FROM usuario_votos WHERE idProyecto = ?");
            $stmt->execute([$idProyecto]);

            $stmt = self::$pdo->prepare("DELETE FROM proyectos WHERE id = ?");
            $stmt->execute([$idProyecto]);

            self::$pdo->commit();

            echo json_encode([
                "success" => true,
                "message" => "Proyecto y sus registros asociados fueron eliminados correctamente."
            ]);

        } catch (Exception $e) {
            if (self::$pdo->inTransaction()) {
                self::$pdo->rollBack();
            }

            echo json_encode([
                "success" => false,
                "message" => "Error al eliminar proyecto: " . $e->getMessage()
            ]);
        }
    }
    public function editarProyecto($input) {
        try {
            $data = $input;

            $camposObligatorios = ["idProyecto", "nombre", "descripcion", "idCategoria", "anio", "division"];
            $faltantes = [];
            foreach ($camposObligatorios as $campo) {
                if (!isset($data[$campo]) || trim($data[$campo]) === "") {
                    $faltantes[] = $campo;
                }
            }

            if (!empty($faltantes)) {
                echo json_encode([
                    "success" => false,
                    "message" => "Faltan datos obligatorios",
                    "faltantes" => $faltantes
                ]);
                exit;
            }

            $idProyecto = intval($data["idProyecto"]);
            $nombre = trim($data["nombre"]);
            $descripcion = trim($data["descripcion"]);
            $idCategoria = intval($data["idCategoria"]);
            $anio = intval($data["anio"]);
            $division = trim($data["division"]);
            $imagenesNuevas = $data["imagenes"] ?? [];
            $estudiantes = $data["estudiantes"] ?? [];
            $profesores = $data["profesores"] ?? [];

            self::$pdo->beginTransaction();

            $stmt = self::$pdo->prepare("
                UPDATE proyectos 
                SET Nombre = ?, Descripcion = ?, idCategoria = ?, anio = ?, divicion = ?
                WHERE id = ?
            ");
            $stmt->execute([$nombre, $descripcion, $idCategoria, $anio, $division, $idProyecto]);

            if (!empty($imagenesNuevas)) {
                $stmtDelete = self::$pdo->prepare("DELETE FROM proyecto_imagenes WHERE idProyecto = ?");
                $stmtDelete->execute([$idProyecto]);

                $carpetaDestino = __DIR__ . "/../../Js/imagenes/";
                if (!file_exists($carpetaDestino)) {
                    mkdir($carpetaDestino, 0777, true);
                }

                $stmtOldImgs = self::$pdo->prepare("SELECT imagen FROM proyecto_imagenes WHERE idProyecto = ?");
                $stmtOldImgs->execute([$idProyecto]);
                $imagenesViejas = $stmtOldImgs->fetchAll(PDO::FETCH_COLUMN);
                foreach ($imagenesViejas as $imgVieja) {
                    $rutaVieja = $carpetaDestino . $imgVieja;
                    if (file_exists($rutaVieja)) unlink($rutaVieja);
                }

                $stmtDelete = self::$pdo->prepare("DELETE FROM proyecto_imagenes WHERE idProyecto = ?");
                $stmtDelete->execute([$idProyecto]);

                $stmtImg = self::$pdo->prepare("INSERT INTO proyecto_imagenes (idProyecto, imagen) VALUES (?, ?)");
                foreach ($imagenesNuevas as $img) {
                    if (preg_match('/^data:image\/(\w+);base64,/', $img, $tipo)) {
                        $extension = strtolower($tipo[1]);
                        $img = substr($img, strpos($img, ',') + 1);
                        $img = base64_decode($img);
                        if ($img === false) throw new Exception("Error al decodificar imagen");

                        $nombreArchivo = "proyecto_{$idProyecto}_" . uniqid() . ".{$extension}";
                        $rutaArchivo = $carpetaDestino . $nombreArchivo;
                        file_put_contents($rutaArchivo, $img);
                        $stmtImg->execute([$idProyecto, $nombreArchivo]);
                    } else {
                        $stmtImg->execute([$idProyecto, basename($img)]);
                    }
                }
            }

            if (!empty($estudiantes)) {
                $stmtDelEst = self::$pdo->prepare("DELETE FROM proyecto_alum WHERE idProyecto = ?");
                $stmtDelEst->execute([$idProyecto]);

                $stmtEst = self::$pdo->prepare("INSERT INTO proyecto_alum (idProyecto, AlumNombre) VALUES (?, ?)");
                foreach ($estudiantes as $nombreEst) {
                    $nombreEst = trim($nombreEst);
                    if ($nombreEst !== "") {
                        $stmtEst->execute([$idProyecto, $nombreEst]);
                    }
                }
            }
            
            if (!empty($profesores)) {
                $stmtDelProf = self::$pdo->prepare("DELETE FROM proyecto_profes WHERE idProyecto = ?");
                $stmtDelProf->execute([$idProyecto]);

                $stmtProf = self::$pdo->prepare("INSERT INTO proyecto_profes (idProyecto, profNombre) VALUES (?, ?)");
                foreach ($profesores as $nombreProf) {
                    $nombreProf = trim($nombreProf);
                    if ($nombreProf !== "") {
                        $stmtProf->execute([$idProyecto, $nombreProf]);
                    }
                }
            }

            self::$pdo->commit();

            echo json_encode([
                "success" => true,
                "message" => "Proyecto actualizado correctamente (datos, imágenes, estudiantes y profesores)."
            ]);

        } catch (Exception $e) {
            if (self::$pdo->inTransaction()) {
                self::$pdo->rollBack();
            }

            echo json_encode([
                "success" => false,
                "message" => "Error al actualizar proyecto: " . $e->getMessage()
            ]);
        }
    }
    public function pedirProyectos() {
        try {
            $sql = "SELECT p.id, p.Nombre AS nombre, p.Descripcion AS descripcion, p.anio AS años, p.divicion AS division, c.categoria AS categoria,
            
            -- número de calificaciones (filas en usuario_estrellas)
            COUNT(DISTINCT ue.id) AS cantCalificacionesEstrellas,

            -- suma de estrellas (evitamos duplicados con SUM DISTINCT si fuera necesario)
            IFNULL(SUM(DISTINCT ue.cantEstrellas), 0) AS cantEstrellas,

            -- total de votos (filas distintas en usuario_votos)
            COUNT(DISTINCT uv.id) AS cantVotos,

            -- estudiantes, profesores e imágenes concatenados
            GROUP_CONCAT(DISTINCT pa.AlumNombre SEPARATOR ', ') AS estudiantes,
            GROUP_CONCAT(DISTINCT pp.profNombre SEPARATOR ', ') AS profesores,
            GROUP_CONCAT(DISTINCT pi.imagen SEPARATOR ', ') AS imagenes

            FROM proyectos AS p
            LEFT JOIN categorias AS c ON p.idCategoria = c.id
            LEFT JOIN proyecto_alum AS pa ON pa.idProyecto = p.id
            LEFT JOIN proyecto_profes AS pp ON pp.idProyecto = p.id
            LEFT JOIN proyecto_imagenes AS pi ON pi.idProyecto = p.id
            LEFT JOIN usuario_estrellas AS ue ON ue.idProyecto = p.id
            LEFT JOIN usuario_votos AS uv ON uv.idProyecto = p.id

            GROUP BY p.id, p.Nombre, p.Descripcion, p.anio, p.divicion, c.categoria
            ORDER BY p.id;";
            $stmt = self::$pdo->prepare($sql);
            $stmt->execute();

            $proyectos = $stmt->fetchAll(PDO::FETCH_ASSOC);

            foreach ($proyectos as &$p) {
            $p['estudiantes'] = $p['estudiantes'] ? explode(', ', $p['estudiantes']) : [];
            $p['profesores'] = $p['profesores'] ? explode(', ', $p['profesores']) : [];
            $p['imagenes'] = $p['imagenes'] ? explode(', ', $p['imagenes']) : [];
            }

            echo json_encode([
                "status" => "ok",
                "message" => "Los proyectos se han llamado correctamente",
                "datos" => $proyectos
            ]);
        } catch (PDOException $e) {
            echo json_encode([
                "status" => "error",
                "message" => $e->getMessage()
            ]);
        }
    }
}
?>