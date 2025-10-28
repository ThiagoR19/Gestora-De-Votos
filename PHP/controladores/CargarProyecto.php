<?php
function cargarProyecto($pdo,$input) {
  try {
    $data = json_decode(file_get_contents("php://input"), true);

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

    $estudiantes = $data["estudiantes"] ?? [];
    $profesores = $data["profesores"] ?? [];

    $pdo->beginTransaction();

    $stmt = $pdo->prepare("
        INSERT INTO proyectos (Nombre, Descripcion, idCategoria, anio, divicion)
        VALUES (?, ?, ?, ?, ?)
    ");
    $stmt->execute([$nombre, $descripcion, $idCategoria, $anio, $division]);
    $idProyecto = $pdo->lastInsertId();

    if (!empty($estudiantes)) {
        $stmtEst = $pdo->prepare("INSERT INTO proyecto_alum (idProyecto, AlumNombre) VALUES (?, ?)");
        foreach ($estudiantes as $nombre) {
            $stmtEst->execute([$idProyecto, $nombre]);
        }
    }

    if (!empty($profesores)) {
        $stmtProf = $pdo->prepare("INSERT INTO proyecto_profes (idProyecto, profNombre) VALUES (?, ?)");
        foreach ($profesores as $nombreProfesor) {
            $stmtProf->execute([$idProyecto, $nombreProfesor]);
        }
    }

    $pdo->commit();

    echo json_encode([
        "success" => true,
        "message" => "Proyecto cargado correctamente",
        "idProyecto" => $idProyecto
    ]);

} catch (Exception $e) {
    if ($pdo->inTransaction()) {
        $pdo->rollBack();
    }
    echo json_encode([
        "success" => false,
        "message" => "Error al cargar proyecto: " . $e->getMessage()
    ]);
}
}
?>
