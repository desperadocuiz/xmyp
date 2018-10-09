
window.onload=function(){
	//选择国家
	$("body").on("click",function(event){
		let evt = event || window.event
		let target=evt.target;
		//console.log(target.className)
		if(target.className.toLocaleLowerCase()=="phone_tit"){
			$(".country_container").show()
		}
		else{
			$(".country_container").hide()
		}
	});
	$(".phone_tit").click(function(event){
		event.stopPropagation();
		let target=event.target;		
		//console.log(target.className)
		$(".country_container").show()
	});
	//选择国家
	$(".list li").click(function(){
		$(".phone_tit").find("p").text($(this).find(".record_name").html())
	});

	//用户协议
	$(".icon_three").toggle(
		function () {
			$(this).addClass("icon_three_selected");
		},
		function () {
		    $(this).removeClass("icon_three_selected");
		}
	);
	//注册正则验证
	//1.手机号码验证
	$("#phoneId").blur(function(){
		let reg = /^1[3-9]\d{9}$/;
		if((this.value)==""){
			$(".dis_box").eq(0).css("display","block");
			$(".input_box").addClass("input_box_empty")
		}else if(reg.test(this.value)==false){
			$(".dis_box").eq(0).css("display","block")
			$(".dis_box").eq(0).find("span").html("手机号码格式错误")
			$(".input_box").addClass("input_box_empty")
		}else{
			//连接数据
			let zhuce=new XMLHttpRequest();
			zhuce.open("get","php/login.php?username="+this.value,true);
			zhuce.onreadystatechange=function(){
				if(zhuce.readyState==4 &&zhuce.status==200){
					if(zhuce.responseText=="0"){
						$(".dis_box").eq(0).css("display","none")
					}
					else{
						$(".dis_box").eq(0).css("display","block")
						$(".dis_box").eq(0).find("span").html("该手机号已经注册")
					}
				}
			}
			zhuce.send();
		}
	})
	
	$("#phoneId").keydown(function(){
			$(".dis_box").eq(0).css("display","none");
			$(".input_box").removeClass("input_box_empty")
	})

	//2.密码验证（密码为6-20字符，支持大小写）
	$("#passId").blur(function(){
		let reg = /\w{6,20}/;
		if((this.value)==""){
			$(".dis_box").eq(1).css("display","block");
			$(".pass_input_box").addClass("pass_input_box_empty")
		}
		else if(reg.test(this.value)==false){
			$(".dis_box").eq(1).css("display","block")
			$(".dis_box").eq(1).find("span").html("密码格式错误")
			$(".pass_input_box").addClass("pass_input_box_empty")
		}
	})
	$("#passId").keydown(function(){
			$(".dis_box").eq(1).css("display","none");
			$(".pass_input_box").removeClass("pass_input_box_empty")
	})
	
	//3.注册
	$("#submitId").click(function(){
		if(!$(".icon_three").hasClass("icon_three_selected")){
			$(".dis_box").eq(2).css("display","block");
		}
		else {
			$(".dis_box").eq(2).css("display","none");
			//连接数据
			let xhr=new XMLHttpRequest();
			xhr.open("post","php/loginByajax.php",true);
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4&&xhr.status==200){
					if(xhr.responseText=="0"){
						location.href="denglu.html"
					}
					else{
						alert("服务器出错")
					}
				}
			}
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			let sendStr = "username="+$("#phoneId").val()+"&passname="+$("#passId").val();
			xhr.send(sendStr);
		}
	})
}

	