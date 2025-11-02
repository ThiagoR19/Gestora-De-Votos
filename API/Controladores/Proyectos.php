<?php
$method = $_SERVER['REQUEST_METHOD'];
$data = json_decode(file_get_contents('php://input'), true);
require_once dirname(__DIR__) . "/Clases/ProyectoClass.php";
switch ($method) {
    case 'GET':
        Proyecto::mostrarProyectos();
        break;
    case 'POST':
        $Proyecto = new Proyecto($data);
        $Proyecto->guardar($data);
        break;
    case "PUT":
        Proyecto::editar($data);
        break;
    case "DELETE":
        $idProyecto = isset($_GET['idProyecto']) ? intval($_GET['idProyecto']) : null;
        $data = ["idProyecto" => $idProyecto];
        Proyecto::deletear($data);
        break;
    default:
        http_response_code(405);
        echo json_encode(["success" => false, "message" => "Método no permitido"]);
        exit;
}
?>