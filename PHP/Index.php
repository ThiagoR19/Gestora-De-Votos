<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

require_once 'Usuario.php';

ini_set('display_errors', 1);
error_reporting(E_ALL);

switch ($_SERVER['REQUEST_METHOD']) {
    case "POST":

        
        $data = json_decode(file_get_contents("php://input"), true);
        
        if (isset($data['accion']) && $data['accion'] == 'login') {
            
            if (Usuario::logueo($data['email'], $data['password']) === true) {
                file_put_contents("log.json", "he pasado de año");
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
        
        if (isset($data['accion']) && $data['accion'] == 'registrar') {
            Usuario::validacion($data);
            if (Usuario::validacion($data) == true) {
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