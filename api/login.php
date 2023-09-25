<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

$conn = new mysqli("localhost", "root", "", "whereabouts");

if (mysqli_connect_error()) {
    echo json_encode(["error" => "Database connection error"]);
    exit();
} else {
    $eData = file_get_contents("php://input");
    $dData = json_decode($eData, true);

    $user = $dData['username'];
    $pass = $dData['password'];

    if ($user != "" && $pass != "") {
        // Retrieve the hashed password associated with the username
        $stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
        $stmt->bind_param("s", $user);
        $stmt->execute();
        $stmt->bind_result($hashedPassword);
        $stmt->fetch();
        $stmt->close();

        // Compare the entered password with the hashed password
        if (password_verify($pass, $hashedPassword)) {
            $result = "Login Successfully";
        } else {
            $result = "Invalid username or password";
        }
    } else {
        $result = "Invalid username or password";
    }

    $conn->close();
    $response[] = array("result" => $result);
    echo json_encode($response);
}
