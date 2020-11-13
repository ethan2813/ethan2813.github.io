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

    //選單隱藏
    $('.nav_list').on('click','li:not(.nav_list_first)',(e)=>{
        $('.burger').click();
        
        console.log('123')
        
        
    })

    // $('.nav_list_first').on('click',(e)=>{
    //     e.currentTarget.style.marginBottom = "100px";
      
        
    //     $(document).one('click',()=>{
    //         // $('.nav_list_first').style.marginBottom = "0px";
    //         console.log('132')
    //     });
        
    // })
})();