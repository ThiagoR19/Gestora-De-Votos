<?php
$method = $_SERVER['REQUEST_METHOD'];
$data = json_decode(file_get_contents('php://input'), true);
$token = $data["credential"] ?? null;
require_once dirname(__DIR__) . "/Clases/GoogleClass.php";
switch ($method) {
    case 'GET':
        http_response_code(405);
        echo json_encode(["success" => false, "message" => "Método no permitido"]);
        exit;
    case 'POST':
        InicioGoogle::desencriptado($data,$token);
        break;
    case "PUT":
        http_response_code(405);
        echo json_encode(["success" => false, "message" => "Método no permitido"]);
        exit;
    case "DELETE":
        http_response_code(405);
        echo json_encode(["success" => false, "message" => "Método no permitido"]);
        exit;
    default:
        http_response_code(405);
        echo json_encode(["success" => false, "message" => "Método no permitido"]);
        exit;
}
?>