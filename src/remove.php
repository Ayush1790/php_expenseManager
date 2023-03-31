<?php
session_start();
// code for remove
array_splice($_SESSION['expences'],$_POST['key'],1);
