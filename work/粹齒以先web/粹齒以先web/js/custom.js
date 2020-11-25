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

	$(document).on('click','a',function(evt){
		var w=$(window).width();
		var target= $(this).attr("href");
		if(w >= 961){
			$('html,body').animate({
		    	scrollTop: $(target).offset().top
			},800);
		}
	});

	$(function () {  
     	$('.touch').click(function (event) {  
         	event.stopPropagation();  
		 	$(this).find('.lightbox-phone').toggle('slow')
		 	.parent().siblings().find('.lightbox-phone').hide();
     	});  
	 	$(document).click(function(event){
		  	var _con = $('.place');
		  	if(!_con.is(event.target) && _con.has(event.target).length === 0){
				$('.lightbox-phone').hide();
		  	}
		});
 	})
 	// wow
	if(screen.width > 600){
		new WOW().init();
	}
});
