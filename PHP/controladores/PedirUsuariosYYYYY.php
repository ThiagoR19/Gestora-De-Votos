<?php
function PedirCorreos($pdo){
    try{
        $sql = "SELECT u.Correo from usuarios as u";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();

        $correos = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    catch(PDOException $e) {
        echo json_encode([
            "status" => "error",
            "message" => $e->getMessage()
        ]);
    }
    return $correos;
}
function PedirUsuario($pdo){
    try{
        $sql = "SELECT * from usuarios";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();

        $usuarios = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    catch(PDOException $e) {
        echo json_encode([
            "status" => "error",
            "message" => $e->getMessage()
        ]);
    }
    return $usuarios;
}
?>