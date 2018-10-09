<?php
	header("Content-type:text/html;charset=utf-8");
	//1、接收数据
	$username = $_POST['username'];
	$userpass = $_POST['userpass'];
	//2、处理（连接数据库，插入）
	//1)、搭桥（建立连接）
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		die("数据库连接失败！");		
	}else{
		//2)、选择目的地（选择数据库）
		mysql_select_db("user",$conn);
		
		//3)、传输数据（执行SQL语句）
		$sqlstr="select * from phoneuser where name='$username' and pass='$userpass'";
		$table = mysql_query($sqlstr);
		mysql_close($conn);
		if(mysql_num_rows($table)==0){
			echo "0";
		}else{
			echo "1";
		}
	}
?>