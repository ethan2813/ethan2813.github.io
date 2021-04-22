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

	// $(".dropdown-toggle").click(function(){
	// 	$(".dropdown-menu").slideToggle("300");
	// 	$(".dropdown-menu").css("display","block");
	// });

	// $(".dropdown-toggle").hover(function(){
	// 	$(".dropdown-menu").slideToggle("300");
	// 	$(".dropdown-menu").css("opacity","1");
	// 	$(".dropdown-menu").css("visibility","visible");
	// });

	//owl-carousel plugin initialization
	$('.banner').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    navText:[],
	    dots: true,
	    autoplay:true,
	    // animateIn: 'fadeOut',
	    animateOut: 'fadeOut',
	    smartSpeed:2500,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:1
	        },
	        768:{
	            items:1
	        },
	        1600:{
	            items:1
	        }
	    }
	})
	$('.small-img').owlCarousel({
	    loop:true,
	    margin:6,
	    nav:true,
	    navText:[],
	    dots: true,
	    autoplay:true,
	    // animateIn: 'fadeOut',
	    // animateOut: 'fadeOut',
	    smartSpeed:2500,
	    responsive:{
	        0:{
	            items:2
	        },
	        480:{
	            items:3
	        },
	        768:{
	            items:4
	        },
	        1600:{
	            items:4
	        }
	    }
	})
	$('.place-inner').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    navText:[],
	    dots: false,
	    autoplay:true,
	    // animateIn: 'fadeOut',
	    animateOut: 'fadeOut',
	    smartSpeed:2500,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:1
	        },
	        768:{
	            items:3
	        },
	        1600:{
	            items:3
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


$(function(){
	// 用來顯示大圖片用
	var $showImage = $('#show-image');
 
	// 當滑鼠移到 .small-img 中的某一個超連結時
	$('.small-img a').click(function(){
		var $this = $(this), 
			_src = $this.attr('href');
		// 如果現在大圖跟目前要顯示的圖不是同一張時
		if($showImage.attr('src') != _src){
			$showImage.hide().attr('src', _src).stop(false, true).fadeTo(400, 1);
		}
	}).click(function(){
		// 如果超連結被點擊時, 取消連結動作
		return false;
	});
});