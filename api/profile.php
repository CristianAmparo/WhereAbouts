<?php
session_start();

header("Access-Control-Allow-Origin: http://localhost:5173"); // Replace with your React app's origin
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");

// Check if the user is logged in
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    http_response_code(401); // Unauthorized
    echo json_encode(["error" => "Not authenticated"]);
    exit();
}

$user = $_SESSION['username'];

$con = mysqli_connect("localhost", "root", "", "whereabouts");

if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM users WHERE username = '$user'";
$result = mysqli_query($con, $sql);

if (!$result) {
    http_response_code(404); // Not Found
    echo json_encode(["error" => "User not found"]);
    exit();
}

$user_data = mysqli_fetch_assoc($result);
echo json_encode($user_data);

$con->close();
