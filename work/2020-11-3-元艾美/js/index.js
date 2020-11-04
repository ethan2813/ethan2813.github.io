var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    //RWD(以上)
    breakpoints:{
        800:{
            slidesPerView: 3,
        },
        350:{
            slidesPerView: 2,
        }
    }
});