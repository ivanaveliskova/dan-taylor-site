<?php

$EmailFrom = "Dan and Taylor Dance";
$EmailTo = "Dan.Dancesport@gmail.com";
$Subject = Trim(stripslashes($_POST['Subject']));
$Name = Trim(stripslashes($_POST['Name']));
$Email = Trim(stripslashes($_POST['Email'])); 
$Message = Trim(stripslashes($_POST['Message'])); 

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Subject: ";
$Body .= $Subject;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

if ($_POST['submit']) {
    $referer = $_SERVER['HTTP_REFERER'];

    if ($success) { 
        header("Location: $referer");
        exit;
    } else { 
        echo '<h1>ERROR!</h1><p>Something went wrong, go back and try again!</p>'; 
    }
}
?>
