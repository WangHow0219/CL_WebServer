<?php
$u = "http://localhost/CL/CL12_phpDB/DoDel.php";

$id = $_POST['id'];
$db_host = 'localhost';
$db_name = 'webserver_db';
$db_user = 'root';
$db_password = '';
$dsn = "mysql:host=$db_host; dbname=$db_name; charset=utf8";

try {
    $conn = new PDO($dsn, $db_user, $db_password);
    $sql = "DELETE FROM `student_new` WHERE `student_new`.`id` = ?";
    $stmt = $conn->prepare($sql);
    $result = $stmt->execute(array($id));
    if ($result) {
        $count=$stmt->rowCount();
        if ($count<1) {
            $response['status']=204;
            $response['message'] = "Del Fale";
        }
        else{
            $response['status']=200;
            $response['message'] = "Del OK";
        }
    }
    else {
        $response['status'] = 400;
        $response['message'] = "SQL erro";
    }
} catch (PDOException $e) {
    $response['status'] = $e->getCode();
    $response['message'] = $e->getMessage();
}

echo json_encode($response);

?>
