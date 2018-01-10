<?php
$connection = mysql_connect("localhost"); // Establishing Connection with Server..
if(!$connection)
	die("Error connecting Database!");
$db = mysql_select_db("donor", $connection); // Selecting Database
if(!$db)
	die("Error Connecting Database");
//Fetching Values from URL
$name=sanitize($_POST['name']);
$mail=sanitize($_POST['email']);
$no=sanitize($_POST['number']);
$location=sanitize($_POST['location']);
$group=sanitize($_POST['group']);
//Insert query
//echo $name." ".$mail." ".$no." ".$location." ".$group;
$query = sprintf("INSERT INTO tabledonor (Name,Email,Contact,Location,BloodGroup) VALUES ('%s','%s','%s','%s','%s')",$name,$mail,$no,$location,$group);
$query_result = mysql_query($query);
if($query_result)
	echo " Donor Information Submitted Succesfully \n Thanks for Signing up \n You can always change your details by logging in from homepage using your credentials submitted";
else
	echo "Error Submitting Informations".mysql_error();
mysql_close($connection); // Connection Closed

function sanitize($string) {
    return stripslashes(htmlentities(mysql_real_escape_string($string)));
}
?>