<?php
session_start();
$_SESSION['expences'][$_SESSION['update_id']]=$_POST['key'];
print_r($_POST)
?>