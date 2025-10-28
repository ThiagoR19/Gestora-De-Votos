<?php
function editarProyecto($pdo, $input) {
  try {
    $data = json_decode(file_get_contents("php://input"), true);

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

    $pdo->beginTransaction();

    $stmt = $pdo->prepare("
        UPDATE proyectos 
        SET Nombre = ?, Descripcion = ?, idCategoria = ?, anio = ?, divicion = ?
        WHERE id = ?
    ");
    $stmt->execute([$nombre, $descripcion, $idCategoria, $anio, $division, $idProyecto]);

    $stmt = $pdo->prepare("SELECT COUNT(*) AS total FROM proyecto_imagenes WHERE idProyecto = ?");
    $stmt->execute([$idProyecto]);
    $resultado = $stmt->fetch(PDO::FETCH_ASSOC);
    $totalActual = intval($resultado["total"]);

    $imagenesAgregadas = 0;

    if (!empty($imagenesNuevas)) {
        $disponibles = 4 - $totalActual;

        if ($disponibles <= 0) {
            throw new Exception("El proyecto ya tiene el máximo de 4 imágenes.");
        }

        $imagenesAInsertar = array_slice($imagenesNuevas, 0, $disponibles);
        $stmtImg = $pdo->prepare("INSERT INTO proyecto_imagenes (idProyecto, imagen) VALUES (?, ?)");

        foreach ($imagenesAInsertar as $ruta) {
            $stmtImg->execute([$idProyecto, $ruta]);
            $imagenesAgregadas++;
        }
    }

    $pdo->commit();

    echo json_encode([
        "success" => true,
        "message" => "Proyecto actualizado correctamente.",
        "imagenesAgregadas" => $imagenesAgregadas,
        "imagenesTotales" => $totalActual + $imagenesAgregadas
    ]);

} catch (Exception $e) {
    if ($pdo->inTransaction()) {
        $pdo->rollBack();
    }

    echo json_encode([
        "success" => false,
        "message" => "Error al actualizar proyecto: " . $e->getMessage()
    ]);
}
}
?>
