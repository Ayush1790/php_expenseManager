<?php
session_start();
// code to calculate expences
if (isset($_SESSION['totalexp'])) {
    $_SESSION['totalexp'] = 0;
    foreach ($_SESSION['expences'] as $key => $value) {
        $token = explode("=>", $value);
        if ($token[0] != "income") {
            $_SESSION['totalexp'] += $token[1];
            $_SESSION[$token[0]] += $token[1];
        }
    }
    echo $_SESSION['totalexp'] . "/" . $_SESSION['Grocery'] . "/" . $_SESSION['Veggies'] . "/" . $_SESSION['Travelling'] . "/" . $_SESSION['Miscellaneous'];
}
