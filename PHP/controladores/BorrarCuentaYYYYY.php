<?php
function borrarCuenta($pdo, $input) {
  
  try {
      $data = json_decode(file_get_contents("php://input"), true);

      if (!isset($data['idUsuario'])) {
          echo json_encode(["success" => false, "message" => "Falta el id del usuario."]);
          exit;
      }

      $idUsuario = intval($data['idUsuario']);

      $pdo->beginTransaction();

      $stmt = $pdo->prepare("DELETE FROM usuario_votos WHERE idUsuario = ?");
      $stmt->execute([$idUsuario]);

      $stmt = $pdo->prepare("DELETE FROM usuario_estrellas WHERE idUsuario = ?");
      $stmt->execute([$idUsuario]);

      $stmt = $pdo->prepare("DELETE FROM usuarios WHERE id = ?");
      $stmt->execute([$idUsuario]);

      $pdo->commit();

      echo json_encode([
          "success" => true,
          "message" => "Usuario y sus registros asociados fueron eliminados correctamente."
      ]);

  } catch (Exception $e) {
      if ($pdo->inTransaction()) {
          $pdo->rollBack();
      }

      echo json_encode([
          "success" => false,
          "message" => "Error al eliminar usuario: " . $e->getMessage()
      ]);
  }
}

?>