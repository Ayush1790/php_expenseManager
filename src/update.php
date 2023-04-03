<?php
session_start();
//code for updation
$data=explode("=>",$_POST['key']);
$_SESSION['expences'][$_SESSION['update_id']]=$_POST['key'];
echo $data[0];

