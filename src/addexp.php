<?php
session_start();
// setting the values of session
if(!isset($_SESSION['expences'])){
    $_SESSION['expences']=array();
    $_SESSION['totalinc']=0;
    $_SESSION['totalexp']=0;
    $_SESSION['Grocery']=0;
    $_SESSION['Veggies']=0;
    $_SESSION['Travelling']=0;
    $_SESSION['Miscellaneous']=0;

}
$data=$_POST['key'];
$token=explode("/",$data);
// code for adding expences
array_push($_SESSION['expences'],$token[1]."=>".$token[0]);
if($token[1]=="income"){
    $_SESSION['totalinc']+=$token[0];
}else{
    $_SESSION['totalexp']+=$token[0];
}
