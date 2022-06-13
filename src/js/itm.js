import $ from './jquery.js';
import cookie from './cookie.js';
// console.log($);

let id = location.search.split('=')[1];
console.log(id);

$.ajax({
    url: './getitem.php',
    type: 'get',
    data: {
        id
    },
    dataType: 'json'
}).then(res => {
    let template = '';
    let pic = JSON.parse(res.picture);
    console.log(pic);
    template += `
    <div class="l-top">
    <img class="bigp1" src="${pic[6].src}" alt="">
    <img class="bigp2"  src=${pic[7].src}" alt="">
    <img class="bing3" src="${pic[8].src}" alt="">
    <img class="bing4" src="${pic[9].src}" alt="">
    <img class="bing5" src="${pic[10].src}" alt="">
</div>
<div class="l-bot">
 <img class="p1" src="${pic[1].src}" alt="">
 <img class="p2" src="${pic[2].src}" alt="">
 <img class="p3" src="${pic[3].src}" alt="">
 <img class="p4" src="${pic[4].src}" alt="">
 <img class="p5" src="${pic[5].src}" alt="">
</div>
<div class="m-text">
 <p>
     <span>收藏商品(655669人气)</span>
     <span>举报</span>
 </p>
</div>
    `
    $('.main-l').html(template);
    // 详情页 首页图片 tpye栏切换
$('.l-bot').find('img').on('mouseenter', function () {
    $('.l-top').find('img').eq($(this).index()).addClass("active");
    $('.l-top').find('img').eq($(this).index()).siblings('img').removeClass("active");
    $(this).addClass("acto-color").siblings('img').removeClass("acto-color");

    
});
// 购物车id 按钮
$('#addItem').on('click', function() {
    addItem(res.id,1);
    location.href = './shop.html';
});
}).catch(err => {
    console.log(err);
})


// cookie
function addItem(id, num) {
    let product = { id, num };

    // console.log(product);

    let shop = cookie.get('shop'); // 获取cookie中的shop


    if (shop) { // 判断shop已有数据
        shop = JSON.parse(shop); // shop 字符串转数组

        // 需要判断当前的商品再shop中是否已存在 如果存在则修改数量 不存在则添加
        if (shop.some(el => el.id === id)) { // 判断当前商品存在
            let index = shop.findIndex(elm => elm.id === id); // 找到商品的索引
            let count = parseInt(shop[index].num);
            count += parseInt(num);
            shop[index].num = count;
        } else {
            shop.push(product);
        }

    } else {
        shop = [];
        shop.push(product);
    }

    cookie.set('shop', JSON.stringify(shop));
}

