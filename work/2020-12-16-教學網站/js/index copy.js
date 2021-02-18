// $('.parallax-window').parallax({
//     imageSrc:'../img/77745503_l.jpg'
// })

// $('.parallax-window_2').pararllax({
//     naturalWidth:10
// })

//點選區塊 跑出light box
$('.item img').on('click', (e) => {
    let index = $('.item img').index(e.target) + 1
    $('.lightbox_target').removeClass('display_block')
    $('.lightbox_target:nth-child(' + index + ')').addClass('display_block');
})

// close btn 關閉效果
$('.close_btn').on('click', (e) => {
    $('.lightbox_target').removeClass('display_block')
})
//區塊的hover效果
$('.item img').hover((e) => {
    // 選到哪一個區塊
    let index = $('.item img').index(e.currentTarget)
    //banner圖的陣列
    let photo = ['../img/1.jpg', '../img/2.jpg', '../img/3.jpg']
    let h2_ = ['我是標題1', '我是標題2', '我是標題3']
    let h3_ = ['我是副標題1', '我是副標題2', '我是副標題3']
    let p_ = ['我是內容1', '我是內容2', '我是內容3']
    //banner圖案依據滑鼠移到哪個區塊就更變該圖案
    // $('.banner').css('background-image', `url(${photo[index]})`)
    $('.h2_').html(`${h2_[index]}`)
    $('.h3_').html(`${h3_[index]}`)
    $('.p_').html(`${p_[index]}`)
})



// 寫入各 .content-box 的高，然後高度設成 0
// js寫法
// const contents = document.querySelectorAll('.contents-box');
// console.log(contents)
// Array.prototype.forEach.call(contents, c => {
//     c.dataset.height = c.offsetHeight;
//     c.setAttribute('style', 'height: 0');
// });


// jquery 寫法
// $(document).ready(function () {
//     $('.contents-box').each(function () {
//         $(this).data('height', $(this).height())

//     })
//     $('.contents-box').css('height', '0')
// })



// $('.item').click(function () {
//     let index = $('.item').index(this) + 1
//     // $('.contents-box').removeClass('height_0');

//     // 所有.contents-box 移除 active 這個class
//     $('.contents-box').removeClass('active')

//     //點選到哪一個index 就移除.contents-box的該index
//     $('.contents-box:nth-of-type(' + index + ')').addClass('active')

//     //算出.contents-box該index的高度

//     // js寫法
//     // let height_ =  $('.contents-box:nth-of-type(' + index + ')').attr('data-height');

//     // jquery 寫法
//     $('.contents-box').css('height', '0')
//     let height_ = $('.contents-box:nth-of-type(' + index + ')').data('height');

//     console.log(height_)

//     //如果該.contents-box 有active 就增加高度，沒有高度就為0
//     if ($('.contents-box:nth-of-type(' + index + '):contains("active")')) {
//         // 先把所有的.contents-box 高度都設為0
//         $('.contents-box').css('height', '0')
//         //點選哪一個.contents-box 設為預設高度
//         $('.contents-box:nth-of-type(' + index + ')').css('height', height_)
//     } else {

//     }
// })



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





