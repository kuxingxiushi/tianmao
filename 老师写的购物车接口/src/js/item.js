import $ from './lib/jquery.js';
import cookie from './lib/cookie.js';

let id = location.search.split('=')[1];
console.log(id);

$.ajax({
    url: '../interface/getitem.php',
    type: 'get',
    data: { id },
    dataType: 'json'
}).then(res => {
    let pic = JSON.parse(res.picture);

    let template = `
    <h1>商品详情</h1>
    <h2>${res.title}</h>
    <div>
      <img src='./${pic[2].src}'>
    </div>
    <div class="price">价格:${res.price}</div>
    <div>
      <input type="number" id="num" value="1" min="1" max="${res.num}">
      <input type="button" value="加入购物车" id="addItem"> 
    </div>
    <div>${res.details}</div>
    `;

    $('body').html(template);

    $('#addItem').on('click', function() {
        addItem(res.id, $('#num').val());
    });
}).catch(err => {
    console.log(err);
});

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