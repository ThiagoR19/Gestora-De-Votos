<?php

$host = "localhost";
$dbname = "gestora_de_votos";
$user = "root";
$pass = "";

try {
  $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "■ Conexión exitosa";
} catch (PDOException $e) {
  echo "■ Error en la conexión: " . $e->getMessage();
}

?>