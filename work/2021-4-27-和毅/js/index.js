// 電腦版選單
$('.items_active').on('click', (e) => {
    $('.items_2_box').toggleClass('active')
})

// 點擊漢堡條 跳出選單
$('.burger').on('click', () => {
    $('.mobile_nav_list').toggleClass('active')
})

// 漢堡條效果
$('.burger').on('click', (e) => {
    $(e.currentTarget).toggleClass('burger_active')
})
//totop
$('#totop').on('click', () => {
    $('html,body').animate({ scrollTop: 0 }, 300);
})

// 點空白地方關閉選單
$(document).on('mouseup',(e)=>{
       if($('.mobile_nav_list').hasClass('active')){
            if (!$(e.target).closest('.content_').length) {
                // $('.mobile_nav_list').toggleClass('nav_active');
                $('.mobile_nav_list').removeClass('active')
                $('.burger').removeClass('burger_active')

            }
       }
})

// 點擊預約 跳出選單
$('.online_btn').on('click', () => {
    $('.online_btn').toggleClass('active')
    console.log('132')
    //點空白地方關閉清單
    $(document).on('mouseup', (e) => {
        if ($('.online_btn').hasClass('active')) {
            if (!$(e.target).closest('.p_20').length) {
                $('.online_btn').removeClass('active');
            }
        }
    })
})
$('#line').on('click', () => {
    $('.online_btn').toggleClass('active')
    console.log('132')
    //點空白地方關閉清單
    $(document).on('mouseup', (e) => {
        if ($('.online_btn').hasClass('active')) {
            // 點#line依然可以收回
            if (!$(e.target).closest('#line').length) {
                $('.online_btn').removeClass('active');
                
            }
        }
    })
})

    // 第三頁的js
    function display_() {
        $('.tab_btn').on('click',(e)=>{
            let this_ = e.currentTarget;
            let index = $('.tab_btn').index(this_) + 1
            
            $('.tab_content').removeClass('display_block');
            $('.tab_btn').removeClass('display_block');


            $(this_).addClass('display_block')
            $(`.tab_content:nth-child(${index})`).addClass('display_block')
            
        })
    }

    





// $('.item_2').mouseover(function (e) {
//     let index_content = $('.item_2').index(this) + 1
//     console.log(index)
// })


// console.log($('.item_2'))
// $('.item_map').mouseover((e) => {
//     let index = $('.item_map').index(e.currentTarget) + 1
//     console.log(index)
//     // console.log( $('.item_2:nth-of-type(' + index + ')'))
//     // $('.item_2:nth-of-type(' + index + ')').css('opacity','1')

// })

