window.addEventListener('DOMContentLoaded', () => {

    // 寫入各 .content-box 的高，然後高度設成 0
    const contents = document.querySelectorAll('.collapse_ .contents-box');
    Array.prototype.forEach.call(contents, c => {
        c.dataset.height = c.offsetHeight;
        c.setAttribute('style', 'height: 0');
    });

    // .title-box 被點擊時，加入 .active， .content-box的高度抓 data-height 的
    const titles = document.querySelectorAll('.title-box');
    Array.prototype.forEach.call(titles, t => {
        t.addEventListener('click', e => {
            e.target.classList.toggle('active'); // 加入/移除 .active

            // .title-box 同一層的 .contents-box
            const content = e.target.parentNode.querySelector('.contents-box');
            const height = content.dataset.height; // 從 dat-height 抓原本高度

            // 判斷 .title-box 有沒有 .active
            if (e.target.classList.contains('active')) {
                // 有 .active，就設高
                content.setAttribute('style', 'height: ' + height + 'px');
            } else {
                // 沒有，高度歸 0
                content.setAttribute('style', 'height: 0');
            }
        });

        // 如果 .title-box 有 data-expanded="true"，就預設開啟
        if (t.dataset.expanded === 'true') {
            t.click()
        }
    });

});



//宣告預設表單內容為空 （你想要的話也可以加東西）
var initBody = '';

//按下傳送按鈕後執行
function submitHandler() {

    var to = "contact@example.com";//寫死的傳送對象 就是公司的信箱 不會顯示在網頁上
    var subject = "我要諮詢！";
    var name = nameText.value;//讀取ID為 nameTextuser 物件中的值
    var tel = telText.value;
    var email = emailText.value;
    // var items_checkedValue = document.querySelector('.itemText:checked').value;  

    // var message = bodyText.value;
    // var subject = subText.value;



    //如果預約項目的checked數量等於0
    if ($('input[name="item"]:checked').length == 0) {
        alert('請勾選預約項目')
        return
    } else {
        //預設預約項目為空字串
        var items_checkedValue = [];

        //預約項目如果有被勾選，將傳送自空自鑽
        $('input[name="item"]:checked').each(function () {
            items_checkedValue.push(this.value);
        });

        console.log(items_checkedValue)
    }

    if ($('input[name="time"]:checked').length == 0) {
        alert('請勾選約診時段')
        return
    } else {
        var time_checkedValue = document.querySelector('[name="time"]:checked').value;
    }




    // console.log(items_checkedValue)
    // console.log(email)

    
    //把user填的資料都塞到 mail body 中
    // var body = "" + bodyText.value + '%0A%0A%0A';//%0A是換行 換了三行
    var body = '%0A%0A%0A';//%0A是換行 換了三行
    body += "姓名：" + nameText.value + '%0A';
    body += "Email：" + emailText.value + '%0A';
    body += "電話：" + telText.value + '%0A';
    body += '預約項目：' + items_checkedValue + '%0A';
    body += '約診時段：' + time_checkedValue + '%0A';

    


    //傳送的主要程式碼
    mailTo.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
    mailTo.click();
}
//在body onload
function init() {
    subText.value = initSubject;
    toText.value = initTo;
    bodyText.value = initBody;
}
