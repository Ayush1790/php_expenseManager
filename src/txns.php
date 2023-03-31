<?php
session_start();
error_reporting(0);
$str="";
$index=0;
if(isset($_SESSION['expences'])){
    $_SESSION['Grocery']=0;
    $_SESSION['Veggies']=0;
    $_SESSION['Travelling']=0;
    $_SESSION['Miscellaneous']=0;
    foreach ($_SESSION['expences'] as $key => $value) {
       // echo "$value";
        $str.="<li> $value<button onclick=editData(this) id=$index>Edit</button><button onclick=deleteData(this) id=$index>Delete</button></li><hr>";
   $index++;
    }
    echo $str;
}
?>