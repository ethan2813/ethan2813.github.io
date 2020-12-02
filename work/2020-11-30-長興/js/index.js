let box_title = document.querySelectorAll('.btn_title');
let collapse_content = document.querySelector('.collapse_content')
Array.prototype.forEach.call(box_title, t => {
    t.addEventListener('click', e => {
        console.log(e.currentTarget)
        
    })
})


// $(function () {
//     $('#menu_1').on('show.bs.collapse', function () {
//         alert('嘿，当您展开时会提示本警告');
//     })
// });



