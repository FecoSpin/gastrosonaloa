<?php
if(isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['email']) && isset($_POST['message'])){
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $from = $_POST['email'];
    $message = '<html><body>';
    $message .= '<h1 style="color: #f40;">Hola ' . $name . '</h1>';
    $message .= '<p style="color: #080;font-size:18px;">' . $_POST['message'] . '</p>';
    $message .= '<p>Telefono: ' . $phone . '</p>';
    $message .= '</body></html>';
    $to = "gastro.sinaloa@gmail.com";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'From:' . $from . "\r\n";
    if(mail($to,$message,$headers)){
        echo "success";
    }else{
        echo "error";
    }
    }
    ?>