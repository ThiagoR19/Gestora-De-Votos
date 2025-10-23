<?php
function insertarCalificacion($pdo,$data){
    file_put_contents('php://stderr', print_r($data, true));

    try {
        $sql = "INSERT INTO usuario_estrellas(IdUsuario, IdProyecto, cantEstrellas) VALUES (:userId,:proyecto,:calificacion)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':calificacion' => $data['calificacion'] ?? null,
            ':userId' => $data['userId'] ?? null,
            ':proyecto' => $data['proyecto'] ?? null
        ]);

        echo json_encode(["status" => "ok", "message" => "Calificacion agregada correctamente"]);
    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => $e->getMessage()]);
    }
}
?>