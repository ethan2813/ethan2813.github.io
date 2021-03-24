// 點漢堡跑出清單
$('.menu').on('click',(e)=>{
    $('.nav_list').addClass('active')
})
$('.nav_list .close').on('click',(e)=>{
    $('.nav_list').removeClass('active')
})

//電話隱藏效果
$(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
        $('.phone_number').fadeOut(200);
    } else {
        $('.phone_number').stop().fadeIn(200)
    }
})

//點空白地方關閉清單
$(document).on('mouseup',(e)=>{
    if($('.nav_list').hasClass('active')){
        if(!$(e.target).closest('.nav_list li a,.close').length){
            $('.nav_list').toggleClass('active');
        }
    }
})

//totop
$('#totop').on('click',()=>{
    $('html,body').animate({scrollTop:0},300);
})

//totop隱藏效果
$(window).scroll(function(){
    if($(this).scrollTop() > 400){
        $('#totop').fadeIn(200);
    }else{
        $('#totop').stop().fadeOut(200)
    }
}).scroll();



// parallax
$('.parallax-window').parallax({imageSrc: '../img/box_1_bg.jpg'});

