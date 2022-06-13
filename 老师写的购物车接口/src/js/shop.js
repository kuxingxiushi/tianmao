import $ from './lib/jquery.js';
import cookie from './lib/cookie.js';

let shop = cookie.get('shop');

shop = JSON.parse(shop);

let idList = shop.map(el => el.id).join();

$.ajax({
    type: "get",
    url: "../interface/shop.php",
    data: { idList },
    dataType: "json"
}).then(res => {
    let template = '';
    res.forEach(el => {
        let pic = JSON.parse(el.picture);

        let currentData = shop.filter(elm => elm.id === el.id);

        template += `<li class="item">
                                  <div>
                                      <input type="checkbox" />
                                  </div>
                                  <div class="p-img">
                                      <img src="./${pic[0].src}" alt="" />
                                  </div>
                                  <div class="p-title">
                                      ${el.title}
                                  </div>
                                  <div class="p-num">
                                      <input type="number" value="${currentData[0].num}" max="100" min="1" />
                                  </div>
                                  <div class="p-price">单价: ￥ ${(+el.price).toFixed(2)}</div>
                                  <div class="p-sum">总价: ￥ ${(el.price * currentData[0].num).toFixed(2)}</div>
                                  <div class="p-del">
                                      <a href="javascript:;" class="removeitem" data-id="${el.id}">删除</a>
                                  </div>
                              </li>`;
    });

    $('.list').html(template);

    $('.list .removeitem').on('click', function() {
        let result = shop.filter(el => el.id != $(this).attr('data-id'));
        cookie.set('shop', JSON.stringify(result));
        $(this).parent().parent().remove();
    });


}).catch(xhr => {
    console.log(xhr);
});