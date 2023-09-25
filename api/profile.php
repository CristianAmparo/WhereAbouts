<?php
session_start(); // Start the session first

header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true"); // Allow credentials (cookies) to be sent with the request

// Get the origin of the incoming request
$origin = $_SERVER['HTTP_ORIGIN'];

// Define an array of allowed origins (add the origin of your React app)
$allowedOrigins = [
    'http://localhost:5174', // Replace with the actual URL of your React app
    // Add more allowed origins as needed
];

// Check if the incoming origin is in the list of allowed origins
if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: " . $origin);
} else {
    header("Access-Control-Allow-Origin: null"); // Set a default value or handle this case accordingly
}

if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true) {
    // User is authenticated
    $username = $_SESSION['username'];

    // Create a SQL query to select all records where username matches
    $query = "SELECT * FROM users WHERE username = ?";

    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    $userRecords = array();

    while ($row = $result->fetch_assoc()) {
        $userRecords[] = $row;
    }

    $stmt->close();
    $conn->close();

    // Debugging output
    error_log("User Records: " . json_encode($userRecords));

    // Return the user records as JSON
    echo json_encode($userRecords);
} else {
    echo json_encode(["error" => "User not authenticated"]);
}
error_log("User Records: " . json_encode($userRecords));
