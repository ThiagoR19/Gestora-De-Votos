<?php
require_once __DIR__ . '/../Conexion.php';

class VotosBD extends ConexionBD{
    public function verVotos($input) {
  try {
    $data = $input;
    $idUsuario = $data['idUsuario'] ?? null;

    if (!$idUsuario) {
        echo json_encode([
            "success" => false,
            "message" => "Falta el id del usuario",
            "proyectos" => []
        ]);
        exit;
    }

    $stmt = self::$pdo->prepare("SELECT idProyecto FROM usuario_votos WHERE idUsuario = ?");
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
    public function votar($input) {
    try {
      $data =$input;

      if (!isset($data['idUsuario']) || !isset($data['idProyecto'])) {
          echo json_encode([
              "success" => false,
              "message" => "Faltan datos: idUsuario o idProyecto"
          ]);
          exit;
      }

      $idUsuario = (int)$data['idUsuario'];
      $idProyecto = (int)$data['idProyecto'];

      $query = self::$pdo->prepare("SELECT * FROM usuarios WHERE id = ?");
      $query->execute([$idUsuario]);
      $usuario = $query->fetch(PDO::FETCH_ASSOC);

      if (!$usuario) {
          echo json_encode([
              "success" => false,
              "message" => "El usuario no existe"
          ]);
          exit;
      }

      if ((int)$usuario['Cant_Rest_votos'] <= 0) {
          echo json_encode([
              "success" => false,
              "message" => "El usuario no tiene votos disponibles"
          ]);
          exit;
      }

      $check = self::$pdo->prepare("SELECT * FROM usuario_votos WHERE idUsuario = ? AND idProyecto = ?");
      $check->execute([$idUsuario, $idProyecto]);
      if ($check->fetch()) {
          echo json_encode([
              "success" => false,
              "message" => "El usuario ya votó este proyecto"
          ]);
          exit;
      }

      $insert = self::$pdo->prepare("INSERT INTO usuario_votos (idUsuario, idProyecto) VALUES (?, ?)");
      $insert->execute([$idUsuario, $idProyecto]);

      $update = self::$pdo->prepare("UPDATE usuarios SET Cant_Rest_votos = Cant_Rest_votos - 1 WHERE id = ?");
      $update->execute([$idUsuario]);

      echo json_encode([
          "success" => true,
          "message" => "Voto registrado con éxito",
          "datos" => [
              "idUsuario" => $idUsuario,
              "idProyecto" => $idProyecto,
              "Cant_Rest_votos" => (int)$usuario['Cant_Rest_votos'] - 1
          ]
      ]);

  } catch (Exception $e) {
      echo json_encode([
          "success" => false,
          "message" => "Error en el servidor: " . $e->getMessage()
      ]);
  }
    }

}
?>