<?php
$url = "http://localhost/Hw/Hw12_CalAvg/adder.php";

$a3 = $_POST['a3'];
$b3 = $_POST['b3'];

$ans3 = 0;
for ($n=$a3; $n<=$b3; $n++) {
    $ans3 = $ans3 + $n;
};

$OK_adder = json_encode($ans3);
echo $OK_adder;
?>
