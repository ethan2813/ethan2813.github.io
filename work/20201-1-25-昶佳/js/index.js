//漢堡條效果
$('.burger').on('click',(e)=>{
    $(e.currentTarget).toggleClass('burger_active')
    $('.mobile_nav_list').toggleClass('nav_active')
})

//點mobile_nav_list會隱藏list
$('.mobile_nav_list').on('click','a',()=>{
    $('.burger').click();
})

//點空白地方關閉清單
$(document).on('mouseup',(e)=>{
    if($('.mobile_nav_list').hasClass('nav_active')){
        if(!$(e.target).closest('.nav_active,.burger').length){
            $('.mobile_nav_list').toggleClass('nav_active');
            $('.burger').toggleClass('burger_active')
        }
    }
})

//nav 縮放
let nav = document.querySelector('#nav')
let logo_photo = document.querySelector('.logo_photo')
$(window).scroll(() => {
    if($(this).scrollTop() > 10){
        $('#nav').addClass('move')
    }else{
        $('#nav').removeClass('move')
    }
})