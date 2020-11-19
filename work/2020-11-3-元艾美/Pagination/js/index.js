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

     //點選空白地方關閉清單
     $(document).on('mouseup',(e) => {
        //判斷下拉選單是否有被打開
        if ($('.nav_list').hasClass('nav_active')) {
            // console.log('下拉選單被打開囉')
            //判斷是否點到是否點到下拉清單、漢堡條以外的範圍
            if (!$(e.target).closest(".nav_active,.burger").length) {
                // console.log('點到欄位以外的範圍囉')
                $('.nav_list').toggleClass('nav_active');
                $('.burger').toggleClass('burger_active');
            }
        }
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
    })

    // $('.nav_list_first').on('click',(e)=>{
    //     e.currentTarget.style.marginBottom = "100px";
      
        
    //     $(document).one('click',()=>{
    //         // $('.nav_list_first').style.marginBottom = "0px";
    //         console.log('132')
    //     });
        
    // })


    //totop
    $('#gototop').on('click',()=>{
        $('html,body').animate({scrollTop:0},300);
    })

    //totop隱藏效果
    $(window).scroll(function(){
        if($(this).scrollTop() > 400){
            $('#gototop').fadeIn(200);
        }else{
            $('#gototop').stop().fadeOut(200)
        }

        console.log($(this).scrollTop())
    })
})();