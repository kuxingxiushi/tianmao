<?php
  include('./conn.php');

  $sql = "select * from product";

  $res =  $conn->query($sql);

  $arr = [];

  while($row=$res->fetch_assoc()){
    array_push($arr,$row);
  }

  echo json_encode($arr);
  
  ?>