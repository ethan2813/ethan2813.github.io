var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 6000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    //RWD(以上)
    breakpoints: {
        800: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 1,
        }
    }
});



// 漢堡條效果
$('.burger').on('click', (e) => {
    $(e.currentTarget).toggleClass('burger_active')
    $('.mobile_nav_list').toggleClass('nav_active')
})

// 點擊漢堡條 跳出選單
$('.burger').on('click', () => {
    $('.mobile_right').toggleClass('active')
})

$('.mobile_right ul li a').on('click',()=>{
    $('.mobile_right').removeClass('active');
    $('.burger').removeClass('burger_active');
})

// 點擊齒顎矯正
$('.ortho_btn').on('click',()=>{
    console.log(123)
    $('.mob_items').toggleClass('active');
    $('.btn_1').toggleClass('active');
    $('.btn_2').toggleClass('active');
})

new fullpage('#fullpage', {
    sectionsColor: [],
});

// 點空白地方關閉選單
$(document).on('mouseup',(e)=>{
    if($('.mobile_right').hasClass('active')){
        if(!$(e.target).closest('.mobile_right,.burger').length){
            $('.mobile_right').removeClass('active');
            $('.burger').removeClass('burger_active');

        }
    }
})

// gototop
$('.gototop').on('click',(e)=>{
    $('html,body').animate({scrollTop:0},300);
    // console.log(e.currentTarget)
})

// $(window).scroll((e)=>{
//     if($(e.target).scrollTop() > 400){
//         $('.gototop').fadeIn(200)
//     }else{
//         $('.gototop').stop().fadeout(200)
//     }
// })

$('.gototop').stop().fadeOut(0)
$(window).scroll(function () {
    
    if ($(this).scrollTop() > 400) {
        $('.gototop').fadeIn(200);
    } else {
        $('.gototop').stop().fadeOut(200)
    }
    // console.log($(this).scrollTop())
})



// let A = document.querySelector('#test #A_')
// let B = document.querySelector('#test #B_')
// let text = document.querySelector('#test ')



// function handler (e){
//     console.log(e.target)
//     console.log(e.currentTarget)
// }

// A.addEventListener('click',handler)

