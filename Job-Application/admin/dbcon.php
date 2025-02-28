<?php
    $host = 'localhost';
    $user = 'root';
    $password = '';
    $database = 'projects';
    $port = 3307;

    $con = mysqli_connect($host, $user, $password, $database, $port);

    if (!$con){
        ?>
            <script>alert("Connection Unsuccessful!!!");</script>
        <?php
    }
?>