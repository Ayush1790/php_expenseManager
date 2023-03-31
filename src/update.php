<?php
session_start();
//code for updation
$_SESSION['expences'][$_SESSION['update_id']]=$_POST['key'];
