<?php
    header("Access-Control-Allow-Origin: *");
    header( "Access-Control-Allow-Methods: GET, POST ");
    header( "Access-Control-Allow-Headers: Content-Type");


    $conn = new mysqli("localhost", "root", "", "whereabouts");
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }else{
        $eData = file_get_contents("php://input");
        $dData = json_decode($eData, true);

        $user = $dData['username'];
        $pass = $dData['password'];
        $result = "";

        if($user != "" and $pass != ""){
            $sql = "SELECT * FROM users WHERE username='$user' AND password='$pass';";
            $res = mysqli_query($conn, $sql);

            if(mysqli_num_rows($res) !=0 ) {
                $result = "Login Successfully";

            }else {
                $result = "";
            }
        }else {
            $result = "";
        }

        $conn -> close();
        $response[] = array("result" => $result);
        echo json_encode($response);

    }