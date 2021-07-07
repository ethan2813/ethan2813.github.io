;(function(){
    let showbox = document.querySelector('.showbox')
    function setClock(){
        let newDate = new Date()
        let year = newDate.getFullYear();
        let minth = newDate.getMonth();
        let date = newDate.getDate();
        let second = newDate.getSeconds();
        let min = newDate.getMinutes();
        let hour = newDate.getHours();
        showbox.innerHTML = `GMT+8　${year}-${minth}-${date}　${hour}:${min}:${second}`
    }
    setClock()
    setInterval(setClock,1000)

        // //------------------
        // //隨著滑鼠移動特效
        // //------------------
        
        // var my_photo1 = $('.back_car')
        
        // document.onmousemove = function (event) {
        //     $.each(my_photo1, function (index, val) {
        //         // console.log('index=', index);
        //         var my_photo1_centerX = my_photo1[index].offsetLeft;
        //         // my_photo1_centerX += 200
        //         // console.log(my_photo1_centerX)
        //         var my_photo1_centerY = my_photo1[index].offsetTop;
        //         // my_photo1_centerY += 42
        //         var offsetX;
        //         var offsetY;
        //         // console.log(my_photo1_centerX)


        //         let nowPosiotionX = event.pageX;
        //         let nowPosiotionY = event.pageY;
        //         // console.log("X " + nowPosiotionX + "Y" + nowPosiotionY);


        //         // 鼠標的距離 = 現在數標位置 - 小圖的中心座標
        //         offsetX = nowPosiotionX - my_photo1_centerX
        //         offsetY = nowPosiotionY - my_photo1_centerY
        //         my_photo1[index].style.transform = `translate(${offsetX /= 100}px , ${offsetY /= 100}px)`


        //     })
        // };
})()
