<?php
header("Content-type:text/html;charset=utf-8");
//1、接收数据
$username=$_POST["username"];
$passname=$_POST["passname"];
//2、处理（连接数据库）
//1)搭桥（建立连接）
$con=mysql_connect("localhost","root","root");
if(!$con){
	die("数据库连接失败！");
}else{
//2)选择目的地（选择数据库）
	mysql_select_db("user",$con);
}
//3)传输数据（执行SQL语句）
//先查询看看数据库中有没有相同的用户名
$sqlStr="select * from phoneuser where name='$username'";
$table = mysql_query($sqlStr,$con);
$rows = mysql_num_rows($table);
	if($rows==0){
		//如果没有同名就插入；
		$sqlStr = "insert into phoneuser(name,pass) values('$username','$passname')";
		$result = mysql_query($sqlStr,$con);
		//关闭数据库（拆桥）;
		mysql_close($con);
		//响应
		if($result){
			echo "0";
		}
		else{
			echo "1";
		}
	}
	else{
		echo "用户名已经存在！";
	}
?>