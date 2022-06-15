<?php
$u = "http://localhost/CL/CL12_phpDB/DoSek.php";
$db_host = 'localhost';
$db_name = 'webserver_db';
$db_user = 'root';
$db_password = '';
$dsn = "mysql:host=$db_host;dbname=$db_name;charset=utf8";
try {
    $conn = new PDO($dsn, $db_user, $db_password);
    if (isset($_POST['id'])) {
        $sql="SELECT * FROM `student_new` WHERE `id`=?";
        $id = $_POST['id'];
        $stmt = $conn->prepare($sql);
        $result = $stmt->execute(array($id));
    } else {
        $sql = "SELECT * FROM `student_new`";
        $stmt = $conn->prepare($sql);
        $result = $stmt->execute();
    }    
    
    if ($result) {
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $response['status'] = 200;
        $response['message'] = "OK";
        $response['result'] = $rows;
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
