
// close btn 關閉效果
$('.close_btn').on('click', (e) => {
    $('.lightbox_target').removeClass('display_block')
})




$('.item').on('click', (e) => {
    
    let index = $('.item').index(e.currentTarget) + 1
    console.log(index)
    $('.contents-box').removeClass('display_block');
    $('.contents-box:nth-of-type(' + index + ')').addClass('display_block')
})

// 點選x 關閉視窗
$('.close_btn').click((e) => {
    // $('.contents-box').css('height', 0)
    $('.contents-box').removeClass('display_block');
})

$('.contents_btn').on('click', (e) => {
    let index = $('.contents_btn').index(e.target) + 1

    $('.title_').removeClass('display_block')
    $('.contents_btn').removeClass('active')

    $('.title_:nth-of-type(' + index + ')').addClass('display_block');
    $('.contents_btn:nth-of-type(' + index + ')').addClass('active');

})

var mySwiper = new Swiper('.swiper1', {
    // observer: true,
    // observeParents: true,
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    speed: 2000,
    // autoplay: {
    //     delay: 3000,
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        
    },
});





