<?php
$url = "http://localhost/Hw/Hw12_CalAvg/avg1.php";

$a2 = $_POST['a2'];
$b2 = $_POST['b2'];
$c2 = $_POST['c2'];

$avg = floor(($a2 + $b2 + $c2) / 3);

$OK_avg1 = json_encode($avg);
echo $OK_avg1;

?>