import $ from './jquery.js';
import {
  Swiper
} from './library/swiper-7.4.1/swiper/swiper-bundle.esm.browser.js';
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: true,
});
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: true,
});
// 我的淘宝下拉菜单
$('#taobao').on('mouseenter', function () {
  $('.nav-none').css("display", "block");
  $('.nav-none>a').on('mouseenter', function () {
    $(this).addClass('active');
  })
});
$('.nav-none').on('mouseleave', function () {
  $('.nav-none').css("display", "none");
  $('.nav-none>a').on('mouseleave', function () {
    $(this).removeClass('active');
  })
});
// 收藏夹下拉菜单
$('#coll').on('mouseenter', function () {
  $('#collection').css("display", "block");
  $('#collection>a').on('mouseenter', function () {
    $(this).addClass('active');
  });
});

$('#collection').on('mouseleave', function () {
  $('#collection').css("display", "none");
  $('#collection>a').on('mouseleave', function () {
    $(this).removeClass('active');
  });
});

$('.phones').on('mouseenter', function () {
  $('#phone').css("display", "block");
  $('#phone').on('mouseleave', function () {
    $(this).css("display", "none");
  });
});

$.ajax({
  type: "get",
  url: "./getitems.php",
  dataType: "json"
}).then(res => {
  let template = '';
  res.forEach(el => {
    let pic = JSON.parse(el.picture);
    template +=  ` <a href="./details.html?id=${el.id}" class="mian-bot">
    <img src="${pic[0].src}" alt="">
    <p>${el.title}</p>
    <span>¥${el.price}</span>
</a>`
  });
  $('.items').html(template);
}).catch(err => {
  console.log(err);
});

$.ajax({
  type: "get",
  url: "./getitems.php",
  dataType: "json"
}).then(res => {
  let template = '';
  res.forEach(el => {
    let pic = JSON.parse(el.picture);
    template +=  ` <a href="./details.html?id=${el.id}" class="mian-bot">
    <img src="${pic[0].src}" alt="">
    <p>${el.title}</p>
    <span>¥${el.price}</span>
</a>`
  });
  $('.itm').html(template);
}).catch(err => {
  console.log(err);
});