<?php

$db_server = "localhost";
$db_user = "root";
$db_password = "";
$database = "test";


$connection = mysqli_connect($db_server, $db_user, $db_password, $database);

if(mysqli_connect_errno() > 0)
{
    echo'greška';
    echo mysqli_connect_errno();
    exit;
}


?>