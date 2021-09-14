$(document).ready(function() {
	//導覽列滾動
	$(window).on("scroll",function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 80){
			$header.addClass("header--scrolling");
			
		}
		else{
			$header.removeClass("header--scrolling");
		}
	})
	$(".dropdown-toggle").hover(function(){
		// $(".dropdown-menu").slideToggle("300");
		$(".dropdown-menu").css("display","block");
	});

	$('.webicon-inner').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    navText:[],
	    dots: false,
	    autoplay:true,
	    smartSpeed:400,
	    responsive:{
	        0:{
	            items:4
	        },
	        768:{
	            items:6
	        },
	        1600:{
	            items:8
	        }
	    }
	})

	$('.line-inner').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    navText:[],
	    dots:true,
	    autoplay:true,
	    smartSpeed:1000,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:1
	        },
	        768:{
	            items:1
	        }
	    }
	})
});



//類似fullpage效果
$(document).on('click','a',function(evt){
	var w=$(window).width();
	var target= $(this).attr("href");
	if(w >= 961){
		$('html,body').animate({
	    	scrollTop: $(target).offset().top
		},800);
	}
});

//比較圖
$(window).load(function() {
    $('#before_after_images').twentytwenty();
});







