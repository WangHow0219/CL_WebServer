<?php
$url = "http://localhost/Hw/Hw12_CalAvg/cal1.php";

$a1 = $_POST['a1'];
$b1 = $_POST['b1'];
$op1 = $_POST['op1'];

switch ($op1) {
    case '+':
        $ans1 = $a1 + $b1;
        break;
    case '-':
        $ans1 = $a1 - $b1;
        break;
    case '*':
        $ans1 = $a1 * $b1;
        break;
    case '/':
        $ans1 = $a1 / $b1;
        break;
    default:
        # code...
        break;
}

$OK_cal1 = json_encode($ans1);
echo $OK_cal1;

?>
