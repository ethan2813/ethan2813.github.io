// 漢堡條效果
$('.burger').on('click', (e) => {
    $(e.currentTarget).toggleClass('burger_active')
    $('.mobile_nav_list').toggleClass('nav_active')
})

// 點擊漢堡條 跳出選單
$('.burger').on('click', () => {
    $('.mobile_right').toggleClass('active')
})

new fullpage('#fullpage', {
    sectionsColor: [],
});

// 點空白地方關閉選單
// $(document).on('mouseup',(e)=>{
//     if($('.mobile_nav_list').hasClass('active')){
//          if (!$(e.target).closest('.content_').length) {
//              $('.mobile_nav_list').removeClass('active')
//              $('.burger').removeClass('burger_active')
//          }
//     }
// })

$(document).on('mouseup',(e)=>{
    if($('.mobile_right').hasClass('active')){
        if(!$(e.target).closest('.mobile_right').length){
            $('.mobile_right').removeClass('active')
            $('.burger').removeClass('burger_active')

        }
    }
})

let A = document.querySelector('#test #A_')
let B = document.querySelector('#test #B_')
let text = document.querySelector('#test ')



function handler (e){
    console.log(e.target)
    console.log(e.currentTarget)
}

A.addEventListener('click',handler)

