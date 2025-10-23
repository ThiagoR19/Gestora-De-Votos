<?php

$host = "auth-db847.hstgr.io";
$dbname = "u732148899_riffo";
$user = "u732148899_riffo";
$pass = "2025.Riffo";

try {
  $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  echo json_encode(["error" => "Error en la conexión: " . $e->getMessage()]);
  exit;
}

?>