<?php

function pedirProyectos($pdo) {
    try {
        $sql = "SELECT p.id, p.Nombre AS nombre, p.Descripcion AS descripcion, p.anio AS años, p.divicion AS division, c.categoria AS categoria,
        
                -- Calificaciones de estrellas
                COUNT(ue.cantEstrellas) AS cantCalificacionesEstrellas,
                IFNULL(SUM(ue.cantEstrellas), 0) AS cantEstrellas,

                -- Total de votos (usuario_votos)
                COUNT(uv.idProyecto) AS cantVotos,

                -- Estudiantes
                GROUP_CONCAT(DISTINCT pa.AlumNombre SEPARATOR ', ') AS estudiantes,

                -- Profesores
                GROUP_CONCAT(DISTINCT pp.profNombre SEPARATOR ', ') AS profesores,

                -- Imágenes
                GROUP_CONCAT(DISTINCT pi.imagen SEPARATOR ', ') AS imagenes

                FROM proyectos AS p

                LEFT JOIN categorias AS c 
                ON p.idCategoria = c.id

                LEFT JOIN proyecto_alum AS pa
                ON pa.idProyecto = p.id

                LEFT JOIN proyecto_profes AS pp
                ON pp.idProyecto = p.id

                LEFT JOIN proyecto_imagenes AS pi
                ON pi.idProyecto = p.id

                LEFT JOIN usuario_estrellas AS ue
                ON ue.idProyecto = p.id

                LEFT JOIN usuario_votos AS uv
                ON uv.idProyecto = p.id

                GROUP BY p.id, p.Nombre, p.Descripcion, p.anio, p.divicion, c.categoria
                ORDER BY p.id;";
        $stmt = $pdo->prepare($sql);
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

?>
