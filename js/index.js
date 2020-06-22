
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

//當點擊選單後自動收回
$(function(){
    if($(window).width()<768){
        $('.nav_links a').on('click',function(){
            $('.burger').click();
        });
    }
});

//nav隱藏
let lastScrollTop = 0;
$(window).scroll(function(){
    if($(this).scrollTop() > lastScrollTop){
        $('#navagation').removeClass('fixed');
    }else{
        $('#navagation').addClass('fixed');
    }
    lastScrollTop = ( $(this).scrollTop() <= 0 ) ? 0 : $(this).scrollTop();
})









