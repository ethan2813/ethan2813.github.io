
// swiper 相關設定
var swiper = new Swiper('.swiper1', {
    speed: 2000,
    loop: true,
    // autoplay: {
    //     delay: 5000,
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var swiper = new Swiper('.swiper2', {
    speed: 2000,
    loop: true,
    // autoplay: {
    //     delay: 5000,
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


;(function(){
    $('.burger').on('click',function(){
        $('.nav_links').toggleClass('active')
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > 80){
            
        }
        
    })
})()

