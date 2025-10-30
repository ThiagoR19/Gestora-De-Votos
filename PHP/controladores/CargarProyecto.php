<?php
function cargarProyecto($pdo, $input) {
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

    $imagenesNuevas = $data["imagenes"] ?? [];
    $estudiantes = $data["estudiantes"] ?? [];
    $profesores = $data["profesores"] ?? [];

    $pdo->beginTransaction();

    $stmt = $pdo->prepare("
      INSERT INTO proyectos (Nombre, Descripcion, idCategoria, anio, divicion)
      VALUES (?, ?, ?, ?, ?)
    ");
    $stmt->execute([$nombre, $descripcion, $idCategoria, $anio, $division]);
    $idProyecto = $pdo->lastInsertId();

    if (!empty($imagenesNuevas)) {
      $carpetaDestino = __DIR__ . "/../../Js/imagenes/";
      if (!file_exists($carpetaDestino)) {
        mkdir($carpetaDestino, 0777, true);
      }

      $stmtImg = $pdo->prepare("INSERT INTO proyecto_imagenes (idProyecto, imagen) VALUES (?, ?)");
      foreach ($imagenesNuevas as $img) {
        if (preg_match('/^data:image\/(\w+);base64,/', $img, $tipo)) {
          $extension = strtolower($tipo[1]);
          $img = substr($img, strpos($img, ',') + 1);
          $img = base64_decode($img);
          if ($img === false) throw new Exception("Error al decodificar imagen");

          $nombreArchivo = "proyecto_{$idProyecto}_" . uniqid() . ".{$extension}";
          $rutaArchivo = $carpetaDestino . $nombreArchivo;
          file_put_contents($rutaArchivo, $img);

          $stmtImg->execute([$idProyecto, $nombreArchivo]);
        } else {
          $stmtImg->execute([$idProyecto, basename($img)]);
        }
      }
    }

    if (!empty($estudiantes)) {
      $stmtEst = $pdo->prepare("INSERT INTO proyecto_alum (idProyecto, AlumNombre) VALUES (?, ?)");
      foreach ($estudiantes as $nombreEst) {
        $nombreEst = trim($nombreEst);
        if ($nombreEst !== "") {
          $stmtEst->execute([$idProyecto, $nombreEst]);
        }
      }
    }

    if (!empty($profesores)) {
      $stmtProf = $pdo->prepare("INSERT INTO proyecto_profes (idProyecto, profNombre) VALUES (?, ?)");
      foreach ($profesores as $nombreProf) {
        $nombreProf = trim($nombreProf);
        if ($nombreProf !== "") {
          $stmtProf->execute([$idProyecto, $nombreProf]);
        }
      }
    }

    $pdo->commit();

    echo json_encode([
      "success" => true,
      "message" => "Proyecto cargado correctamente con sus imágenes, estudiantes y profesores.",
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
