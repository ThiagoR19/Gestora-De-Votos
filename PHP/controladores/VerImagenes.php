<?php
function verImagenes($pdo,$input) {
  try {
    $idProyecto = null;

    $data = json_decode(file_get_contents("php://input"), true);
    $idProyecto = $data["idProyecto"] ?? null;

    if (!$idProyecto) {
        echo json_encode([
            "success" => false,
            "message" => "Falta el id del proyecto."
        ]);
        exit;
    }

    $idProyecto = intval($idProyecto);

    $stmt = $pdo->prepare("SELECT imagen FROM proyecto_imagenes WHERE idProyecto = ?");
    $stmt->execute([$idProyecto]);
    $imagenes = $stmt->fetchAll(PDO::FETCH_COLUMN); 

    if (empty($imagenes)) {
        echo json_encode([
            "success" => true,
            "imagenes" => [],
            "message" => "El proyecto no tiene imágenes."
        ]);
        exit;
    }

    echo json_encode([
        "success" => true,
        "imagenes" => $imagenes
    ]);

  } catch (Exception $e) {
      echo json_encode([
          "success" => false,
          "message" => "Error al obtener imágenes: " . $e->getMessage()
      ]);
  }
}
?>
