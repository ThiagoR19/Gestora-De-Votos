<?php

$host = "localhost";
$dbname = "gestora_de_votos";
$user = "root";
$pass = "";

try {
  $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  echo json_encode(["error" => "Error en la conexión: " . $e->getMessage()]);
  exit;
}

?>