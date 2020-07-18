var app = new Vue({
    el:'.app',
    data:{
        a:0,
        b:0,
    },
    computed:{
        whoHeavy:function(){
            if(this.a > this.b){
                return 'a比較重'
            }else if(this.a < this.b){
                return 'b比較重'
            }else{
                return '一樣重'
            }
        }
    }
})