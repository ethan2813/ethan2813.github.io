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
        450:{
            slidesPerView: 2,
        }
    }
});


(function(){
    // 漢堡條動畫 & nav_list滑出
    $('.burger').on('click',(e)=>{
        // console.log(e.currentTarget)
        $(e.currentTarget).toggleClass('burger_active')
        $('.nav_list').toggleClass('nav_active')

    })


    //nav 縮效果
    let nav = document.querySelector('#nav .menu')
    
    $(window).scroll(()=>{
        if($(this).scrollTop() > 10){
            console.log('123')
            nav.classList.add('move')
        }else{
            nav.classList.remove('move')
        }
    })

    $('.nav_list').on('click','a',()=>{
        $('.burger').click();
    })
})();