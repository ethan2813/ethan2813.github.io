// function check(){
//     console.log(this);
// }
// check();

// var data ={
//     checkNum : function(){
//         console.log(this)
//     }
// }
// data.checkNum()



var app = new Vue({
    el:'.app',
    data:{
        todos:[],
        newtodo:''
    },

    methods:{
        addtodo:function(todo1){
            this.todos.push({content:todo1})
        },
        removetodo:function(todo2){
            this.todos.splice(this.todos.indexOf(todo2),1)
        }
    }
})

