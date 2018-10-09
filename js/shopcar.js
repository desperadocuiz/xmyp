//全选按钮(数据来自数据库)
$(function(){
	if($.cookie){
		$(".no_good_container").hide();
		$(".has_good_container").show();	
		$.post(
			"php/getShoppingCart.php",
			{
				"goodsId":$.cookie("vipid")
			},
			function(emam){
				let msg=JSON.parse(emam);
				console.log(msg);
				$(".name_tex").html(msg[0].goodsName);
				$(".num_price").html(msg[0].goodsPrice);
				$(".num_sum").html(msg[0].goodsPrice);
				$(".num_txt").html(msg[0].goodsCount);
				$(".list_name").html(msg[0].goodsType);
				$(".goods_img").find("img").attr("src",msg[0].goodsImg);
				let prc=parseInt(msg[0].goodsPrice);
				let cot=parseInt(msg[0].goodsCount);
				$(".num_sum").html(prc*cot)
			}
		)
	}
	else if($.cookie==false){
		$(".no_good_container").show();
		$(".has_good_container").hide();
	}
	$(".select_all").toggle(
		function(){
			$(".select_icons").addClass("icons_select");
		},
		function(){
			$(".select_icons").removeClass("icons_select");
		}
	);
	$(".select_one").toggle(
		function(){
			$(this).addClass("icons_select");
			$(".select_icons").addClass("icons_select");
		},
		function(){
			$(this).removeClass("icons_select");
			$(".select_icons").removeClass("icons_select");
		}
	);
	$(".f1_icon").toggle(
		function(){
			$(".select_icons").addClass("icons_select");
		},
		function(){
			$(".select_icons").removeClass("icons_select");
		}
	);
	$(".del_icon").click(function(){
		$(".has_good_container").css("display","none");
		$(".no_good_container").css("display","block")
	});
//	数据改变
	$("#addbtn").click(function(){
		let count =parseInt( $(".num_txt").html())
		count++;
		if(count>1){	
			$(".reduce_icon").addClass("reduce_icon_oth")
		}
		$(".num_txt").html(count);
		let price = parseInt($(".num_price").html());
		$(".num_sum").html(price*count);
		$(".totals").html($(".num_sum").html())
	});
	$(".reduce_icon").click(function(){
		let count =parseInt( $(".num_txt").html())
		count--;
		if(count<1){
			$(".reduce_icon").removeClass("reduce_icon_oth")
			return;
		}
		$(".num_txt").html(count);
		let price = parseInt($(".num_price").html());
		$(".num_sum").html(price*count);
		$(".totals").html($(".num_sum").html())
	});
	$(".select_all").click(function(){
		if($(".select_all").hasClass("icons_select")){
			$(".totals").html($(".num_sum").html())
		}
		else{
			$(".totals").html(0)
		}
	});
	$(".goods_del").click(function(){
		
		$.get(
			"php/deleteGoods.php",
			{
				"vipName":$('.name_tex').html(),
				"goodsId":$.cookie("vipid")
			},
			function(emam){
				if(emam=="1"){
						alert("删除成功")
					}else if(emam=="0"){
						alert("删除失败")
				}
			}
		)
		
	})
})

