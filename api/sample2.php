<?php

session_start(); // Start the session first

// Check if the user is logged in
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    http_response_code(401); // Unauthorized
    echo json_encode(["error" => "Not authenticated"]);
    exit();
}

$user = $_SESSION['username'];


header("Access-Control-Allow-Origin: *"); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
$id = '';

$con = mysqli_connect("localhost", "root", "", "whereabouts");

$method = $_SERVER['REQUEST_METHOD'];


if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}


switch ($method) {
    case 'GET':

        $sql = "SELECT * FROM `users` WHERE username = '$user'";
        break;
}

// run SQL statement
$result = mysqli_query($con, $sql);

// die if SQL statement failed
if (!$result) {
    http_response_code(404);
    die(mysqli_error($con));
}

if ($method == 'GET') {
    if (!$id) echo '[';
    for ($i = 0; $i < mysqli_num_rows($result); $i++) {
        echo ($i > 0 ? ',' : '') . json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
} else {
    echo mysqli_affected_rows($con);
}

$con->close();
