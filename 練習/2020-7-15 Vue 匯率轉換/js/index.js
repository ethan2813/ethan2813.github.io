var app = new Vue({
    el:'#app',
    data:{
        NT:0
    },
    computed:{
        JPY:function(){
             return this.NT/0.2797
        },
        USD:function(){
            return this.NT/29.82
        },
    }
})