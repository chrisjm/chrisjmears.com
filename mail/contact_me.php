<?php
// Check for empty fields
if ( empty($_POST['name'])  	||
     empty($_POST['email']) 	||
     empty($_POST['message'])	||
     !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL) ) {
  echo "No arguments Provided!";
  return false;
}

// Set variables
$email_address = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);

if ($email_address === FALSE) {
  echo 'Invalid email';
  exit(1);
}

$name = $_POST['name'];
$message = $_POST['message'];

// Create the email and send the message
$to = 'chris.mears@gmail.com';
$email_subject = "Website Contact Form: $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Name: $name\n\nEmail: $email_address\n\nMessage:\n$message";
$headers = "From: noreply@chrisjmears.com\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>
