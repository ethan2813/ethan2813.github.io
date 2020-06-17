
//toTop
$('.toTop').click(function(){
    $('html,body').animate({scrollTop:0},300);
});
$(window).scroll(function(){
    if($(this).scrollTop() > 500){
        $('.toTop').fadeIn(200);
    }else{
        $('.toTop').stop().fadeOut(200);
    }
})


//漢堡條
$('.burger').click(()=>{
    // console.log("12313");
    $('.nav_links').toggleClass('nav_active');
    $('.burger').toggleClass('burger_active')
})

//nav隱藏
let lastScrollTop = 0;
$(window).scroll(function(){
    if($(this).scrollTop() > lastScrollTop){
        $('.nav').removeClass('fixed');
    }else{
        $('.nav').addClass('fixed');
    }
    lastScrollTop = ( $(this).scrollTop() <= 0 ) ? 0 : $(this).scrollTop();
})






