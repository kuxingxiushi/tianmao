import $ from './lib/jquery.js';


$.ajax({
    type: "get",
    url: "../interface/getitems.php",
    dataType: "json"
}).then(res => {
    let template = '';
    res.forEach(el => {
        let pic = JSON.parse(el.picture);
        template += `<li class="item">
          <a href="./item.html?id=${el.id}">
              <div class="picture">
                  <img src="./${pic[0].src}" alt="${pic[0].alt}">
              </div>
              <div class="title">${el.title}</div>
              <div class="price">${el.price}</div>
          </a>
      </li>`;
    });
    $('.items').html(template);
}).catch(err => {
    console.log(err);
});