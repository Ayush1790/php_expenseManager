<?php
session_start();
// code for calculating income
if (isset($_SESSION['totalinc'])) {
    $_SESSION['totalinc'] = 0;
    foreach ($_SESSION['expences'] as $key => $value) {
        $token = explode("=>", $value);
        if ($token[0] == "income") {
            $_SESSION['totalinc'] += $token[1];
        }
    }
    echo $_SESSION['totalinc'];
}
