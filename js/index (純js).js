




//宣告一個 navSlide 函式
const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav_links = document.querySelector('.nav_links');
    //漢堡條click事件
    burger.addEventListener('click',()=>{
        // nav滑進來
        nav_links.classList.toggle('nav_active');
        //漢堡條變成x
        burger.classList.toggle('burger_active');
    })
}
// 執行navSlide函式
navSlide();






let lastScrollTop = 0;
window.addEventListener('scroll',()=>{
    var navagation = document.querySelector('.nav');
    var nowScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    
    if(nowScrollTop > lastScrollTop){
        navagation.classList.remove('fixed');
    }else{
        navagation.classList.add('fixed');
    }

    lastScrollTop = ( nowScrollTop <= 0 ) ? 0 : nowScrollTop; // For Mobile or negative scrolling

   
}, false);





