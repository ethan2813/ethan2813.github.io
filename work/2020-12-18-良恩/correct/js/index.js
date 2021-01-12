
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

// 手機板點選漢堡條跳出又邊選單
$('.all_right').on('click',(e)=>{
    $('.line_right').toggleClass('active');
    $('.fb_right').toggleClass('active');
    $('.phone_right').toggleClass('active');
    $('.all_right').toggleClass('active');
    $('#totop').toggleClass('active')
})

// 手機板右邊漢堡條點選空白地方收起來
$(document).on('mouseup',(e)=>{
    if($('.all_right').hasClass('active')){
        if(!$(e.target).closest('#totop,.line_right,.phone_right,.fb_right').length){
             $('.all_right').toggleClass('active')
             $('.fb_right').toggleClass('active')
             $('.line_right').toggleClass('active')
             $('.phone_right').toggleClass('active')
             $('#totop').toggleClass('active')
        }
    };

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

//totop
$('#totop').on('click', () => {
    $('html,body').animate({ scrollTop: 0 }, 300);
})


//totop隱藏效果
$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('#totop').fadeIn(200);
    } else {
        $('#totop').stop().fadeOut(200)
    }
    // console.log($(this).scrollTop())
})




$(window).scroll(e => {
    let top = $(this).scrollTop() / 10
    // console.log($(this).scrollTop())
    // logo_float.style.transform = `translate(-50%,-${top}px)`

    $('#orth').css({
        '-webkit-background-position' : `right 50% top -${200 - top}px`,
        '-moz-background-position'    : `right 50% top -${200 - top}px`,
        '-ms-background-position'     : `right 50% top -${200 - top}px`,
        '-o-background-position'      : `right 50% top -${200 - top}px`,
        'background-position'         : `right 50% top -${200 - top}px`
      });
    // $('.about_us_right')
})

$('.line a , .line_right a').click(()=>{
    alert('敬請期待囉')
})


