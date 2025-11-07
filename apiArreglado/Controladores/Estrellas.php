<?php
$method = $_SERVER['REQUEST_METHOD'];
$data = json_decode(file_get_contents('php://input'), true);
require_once __DIR__ . '/../Clases/EstrellasClass.php';
switch ($method) {
    case 'GET':
        $idUsuario = isset($_GET['idUsuario']) ? intval($_GET['idUsuario']) : null;
        if (!$idUsuario) {
            echo json_encode(["success" => false, "message" => "Falta el id del usuario"]);
            exit;
        }
        Estrellas::mostrarEstrellasUser(["idUsuario" => $idUsuario]);
        break;
    case 'POST':
        $calificacion = new Estrellas($data['calificacion'], $data['proyecto'], $data['userid']);
        $calificacion->guardar();
        break;
    case "PUT":
        http_response_code(405);
        echo json_encode(["success" => false, "message" => "Método no permitido"]);
        break;
    case "DELETE":
        http_response_code(405);
        echo json_encode(["success" => false, "message" => "Método no permitido"]);
        break;
    default:
        http_response_code(405);
        echo json_encode(["success" => false, "message" => "Método no permitido"]);
        exit;
}
?>