import $ from './jquery.js';
import cookie from './cookie.js';

let shop = cookie.get('shop');

shop = JSON.parse(shop);


let idList = shop.map(el => el.id).join();

$.ajax({
    type: "get",
    url: "./shop.php",
    data: {
        idList
    },
    dataType: "json"
}).then(res => {
    let currentData = shop.filter(elm => elm.id === res.id);
    console.log(currentData);
    let template = '';
   // console.log(res[0].picture);
    let pic = JSON.parse(res[0].picture);
   // console.log(pic);
    console.log(pic[0].src);

    template += ` <div class="foot-top">
    <div>单品直降</div>
    <div>已享优惠:190.00</div>
    <span>满2件减1000</span>
</div>
<div class="foot-c">
   <dl class="foot-c-left">
    <input type="checkbox">
    <dt><img src="${pic[0].src}" alt=""></dt>
    <p><a href="javascript">${res[0].tlite}</a></p>
   </dl>
   <dl class="foot-c-right">
    <dd><span class="dd-1">599.00</span><br><span class="dd-2">¥538.00</span></dd>
    <dd class="dd-4"><span class="dd-3">${currentData.num}</span>+</dd>
    <dd><span class="dd-5">538.00</span>
        <p>进口税：预计</p>
        <p>¥1</p>
        <dd>
            <a href="javascript">移入收藏夹</a>
            <a href="javascript">删除</a>
        </dd>
</dl>
</div>`

    $('.main-foot').html(template);

    // $('.list .removeitem').on('click', function () {
    //     let result = shop.filter(el => el.id != $(this).attr('data-id'));
    //     cookie.set('shop', JSON.stringify(result));
    //     $(this).parent().parent().remove();
    // });


}).catch(xhr => {
    console.log(xhr);
});