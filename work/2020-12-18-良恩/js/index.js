
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
            $('.burger').toggeClass('burger_active')
        }
    }
})

//nav 縮放
let nav = document.querySelector('#nav')
let logo_photo = document.querySelector('.logo_photo')
$(window).scroll(() => {
    if($(this).scrollTop() > 10){
        $('#nav').addClass('move')
        $('.logo_photo').addClass('logo_photo_active')
        $('.nav_list_left li').addClass('nav_list_left_active')
        $('.nav_list_right li').addClass('nav_list_right_active')
    }else{
        $('#nav').removeClass('move')
        $('.logo_photo').removeClass('logo_photo_active')
        $('.nav_list_left li').removeClass('nav_list_left_active')
        $('.nav_list_right li').removeClass('nav_list_right_active')

    }
})


