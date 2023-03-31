<?php
session_start();
//code for edit
$data=$_POST['key'];
$_SESSION['update_id']=$data;// storing into session for updation
echo $_SESSION['expences'][$data];

?>