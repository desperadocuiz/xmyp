
$(function(){
	let cook=$.cookie("username");
	if(cook){
		$(".m-no-login").find("a").remove(".dl");
		$(".m-no-login").find("a").remove(".zc");
		$(".m-no-login").addClass("m-login");
	}	
//search
$("#searchId").focus(function(){
	$('.m-search').css({
		"border-bottom": "1px solid #000"
	})
})
$("#searchId").blur(function(){
	$('.m-search').css({
		"border-bottom": "1px solid #e7e7e7"
	})
})
//nav_part分类
$(window).scroll(function(){
	if(document.body.scrollTop>=480||document.documentElement.scrollTop>=480){
		$(".nav").addClass("nav-fixed")
		$(".m-banner").addClass("m-banner-fixed")
		$(".m-banner-fixed").css({"opacity":"0","z-index":"-1"})
		$(".banner_con-left").css({"display":"none"})
		$(".nav_part").mouseenter(function(){
			$(".m-banner-fixed").css({"opacity":"1","z-index":"999"}
			)
			$(".banner_con-left").css({
				"display":"block",
				"opacity":"1"
			})
		})
		$(".m-banner-fixed").find(".banner_con-left").mouseleave(function(){
			$(".m-banner-fixed").find(".banner_con-left").css("opacity","0")
			$(".m-banner-fixed").css({"opacity":"0","z-index":"-1"})
	})
	}
	else{
		$(".nav").removeClass("nav-fixed")
		$(".m-banner").removeClass("m-banner-fixed")
		$(".banner_con-left").css("opacity","1")
		$(".banner_con-left").css("display","block")
		$(".m-banner").css({"z-index":"2","opacity":"1"})
	}
});
//banner轮播图
    var swiper1 = new Swiper('.banner-container', {
      slidesPerView: 1,
      spaceBetween:0,
      loop: true,
      pagination: {
        el: '.banner-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.banner-next',
        prevEl: '.banner-prev',
      },
      speed:800,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
    });
//轮播图左侧的划过效果
	$(".m-banner_con").on("mouseover",".banner_con-item",function(event){
		$(".banner_details").css({
				"display":"block",
				"opacity":"1"
		});
	})
	$(".banner_con-left").on("mouseleave",function(){
		$(".banner_details").css({
				"display":"none",
				"opacity":"0"
			});
	})
	let uls=$(".banner_con-item");
	let group=$(".banner_detail_group");
	for(let i=0;i<uls.length;i++){
		uls[i].onmouseover=function(){
			$(group).css({
					"display":"none"			
			});
			$(group[i]).css({
				"display":"block"
			})
		}
	}

//goods-three轮播图
var swiper2 = new Swiper('.hot-active', {
      slidesPerView:'auto',
      slidesPerGroup:1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.hot-page',
        clickable: true,
      },
      navigation: {
        nextEl: '.hot-next',
        prevEl: '.hot-prev',
      },
    });
//goods-four轮播图
var swiper3 = new Swiper('.four-container', {
      slidesPerView:'auto',
      slidesPerGroup:1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.hot-page',
        clickable: true,
      },
      navigation: {
        nextEl: '.four-next',
        prevEl: '.four-prev',
      },
    });
//fixed-bar
//置顶按钮
$('.topbtn').click(function(){
	var timer=setInterval(function(){
	if($(document).scrollTop()==0){
		clearInterval(timer);
		}else{
	$(document).scrollTop($(document).scrollTop()-30);
	}
	},10);
});
//goods-five
$(".five-left").eq(1).css({
	"background":"url(img/fiv_bg1.png) no-repeat"
})
$(".five-left").eq(2).css({
	"background":"url(img/fiv_bg2.png) no-repeat"
})
//fixed-bar
$(".fixed-nav li").mouseenter(function(){
		$(".fixed-pop").not($(this).find(".fixed-pop")).hide()
		$(this).find(".fixed-pop").show();
})

$(".fixed-nav li").mouseleave(function(){
		$(this).find(".fixed-pop").hide();
	})
})



