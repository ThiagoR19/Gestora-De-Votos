<?php

function pedirProyectos($pdo) {
    try {
        $sql = "SELECT * FROM proyectos";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();

        $proyectos = $stmt->fetchAll(PDO::FETCH_ASSOC); 

        echo json_encode([
            "status" => "ok",
            "message" => "Los proyectos se han llamado correctamente",
            "datos" => $proyectos
        ]);
    } catch (PDOException $e) {
        echo json_encode([
            "status" => "error",
            "message" => $e->getMessage()
        ]);
    }
}

?>
