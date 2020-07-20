
//toTop
$('.toTop').click(function(){

    // $('html,body',parent.document).animate({scrollTop:0},300);
    $('html,body').animate({scrollTop:0},300);
});
$(window).scroll(function(){
    if($(this).scrollTop() > 500){
        $('.toTop').fadeIn(200);
    }else{
        $('.toTop').stop().fadeOut(200);
    }
})

$('.toTop').click(function(){
    $('html,body').animate({scroll:0},300);
})



//漢堡條
$('.burger').click(function(){
    // console.log("12313");
    $('.nav_links').toggleClass('nav_active');
    $('.burger').toggleClass('burger_active')
})



//當點擊選單後自動收回
$(function(){
    if($(window).width()<768){
        // $('.nav_links a').on('click',function(){  沒有動態事件綁定
        $('.nav_links').on('click','a',function(){
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

    // lastScrollTop = ($(window).scrollTop() <=0 ) ? 0 : $(this).scrollTop();
    // 存儲上一個滾動位置，然後查看新滾動位置是否大於或小於該滾動位置。
    lastScrollTop =  $(this).scrollTop();
})





