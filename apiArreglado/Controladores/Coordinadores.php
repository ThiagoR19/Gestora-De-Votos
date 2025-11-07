<?php
$method = $_SERVER['REQUEST_METHOD'];
$data = json_decode(file_get_contents('php://input'), true);
require_once __DIR__ . '/../Clases/CoordinadoresClass.php';

$action = $data['action'] ?? null;

switch ($method) {
    case 'GET':
        Coordinadores::mostrarTodos();
        break;
    case 'POST':
        $coordinador = new Coordinadores($data["Correo"]);
        $coordinador->validacion( "guardar", null);
        break;
    case "PUT":
        $coordinador = new Coordinadores($data["Correo"]);
        $coordinador->validacion( "editar",$data["id"]);
        break;
    case "DELETE":
        Coordinadores::deletear($data["Correo"]);
        break;
    default:
        http_response_code(405);
        echo json_encode(["success" => false, "message" => "Método no permitido"]);
        exit;
}
?>