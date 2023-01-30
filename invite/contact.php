<?php

// Blank message to start with so we can append to it.
$message = '';

// Check that name & email aren't empty.
if(empty($_POST['name']) ){
    die('Please make sure name and email are provided.');
}



// Construct the message
$message .= <<<TEXT
    Name: {$_POST['name']}
    Coming: {$_POST['bacon']}
    Dinner: {$_POST['dinner']}
    Message: {$_POST['message']}
    
    Guest1 Name: {$_POST['person2']}
    Guest1 Dinner: {$_POST['dinner2']}
    
    Guest2 Name: {$_POST['person3']}
    Guest2 Dinner: {$_POST['dinner3']}
    
    Guest3 Name: {$_POST['person4']}
    Guest3 Dinner: {$_POST['dinner4']}
     
    
TEXT;

// Email to send to
$to = 'kingkelly@gmail.com';

// Email Subject
$subject = 'Somebody has RSVP!';

// Name to show email from
$from = 'RSVP';

// Domain to show the email from
$fromEmail = 'rsvp';

// Construct a header to send who the email is from
$header = 'From: ' . $from . '<' . $fromEmail . '>';

// Try sending the email
if(!mail($to, $subject, $message, $header)){
    die('Error in RSVP :( Please Refresh.');
}else{
    die('');
}
