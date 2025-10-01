<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

require_once 'Usuario.php';

ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Cabeceras que permiten la solicitud real
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    http_response_code(200);
    exit;
}
switch ($_SERVER['REQUEST_METHOD']) {
    case "POST":

        
        $data = json_decode(file_get_contents("php://input"), true);
        
        if (isset($data['accion']) && $data['accion'] == 'login') {
            $resultado = Usuario::logueo($data['email'], $data['password']);

            if ($resultado === true) {
                file_put_contents("log.json", '[{"he pasado de año" : "true"}]');
                 echo json_encode([
                     "success" => true,
                     "message" => "Inicio de sesión exitoso",
                ]);
            }
            else {
                echo json_encode([
                    "success" => false,
                    "message" => "Credenciales inválidas"
                ]);
            }
        }
        
        else if (isset($data['accion']) && $data['accion'] == 'registrar') {
            Usuario::validacion($data);
            if (Usuario::validacion($data)) {
                $usuario = new Usuario($data['nombre'], $data['apellido'], $data['email'], $data['password'], 1);
            }
        }
        
        

        break;

    default:
        echo json_encode([
            "success" => false,
            "message" => "Método no permitido"
        ]);
        break;
}
?>