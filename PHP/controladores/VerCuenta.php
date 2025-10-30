<?php
  function verCuenta($pdo) {
    try {
    if (!isset($_GET["idUsuario"])) {
        echo json_encode([
            "success" => false,
            "message" => "Falta el parámetro idUsuario."
        ]);
        exit;
    }

    $idUsuario = intval($_GET["idUsuario"]);

    $stmt = $pdo->prepare("SELECT Nombre, Apellido, contrasenia FROM usuarios WHERE id = ?");
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
?>