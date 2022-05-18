<?php
$url = "http://localhost/Hw/Hw12_CalAvg/factor.php";

$a4 = $_POST['a4'];
$b4 = $_POST['b4'];

$ans4 = 0;
do{
    $r4 = $a4 % $b4;
    $a4 = $b4;
    $b4 = $r4;
} while($r4 != 0);
$ans4 = $a4;

$OK_factor = json_encode($ans4);
echo $OK_factor;
?>
