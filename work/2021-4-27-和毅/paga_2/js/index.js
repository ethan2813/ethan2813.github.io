// 電腦版選單
$('.items_active').on('click',(e)=>{
    $('.items_2_box').toggleClass('active')
})

// 點擊漢堡條 跳出選單
$('.burger').on('click',()=>{
    $('.mobile_nav_list').toggleClass('active')
})

// 漢堡條效果
$('.burger').on('click', (e) => {
    $(e.currentTarget).toggleClass('burger_active')
    $('.mobile_nav_list').toggleClass('nav_active')
})

// 點擊預約 跳出選單
$('.online_btn').on('click',()=>{
    $('.online_btn').toggleClass('active')
    console.log('132')
})

// $('.item_2').on('click',(e)=>{
//     let index = $('.item_2').index(this) + 1 
//     console.log(index)
// })



$('.item_2').mouseover(function(e){
    let index_content = $('.item_2').index(this) + 1
    console.log(index)
})


// console.log($('.item_2'))
$('.item_map').mouseover((e)=>{
    let index = $('.item_map').index(e.currentTarget) + 1
    console.log(index)
    // console.log( $('.item_2:nth-of-type(' + index + ')'))
    // $('.item_2:nth-of-type(' + index + ')').css('opacity','1')
    
})

//點空白地方關閉清單
// $(document).on('mouseup',(e)=>{
//     if($('.nav_list').hasClass('active')){
//         if(!$(e.target).closest('.nav_list li a,.close').length){
//             $('.nav_list').toggleClass('active');
//         }
//     }
// })

//totop
// $('#totop').on('click',()=>{
//     $('html,body').animate({scrollTop:0},300);
// })

//totop隱藏效果

// $(window).scroll(function(){
//     if($(this).scrollTop() > 400){
//         // console.log($(this).scrollTop())
//         $('#totop').fadeIn(200);
//     }else{
//         $('#totop').stop().fadeOut(200)
//     }
// }).scroll();


// document.addEventListener('DOMContentLoaded',()=>{
//     window.addEventListener('resize',function(){
//         if(window.innerWidth < 768){
//             console.log('333 ')
//         }
//     })
// })


// scroll 效果
// (function(){
// $(document).ready(function(){
    
//     window.addEventListener('scroll',function(){
//         let this_scroll = this.scrollY; //下移量
//         var topHeight = $(window).height() *0.5 ; //畫面總高度(特效拉到畫面75%才發動)
//         let top_1 = $(this).scrollTop() /20; //位移倍率
//         let top_2 = $(this).scrollTop() /25; //位移倍率
//         let top_3 = $(this).scrollTop() /30; //位移倍率
        
    
        

//         //關於本院標題
//         let about_title = $('.about .title_')
//         //關於本院標題下移量
//         let about_title_scroll = about_title.offset().top - topHeight;  

//         //關於本院內文標題
//         let about_content_h3 = $('main#main .about .content_ .article .content h3')
//         //關於本院內文標題下移量
//         let about_content_h3_scroll = about_content_h3.offset().top - topHeight;

//         //關於本院內文內文
//         let about_content_p = $('main#main .about .content_ .article .content p')
//         //關於本院內文內文下移量
//         let about_content_p_scroll = about_content_p.offset().top - topHeight;

        
//         console.log(this_scroll , topHeight , about_title_scroll)
//         // 關於本院 標題
//         if(this_scroll > about_title_scroll){
//             about_title.css('transform',`translate(0% , -${top_1}px)`)
//             // about_title.css('opacity','1')
//         }

//         // 關於本院 文字標題
//         if(this_scroll > about_content_h3_scroll){
//             about_content_h3.css('transform',`translate(0% , -${top_2}px)`)
//             // about_content_h3.css('opacity','1')
//         }

//         // 關於本院 文字內文
//         if(this_scroll > about_content_p_scroll){
//             about_content_p.css('transform',`translate(0% , -${top_3}px)`)
//             // about_content_p_scroll.css('opacity','1')
//         }
//     })
// })
// })


