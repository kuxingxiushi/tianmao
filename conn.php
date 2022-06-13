<?php
  header('content-type:application/json;charset=utf-8');

  $mysql_conf = array(
    'host'=>'localhost:3306',  // 主机名和端口号
    'db_user'=>'root',
    'db_pass'=>'root',
    'db'=>'tm'
  );

  // 连接数据库
  $conn = @new mysqli($mysql_conf['host'],$mysql_conf['db_user'],$mysql_conf['db_pass']);

  // var_dump($conn);

  if($conn->connect_error){ // 判断连接是否有错误
    // die();  结束进程 终止代码向下执行
    die('连接错误'.$conn->connect_errno);
  }

  // 设置查询字符集
  $conn->query('set names utf8');

  // 选择数据库
  $selected =  $conn->select_db($mysql_conf['db']);

   if(!$selected){ // 判断是否有选择数据库错误
    die('数据库选择错误'.$conn->error);
   }


?>