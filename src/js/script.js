'ues strict';
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

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

//トップに戻るボタン スクロール検知
jQuery(window).on("scroll", function () {
  // トップから100px以上スクロールしたら
  if (600 < jQuery(this).scrollTop()) {
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

// ドロワー
jQuery('.js-header-drawer__icon').on('click', function (e) {
	e.preventDefault();
	// alert('test');
	jQuery('.js-header-drawer__icon').toggleClass('is_active');
	jQuery('.js-header-drawer__content').toggleClass('is_active');
	// jQuery('.drawer_bg').toggleClass('is_active');
	return false;
});
jQuery(".drawer__content_item a").on("click", function () {
	// alert('test');

	jQuery(".js-header-drawer__content,.js-header-drawer__icon").removeClass('is_active');
});
	

////////////////////////////
// gsapアニメーション(top)
////////////////////////////
const tl = gsap.timeline();

tl.fromTo('.js-mv-slider',{  //スライダー
  opacity:0
  
},{
  duration:1.5,
  opacity:1,
  ease:"power1.out",
  delay:1.2,

}).fromTo('.js-mv-title',{  //メインビュータイトル
  y:'10%',
  opacity:0
  
},{
  y:0,
  duration:1.5,
  opacity:1,
  ease:"power1.out",

}).fromTo('.js-recruit-title',{ //リクルート
  opacity:0
  
},{
  duration:1,
  opacity:1,
  ease:"power1.out",
  delay:1.2,
})

// about
gsap.fromTo('.js-top-about__content',{
  y:'10%',
  opacity:0
},{
  y:0,
  duration:1.5,
  opacity:1,
  ease:"power1.out",
  delay: 1,
  scrollTrigger:{
    trigger:'.js-top-about',
    start:'top center',
    markers:true,
  }
})
gsap.fromTo('.js-top-about__img',{
  y:'10%',
  opacity:0
},{
  y:0,
  duration:1.5,
  opacity:1,
  ease:"power1.out",

  scrollTrigger:{
    trigger:'.js-top-about',
    start:'top center',
    markers:true,
  }
})


// service
gsap.fromTo('.js-service-animation',{
  y:'10%',
  opacity:0
},{
  y:0,
  duration:1.5,
  opacity:1,
  ease:"power1.out",

  scrollTrigger:{
    trigger:'.js-top-service',
    start:'top center',
    markers:true,
  }
})
gsap.fromTo('.js-top-service-card',{
  y:'10%',
  opacity:0
},{
  y:0,
  duration:1.5,
  opacity:1,
  ease:"power1.out",
  stagger: {
    from: "start", //左側から
    amount: 0.8}, // 0.8秒おきに
  scrollTrigger:{
    trigger:'.js-top-service-cards',
    start:'top center',
    markers:true,
  }
})

// asbest
gsap.fromTo('.js-top-asbest__text-box',{
  y:'10%',
  opacity:0
},{
  y:0,
  duration:1.5,
  opacity:1,
  ease:"power1.out",
  delay: 1,
  scrollTrigger:{
    trigger:'.js-top-asbest',
    start:'top center',
    markers:true,
  }
});
gsap.fromTo('.js-top-asbest__img',{
  y:'10%',
  opacity:0
},{
  y:0,
  duration:1.5,
  opacity:1,
  ease:"power1.out",
  scrollTrigger:{
    trigger:'.js-top-asbest',
    start:'top center',
    markers:true,
  }
});

// sensible
gsap.fromTo('.p-top-sensible__wrap',{
  y:'10%',
  opacity:0
},{
  y:0,
  duration:1.5,
  opacity:1,
  ease:"power1.out",

  scrollTrigger:{
    trigger:'.p-top-sensible',
    start:'top center',
    markers:true,
  }
})
gsap.fromTo('.js-top-sensible-content',{
  y:'10%',
  opacity:0
},{
  y:0,
  duration:1.5,
  opacity:1,
  ease:"power1.out",
  stagger: {
    from: "start", //左側から
    amount: 0.8}, // 0.8秒おきに
  scrollTrigger:{
    trigger:'.js-top-sensible-contents',
    start:'top center',
    markers:true,
  }
})
// works
gsap.fromTo('.p-top-works__wrap',{
  y:'10%',
  opacity:0
},{
  y:0,
  duration:1.5,
  opacity:1,
  ease:"power1.out",

  scrollTrigger:{
    trigger:'.js-top-works',
    start:'top center',
    markers:true,
  }
})
gsap.fromTo('.js-works-card__content',{
  y:'10%',
  opacity:0
},{
  y:0,
  duration:1.5,
  opacity:1,
  ease:"power1.out",
  stagger: {
    from: "start", //左側から
    amount: 0.8}, // 0.8秒おきに
  scrollTrigger:{
    trigger:'.js-works-cards',
    start:'top center',
    markers:true,
  }
})

// news
gsap.fromTo('.js-top-news__title',{
  y:'10%',
  opacity:0
},{
  y:0,
  duration:1.5,
  opacity:1,
  ease:"power1.out",

  scrollTrigger:{
    trigger:'.js-top-news',
    start:'top center',
    markers:true,
  }
})
gsap.fromTo('.js-top-news__items',{

  opacity:0
},{
  duration:1,
  opacity:1,
  delay: 1,
  ease:"power1.out",
  scrollTrigger:{
    trigger:'.js-top-news',
    start:'top center',
    markers:true,
  }
})
















































});






// service-tab
// (() => {
//   const $doc = document;
//   const $tab = $doc.getElementById('js-tab');
//   const $nav = $tab.querySelectorAll('[data-nav]');
//   const $content = $tab.querySelectorAll('[data-content]');
//   // console.log('$content', $content);
//   // 初期化
//   const init = () => {
//     $content[0].style.display = 'block'
//   };
//   init();
//   // クリックしたら実行されるイベント
//   const handleClick = (e) => {
//     e.preventDefault();
    
//     // クリックされたされたnavとそのdataを取得
//     const $this = e.target
//     const targetVal = $this.dataset.nav;
//     // console.log('$targetVal', $targetVal);
//     // 対象外のnav,contentを全て一旦リセットする
//     let index = 0
//     while(index < $nav.length){
//       $content[index].style.display = 'none';
//       $nav[index].classList.remove('is-active');
//       index++
//     }

//     // 対象のコンテンツをアクティブ化する
//     $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
//     $nav[targetVal].classList.add('is-active');
//   };
// // 全nav要素に対して関数を適応・発火
//   let index = 0;
//   while(index < $nav.length) {
//     $nav[index].addEventListener('click', (e) => handleClick(e));
//     index++;
//   }
// })();
