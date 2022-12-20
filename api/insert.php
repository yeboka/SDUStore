<?php
    $host = 'localhost';
    $user = 'root';
    $password = '';
    $dbname = 'sdustore';

    $conn = new mysqli($host, $user, $password, $dbname);

    if ($conn -> connect_error) {
        die('Connect failed: ' . $conn -> connect_error);
    }

    $id = 1;
    $type = 'hoodie';
    $design = 'classic';
    $color = 'black';
    $href = 'assets/closes/sweatshot/sweatshot-blue-minilogo.jpg';
    $cost = 19900;


    $query = "INSERT INTO `products` (`id`, `type`, `design`, `color`, `href`, `cost`) VALUES ($id, `$type`, `$design`, $color, $href, $cost)";
    if ($conn->query($query) === TRUE) {
        echo 'inserted';
    } else {
        echo 'fail';
    }

    $conn -> close();
?>