<?php
function insertarUsuario($pdo, $data) {

    file_put_contents('php://stderr', print_r($data, true));

    try {
        $sql = "INSERT INTO usuarios (Correo, Cant_Rest_votos, contrasenia, Nivel_Usuario, Nombre, Apellido)
                VALUES (:correo, :cant, :contra, :nivel, :nombre, :apellido)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':correo' => $data['email'] ?? null,
            ':cant' => 3,
            ':contra' => $data['password'] ?? null,
            ':nivel' => 2,
            ':nombre' => $data['nombre'] ?? null,
            ':apellido' => $data['apellido'] ?? null
        ]);

        echo json_encode(["status" => "ok", "message" => "Usuario insertado correctamente"]);
    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => $e->getMessage()]);
    }
}

?>