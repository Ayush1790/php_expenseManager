<?php
session_start();
array_splice($_SESSION['expences'],$_POST['key'],1);

?>