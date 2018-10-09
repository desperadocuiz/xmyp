$(function(){
	$(".nums_add").click(function(){
		let count=parseInt($(".nums_txt").html());
		count++;
		if(count>1){
			$(".nums_reduce").css("background-position", "0 -1356px")
		}
		if(count>10){
			return;
		}
		
		$(".nums_txt").html(count);
	});
	$(".nums_reduce").click(function(){
		let count=parseInt($(".nums_txt").html());
		count--;
		if(count<1){
			return;
		}
		if(count==1){
			$(".nums_reduce").css("background-position", "0 -1390px")
		}
		$(".nums_txt").html(count);
	});
	$(".bbx").hover(
		function(){
			$(this).addClass("bbx_hover")
		},
		function(){
			$(this).removeClass("bbx_hover")
		}
	);
	$(".thum_pic").click(function(){
		$(".thum_pic").css("border-color","#f4f4f4")
		$(this).css("border-color","black")
		$(".main_info").find("img").attr("src",$(this).find("img").attr("src"))
	});
	$(".txt_li").eq(2).click(function(){
		$(".detatil_img").css("display","none")
		$(".detatil_img_cs").css("display","block")
	})
	$(".txt_li").eq(0).click(function(){
		$(".detatil_img_cs").css("display","none")
		$(".detatil_img").css("display","block")
	});
	$(".addshop_box").click(function(){
		$.get(
				"php/addShoppingCart.php",
				{
					"vipName":$('.sku_tit').find("p").html(),
					"goodsId":$('.sku_tit').find("p").data("id"),
					"goodsCount":$(".nums_txt").html()
				},
				function(emam){
					if(emam=="1"){
						alert("添加成功")
						$.cookie("vipid",$('.sku_tit').find("p").data("id"))
					}else if(emam=="0"){
						alert("添加失败")
					}
				}
		)
	});
})


