<?php
function verVotos($pdo, $input) {
  try {
    $data = json_decode(file_get_contents("php://input"), true);
    $idUsuario = $data['idUsuario'] ?? null;

    if (!$idUsuario) {
        echo json_encode([
            "success" => false,
            "message" => "Falta el id del usuario",
            "proyectos" => []
        ]);
        exit;
    }

    $stmt = $pdo->prepare("SELECT idProyecto FROM usuario_votos WHERE idUsuario = ?");
    $stmt->execute([$idUsuario]);
    $proyectos = $stmt->fetchAll(PDO::FETCH_COLUMN);

    echo json_encode([
        "success" => true,
        "message" => "Proyectos obtenidos correctamente",
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
?>