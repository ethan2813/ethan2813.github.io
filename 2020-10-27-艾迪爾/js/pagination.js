(function () {
    
    //banner LOGO 滑動效果
    let logo_float = document.querySelector('#pagi_main .banner_logo')

    $(window).scroll(e => {
        let top = $(this).scrollTop() / 3.5
        // console.log($(this).scrollTop())
        logo_float.style.transform = `translate(-50%,-${top}px)`
    })
    
    
    


    //nav 縮效果
    let lastCcrllTop = 0;
    let nav = document.querySelector('#nav')
    
    $(window).scroll(()=>{
        if($(this).scrollTop() > 10){
            // console.log('123')
            nav.classList.add('move')
        }else{
            nav.classList.remove('move')
        }
    })

    
    
    $(window).scroll(()=>{
        let top =   15 - ($(this).scrollTop() / 15)
        top = top > 0 ? top : top = 0
        
        console.log(top)
        // console.log(top)
        $('#pagi_banner .banner_R').css({
            'filter':`blur(${top}px)`
        })
        
    })


    //漢堡條效果
    $('.burger').on('click',(e)=>{
        // console.log(e.currentTarget)
        $(e.currentTarget).toggleClass('burger_active')
        $('.nav_links').toggleClass('nav_active')
    })


    //點集links按鈕會隱藏links
    $('.nav_links').on('click','a',()=>{
        // console.log('123')
        $('.burger').click();
    })


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

        // console.log($(this).scrollTop())
    })



})()