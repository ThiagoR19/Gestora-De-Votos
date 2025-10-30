<?php
  function actualizarCuenta($pdo, $input) {
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

    $stmt = $pdo->prepare("UPDATE usuarios SET Nombre = ?, Apellido = ?, contrasenia = ? WHERE Id = ?");
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
?>
