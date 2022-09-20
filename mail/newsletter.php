<?php
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
$email_address = $_POST['email'];
$to = 'contacto@castilloinmb.com'; 
$email_subject = "Formulario de contacto web:  $name";
$email_body = "Recibiste una subscripcion al sistema de newsletter.\n\n"."Estos son los detalles:\n\nEmail: $email_address";
$headers = "From: noreply@castilloinmb.com\n";
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>