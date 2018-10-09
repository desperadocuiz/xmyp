//登录
$(function(){
	$("#submitId").click(function(){
		if($("#phoneId").val()=="" && $("#passId").val()==""){
			$(".dis_box").css("display","block")
			$(".dis_box").find("span").html("请输入手机号")
			$(".pass_input_box").removeClass("pass_input_box_null")
			$(".phone_con").addClass("phone_con_null")
		}
		if($("#passId").val()==""&& $("#phoneId").val()!=""){
			$(".dis_box").css("display","block")
			$(".dis_box").find("span").html("请输入密码")
			$(".phone_con").removeClass("phone_con_null")
			$(".pass_input_box").addClass("pass_input_box_null")
		}
		if($("#phoneId").val()!="" && $("#passId").val()!=""){
			$(".dis_box").css("display","none")
			$(".phone_con").removeClass("phone_con_null")
			$(".pass_input_box").removeClass("pass_input_box_null")
//			后台数据
			$.post(
				"php/denglu.php",
				{
					"username":$('#phoneId').val(),
					"userpass":$('#passId').val()
				},
				function(emam){
					if(emam=="1"){
						$.cookie("username",$('#phoneId').val())
						location.href="index.html"
					}else if(emam=="0"){
						$(".dis_box").css("display","block")
						$(".dis_box").find("span").html("手机号或者密码错误")
					}
				}
			)
		}
	})
})
