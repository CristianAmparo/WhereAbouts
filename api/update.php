<?php
session_start();
header("Access-Control-Allow-Origin: *");

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

// Handle updates here based on the data sent from your React component
// Example: Update the location
$newLocation = $_POST['location'];

$sql = "UPDATE users SET location = '$newLocation' WHERE username = '$user'";
$result = mysqli_query($con, $sql);

if (!$result) {
    http_response_code(500); // Internal Server Error
    echo json_encode(["error" => "Failed to update user data"]);
    exit();
}

echo json_encode(["message" => "User data updated successfully"]);

$con->close();
