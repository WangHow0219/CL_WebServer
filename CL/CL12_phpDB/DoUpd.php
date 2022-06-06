<?php
$u = "http://localhost/CL/CL12_phpDB/DoUpd.php";

$id = $_POST['id'];
$name = $_POST['name'];
$tel = $_POST['tel'];
$addr = $_POST['addr'];

$db_host = 'localhost';
$db_name = 'webserver_db';
$db_user = 'root';
$db_password = '';
$dsn = "mysql:host=$db_host; dbname=$db_name; charset=utf8";

try {
    $conn = new PDO($dsn, $db_user, $db_password);
    $sql = "UPDATE `student_new` SET `name`=?, `tel`=?, `addr`=? WHERE id=?";
    $stmt = $conn->prepare($sql);
    $result = $stmt->execute(array($name, $tel, $addr, $id));
    if ($result) {
        $count=$stmt->rowCount();
        if ($count<1) {
            $response['status']=204;
            $response['message'] = "Update Fale";
        }
        else{
            $response['status']=200;
            $response['message'] = "Update OK";
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
