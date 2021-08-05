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
    sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
});

var myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    menu: '#menu',
    continuousVertical: true,
    afterLoad: function (anchorLink, index) {
        console.log("AFTER LOAD - anchorLink:" + anchorLink + " index:" + index);
    },
    onLeave: function (index, nextIndex, direction) {
        console.log("ONLEAVE - index:" + index + " nextIndex:" + nextIndex + " direction:" + direction);

    },
});
