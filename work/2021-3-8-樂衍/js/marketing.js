var swiper = new Swiper('.swiper-container', {
    observer: true,
    observeParents: true,
    slidesPerView: 8,
    spaceBetween: 15,
    loop: true,
    speed: 300,
    autoplay: {
        delay: 10000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
       
    },
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
    //RWD(以上)
    breakpoints:{
        1500:{
            slidesPerView: 7,
            spaceBetween: 50,
            
        },
        800:{
            slidesPerView: 5,
            spaceBetween: 30,

        },
        0:{
            slidesPerView: 3,
            spaceBetween: 15,

        }
    }
});