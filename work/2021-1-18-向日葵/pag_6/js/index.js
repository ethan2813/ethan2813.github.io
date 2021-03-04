// 點漢堡跑出清單
$('.burger').on('click',(e)=>{
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
    // console.log($(this).scrollTop())
})

