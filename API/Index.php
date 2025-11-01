<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");
// Router simple
require_once __DIR__ . '/conexion.php';
$uri = explode('/', trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/'));

$endpoint = $uri[count($uri) - 1]; 

// Generar la ruta al controlador
$controlador = __DIR__ . "/controladores/" . ucfirst($endpoint) . ".php";

// Si el archivo existe, lo incluimos
if (file_exists($controlador)) {
    require_once $controlador;
} else {
    http_response_code(404);
    echo json_encode(["success" => false, "message" => "Endpoint '$endpoint' no encontrado"]);
}
?>