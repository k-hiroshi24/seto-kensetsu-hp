
// jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

//   var topBtn = $('.page-top');
//   topBtn.hide();

//   // ボタンの表示設定
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 70) {
//       // 指定px以上のスクロールでボタンを表示
//       topBtn.fadeIn();
//     } else {
//       // 画面が指定pxより上ならボタンを非表示
//       topBtn.fadeOut();
//     }
//   });

//   // ボタンをクリックしたらスクロールして上に戻る
//   topBtn.click(function () {
//     $('body,html').animate({
//       scrollTop: 0
//     }, 300, 'swing');
//     return false;
//   });

//   // ヘッダー
//   $(window).on('scroll', function () {
//     if ($('.slider1').height() < $(this).scrollTop()) {
//       $('.header').css('background', 'rgba(17,17,17,1)');
//     } else {
//       $('.header').css('background', 'rgba(17,17,17,0.5)');
//     }
//   });

//   //ドロワーメニュー
//   $('.navbar_toggle').on('click', function () {
//     $(this).toggleClass('open');
//     $('.menu').toggleClass('open');
//   });

//   // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
//   $(document).on('click', 'a[href*="#"]', function () {
//     let time = 400;
//     let header = $('header').innerHeight();
//     let target = $(this.hash);
//     if (!target.length) return;
//     let targetY = target.offset().top - header;
//     $('html,body').animate({ scrollTop: targetY }, time, 'swing');
//     return false;
//   });



// });


//トップに戻るボタン スクロール検知
jQuery(window).on("scroll", function () {
  // トップから100px以上スクロールしたら
  if (100 < jQuery(this).scrollTop()) {
    // is-showクラスをつける
    jQuery(".js-to_top").addClass("is-show");
  } else {
    // 100pxを下回ったらis-showクラスを削除
    jQuery(".js-to_top").removeClass("is-show");
  }
});

jQuery(".js-to_top").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    500
  ); //0.5秒かけてトップへ移動

  return false;
});

// p-top-mv-slider
var mv__swiper = new Swiper(".js-mv-slider", {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 2000,
});


//works-slider
  
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
      });
    var swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
        },
    thumbs: {
      swiper: swiper,
        },
      });



