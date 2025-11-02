<?php
$method = $_SERVER['REQUEST_METHOD'];
$data = json_decode(file_get_contents('php://input'), true);
require_once __DIR__ . '/../Clases/VotosClass.php';
switch ($method) {
    case 'GET':
        $idUsuario = isset($_GET['idUsuario']) ? intval($_GET['idUsuario']) : null;
        $data = ["idUsuario" => $idUsuario];
        Votos::obtenerVotos($data);
        break;
    case 'POST':
        $voto = new Votos($data);
        $voto->guardar($data);
        break;
    case "PUT":
       http_response_code(405);
        echo json_encode(["success" => false, "message" => "Método no permitido PUT"]);
        break;
    case "DELETE":
        http_response_code(405);
        echo json_encode(["success" => false, "message" => "Método no permitido DELETE"]);
        break;
    default:
        http_response_code(405);
        echo json_encode(["success" => false, "message" => "Método no permitido"]);
        exit;
}
?>