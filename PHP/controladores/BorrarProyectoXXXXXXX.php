<?php
function borrarProyecto($pdo, $input) {
  
  try {
      $data = json_decode(file_get_contents("php://input"), true);

      if (!isset($data['idProyecto'])) {
          echo json_encode(["success" => false, "message" => "Falta el id del proyecto."]);
          exit;
      }

      $idProyecto = intval($data['idProyecto']);

      $pdo->beginTransaction();

      $stmt = $pdo->prepare("DELETE FROM proyecto_alum WHERE idProyecto = ?");
      $stmt->execute([$idProyecto]);

      $stmt = $pdo->prepare("DELETE FROM proyecto_imagenes WHERE idProyecto = ?");
      $stmt->execute([$idProyecto]);
      
      $stmt = $pdo->prepare("DELETE FROM proyecto_profes WHERE idProyecto = ?");
      $stmt->execute([$idProyecto]);

      $stmt = $pdo->prepare("DELETE FROM usuario_estrellas WHERE idProyecto = ?");
      $stmt->execute([$idProyecto]);

      $stmt = $pdo->prepare("DELETE FROM usuario_votos WHERE idProyecto = ?");
      $stmt->execute([$idProyecto]);

      $stmt = $pdo->prepare("DELETE FROM proyectos WHERE id = ?");
      $stmt->execute([$idProyecto]);

      $pdo->commit();

      echo json_encode([
          "success" => true,
          "message" => "Proyecto y sus registros asociados fueron eliminados correctamente."
      ]);

  } catch (Exception $e) {
      if ($pdo->inTransaction()) {
          $pdo->rollBack();
      }

      echo json_encode([
          "success" => false,
          "message" => "Error al eliminar proyecto: " . $e->getMessage()
      ]);
  }
}

?>