<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$conn = new mysqli("localhost", "root", "", "whereabouts");

if (mysqli_connect_error()) {
    echo json_encode(["error" => "Database connection error"]);
    exit();
} else {
    $eData = file_get_contents("php://input");
    $dData = json_decode($eData, true);

    $fname = $dData['fname'];
    $lname = $dData['lname'];
    $department = $dData['department'];
    $username = $dData['username'];
    $password = password_hash($dData['password'], PASSWORD_BCRYPT); // Hash the password

    // Check if the username already exists
    $checkQuery = "SELECT * FROM users WHERE username=?";
    $stmt = $conn->prepare($checkQuery);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo json_encode(["error" => "Username already exists"]);
    } else {
        // Insert new user data into the database using prepared statement
        $insertQuery = "INSERT INTO users (fname, lname, department, username, password) VALUES (?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($insertQuery);
        $stmt->bind_param("sssss", $fname, $lname, $department, $username, $password);

        if ($stmt->execute()) {
            echo json_encode(["result" => "Registration successful"]);
        } else {
            echo json_encode(["error" => "Registration failed"]);
        }
    }

    $conn->close();
}
