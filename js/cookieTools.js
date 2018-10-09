
//保存cookie(添加cookie)
//参数：
	//键
	//值
	//有效期：单位是天；
//返回值：无
function addCookie(key,value,dayCount){
	var d = new Date();
	d.setDate(d.getDate()+dayCount);
	document.cookie = key+"="+escape(value)+";expires="+d.toGMTString();
}

function addCookieByMinutes(key,value,count){
	var d = new Date();
	d.setMinutes(d.getMinutes()+count);
	document.cookie = key+"="+escape(value)+";expires="+d.toGMTString();
}

//获取cookie
//参数：
//键
//返回值：值

function getCookie(key){
	var str = unescape(document.cookie);
	
	//1、分割成数组
	var arr=str.split("; ");
	
	//2、循环数组，查找键，并得到对应的值
	for(var i in arr){
		if(arr[i].indexOf(key+"=")==0){
			return arr[i].substring((key+"=").length);
		}
	}
	return null;
}


//删除cookie
//参数：键
//返回值：无
function removeCookie(key){
	/*
	var d = new Date();
	d.setDate(d.getDate()-1);
	document.cookie = key+"=bye;expires="+d.toGMTString();
	*/
	addCookie(key,"bye",-1);
}
