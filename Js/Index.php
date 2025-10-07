<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Manejo de OPTIONS para CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

switch ($_SERVER['REQUEST_METHOD']) {
    case "POST":
        // Leer JSON del body
        $input = json_decode(file_get_contents("php://input"), true);

        if (!$input) {
            echo json_encode([
                "success" => false,
                "message" => "No se recibió JSON válido"
            ]);
            exit;
        }

        // Validar campos obligatorios
        $faltantes = [];
        foreach (['nombre','apellido','email','password','confirmPassword'] as $campo) {
            if (empty($input[$campo])) {
                $faltantes[] = $campo;
            }
        }

        if (!empty($faltantes)) {
            echo json_encode([
                "success" => false,
                "faltantes" => $faltantes,
                "message" => "Faltan campos obligatorios"
            ]);
            exit;
        }

        if ($input['password'] !== $input['confirmPassword']) {
            echo json_encode([
                "success" => false,
                "message" => "Las contraseñas no coinciden"
            ]);
            exit;
        }

        // Simulación de registro exitoso
        echo json_encode([
            "success" => true,
            "message" => "Usuario registrado correctamente",
            "id"      => rand(1000,9999),   // Simulación de ID
            "tipo"    => "cliente"
        ]);
        break;

    default:
        echo json_encode([
            "success" => false,
            "message" => "Método no permitido"
        ]);
        break;
}
exit;
?>
