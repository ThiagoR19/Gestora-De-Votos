<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

require_once 'Usuario.php';
require_once 'conexion.php';

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents("php://input"), true);
$action = $_GET['action'] ?? ($input['action'] ?? null);

if (!$action) {
    echo json_encode(["error" => "No se especificó acción"]);
    exit;
}

switch ($method) {
    case 'GET':
        if($action === "pedirProyectos") {
          require_once 'controladores/PedirProyectos.php';
          pedirProyectos($pdo);
        }

    case 'POST':
        if ($action === 'login') {
            Usuario::logueo($input['email'], $input['password']);
        } 
        elseif ($action === 'registrar') {
            $TodoSobreValorado = Usuario::validacion($input);

            if ($TodoSobreValorado['success']) {
                require_once 'controladores/InsertarUsuario.php';
                insertarUsuario($pdo, $input);
            } else {
                echo json_encode([
                    "success" => $TodoSobreValorado['success'],
                    "message" => $TodoSobreValorado['message'],
                    "datos" => null,
                    "faltantes" => $TodoSobreValorado['faltantes']
                ]);
            }
        }
        elseif ($action==="calificar"){
            require_once 'controladores/InsertarCalifico.php';
            //insertarCalificacion($pdo,$input);
        }
        break;

    default:
        echo json_encode(["error" => "Método no soportado"]);
        break;
}
?>
