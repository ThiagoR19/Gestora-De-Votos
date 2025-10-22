<?php
require 'conexion.php';
echo "Conexión lista.";

$nombre = "Claudio";
$apellido = "Riffo";
$correo = "rydconsulting@gmail.com";
$contrasenia = "122222222";
$Nivel_Usuario = 1;
$Cant_Rest_votos = 3;

try {
    $sql = "INSERT INTO usuarios (Correo, Cant_Rest_votos, contrasenia, Nivel_Usuario, Nombre, Apellido)
        VALUES (:correo, :cant, :contra, :nivel, :nombre, :apellido)";
    $stmt = $pdo->prepare($sql);

    $stmt->execute([
        ':correo' => $correo,
        ':cant' => $Cant_Rest_votos,
        ':contra' => $contrasenia,
        ':nivel' => $Nivel_Usuario,
        ':nombre' => $nombre,
        ':apellido' => $apellido
    ]);
    echo "Usuario agregado correctamente";
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>