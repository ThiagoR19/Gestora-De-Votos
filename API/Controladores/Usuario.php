<?php
$method = $_SERVER['REQUEST_METHOD'];
$data = json_decode(file_get_contents('php://input'), true);
require_once '../Clases/UsuarioClass.php';
switch ($method) {
    case 'GET':
        Usuario::logueo($data['email'], $data['password'], $pdo);
        break;
    case 'POST':
        $usuario = Usuario::validacion($data,"Guardar");
        break;
    case "PUT":
        Usuario::editar($input);
        break;
    case "DELETE":
        Usuario::deletear($input);
        break;
    default:
        http_response_code(405);
        echo json_encode(["success" => false, "message" => "Método no permitido"]);
        exit;
}
?>