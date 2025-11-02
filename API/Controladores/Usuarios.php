<?php
$method = $_SERVER['REQUEST_METHOD'];
$data = json_decode(file_get_contents('php://input'), true);
require_once __DIR__ . '/../Clases/UsuarioClass.php';

$action = $data['action'] ?? null;

switch ($method) {
    case 'GET':
        Usuario::MostrarUnaCuenta();
        break;
    case 'POST':
        if ($action === "logueo"){
            Usuario::logueo($data['email'], $data['password']);
        } else {
            $usuario = Usuario::validacion($data,"Guardar");
        }
        break;
    case "PUT":
        Usuario::editar($data);
        break;
    case "DELETE":
        $idUsuario = isset($_GET['idUsuario']) ? intval($_GET['idUsuario']) : null;
        $data = ["idUsuario" => $idUsuario];
        Usuario::deletear($data);
        break;
    default:
        http_response_code(405);
        echo json_encode(["success" => false, "message" => "Método no permitido"]);
        exit;
}
?>