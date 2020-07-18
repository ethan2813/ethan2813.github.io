var app = new Vue({
    el:'#app',
    data:{
        message:'hello world!!',
        colors:['black','yellow','blue'],
        home:[
            {father:'bob'},
            {father:'jack'},
            {father:'henry'},
        ],
    },

    methods:{
        myFa:function(fath){
            alert('我的爸爸是'+fath)
        }
    }
});
















