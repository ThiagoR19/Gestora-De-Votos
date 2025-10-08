<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

require_once 'Usuario.php';


switch ($_SERVER['REQUEST_METHOD']) {
    case "POST":

        
        $data = json_decode(file_get_contents("php://input"), true);

        if (!$data) {
            echo json_encode([
                "success" => false,
                "message" => "No se recibieron datos válidos"
            ]);
            exit;
        }
        else if (isset($data['accion']) && $data['accion'] == 'login') {
            
            Usuario::logueo($data['email'], $data['password']);
        }

        else if (isset($data['accion']) && $data['accion'] == 'registrar') {
            $TodoSobreValorado = Usuario::validacion($data);
            if ($TodoSobreValorado['success']) {
                $usuario = new Usuario($data['nombre'], $data['apellido'], $data['email'], $data['password'], 1);
                $usuario->mensaje($TodoSobreValorado['success'], $TodoSobreValorado['message'], $TodoSobreValorado['datos'], $TodoSobreValorado['faltantes']);
                
            }
            else{
                echo json_encode([
                    "success" => $TodoSobreValorado['success'],
                    "message" => $TodoSobreValorado['message'],
                    "datos" => null,
                    "faltantes" => $TodoSobreValorado['faltantes']
                ]);
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