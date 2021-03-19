// 點漢堡跑出清單
$('.burger').on('click',(e)=>{
    $('.nav_list').addClass('active')
})
$('.nav_list .close').on('click',(e)=>{
    $('.nav_list').removeClass('active')
})

//電話隱藏效果
$(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
        $('.phone_number').fadeOut(200);
    } else {
        $('.phone_number').stop().fadeIn(200)
    }
})

//點空白地方關閉清單
$(document).on('mouseup',(e)=>{
    if($('.nav_list').hasClass('active')){
        if(!$(e.target).closest('.nav_list li a,.close').length){
            $('.nav_list').toggleClass('active');
        }
    }
})

//totop
$('#totop').on('click',()=>{
    $('html,body').animate({scrollTop:0},300);
})

//totop隱藏效果
$(window).scroll(function(){
    if($(this).scrollTop() > 400){
        console.log($(this).scrollTop())
        $('#totop').fadeIn(200);
    }else{
        $('#totop').stop().fadeOut(200)
    }
    
}).scroll();


// scroll 效果
$(document).ready(function(){
    
    window.addEventListener('scroll',function(){
        let this_scroll = this.scrollY; //下移量
        var topHeight = $(window).height(); //畫面總高度

        //關於本院標題
        let about_title = $('.about .title_')
        let about_title_scroll = about_title.offset().top - topHeight;  //關於本院標題下移量

        //關於本院內文
        let about_content = $('main#main .about .content_ .article .content')
        let about_content_scroll = about_content.offset().top - topHeight;//關於本院內文下移量

        let top = $(this).scrollTop() / 25; //位移倍率
        
        // 關於本院 標題
        if(this_scroll > about_title_scroll){
            about_title.css('transform',`translate(0% , -${top}px)`)
            about_title.css('opacity','1')
        }

        // 關於本院 文字
        if(this_scroll > about_content_scroll){
            about_content.css('transform',`translate(0% , -${top}px)`)
            about_content.css('opacity','1')
        }
    })
})

