///////////////////////////////////////////
//ハンバーガーメニュー
//////////////////////////////////////////
// $('.hambager').on('click', function () {
//   navOpen();
// });
// let navFlg = false;
// function navOpen() {
//   if (!navFlg) {
//     $('.hamberger-wrap').addClass('is-ham-open');
//     $('.mega-menu').addClass('is-megamenu-open');
//     $('.header-inner').addClass('is-megamenu-icon');
//     $('#header').addClass('is-megamenu-headfix');
//     $('.ham-txt').text('閉じる');
//     navFlg = true;
//   } else {
//     $('.hamberger-wrap').removeClass('is-ham-open');
//     $('.mega-menu').removeClass('is-megamenu-open');
//     $('.header-inner').removeClass('is-megamenu-icon');
//     $('#header').removeClass('is-megamenu-headfix');
//     $('.ham-txt').text('メニュー');
//     navFlg = false;
//   }
// }


//ハンバーガーメニュー アコーディオン
///////////////////////////////////////////
// $(document).ready(function() {
//   $(".little-nav").hide();
//   $(".nav01 .parent").on('click', function() {
//     $(this).toggleClass('active');
//     $(this).next('.little-nav').slideToggle(300);
//   });
// });


///////////////////////////////////////////
//スクロールフェードイン
///////////////////////////////////////////
const fadeIn = document.querySelectorAll(".fadeIn");
const options = {
  rootMargin: '0px',
  threshold: 0.6
};
const observer = new IntersectionObserver(showElement, options);
fadeIn.forEach((fadeIn) => {
  observer.observe(fadeIn);
});
function showElement(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}




///////////////////////////////////////////
//FAQ アコーディオン
///////////////////////////////////////////
$(".qa-list dd").hide();
$(".qa-list dl").on("click", function(e){
    $('dd',this).slideToggle('fast');
    if($(this).hasClass('open')){
        $(this).removeClass('open');
    }else{
        $(this).addClass('open');
    }
});



////////////////////////////////////////////////////////////////////////////////////////
// ヘッダーを画面上に固定
///////////////////////////////////////////////////////////////////////////////////////
ScrollTrigger.create({
  trigger: ".mv", // トリガーとなる要素を指定
  start: "bottom top", // '.mv'の下部が画面上部に来た時を開始条件とする
  end: "bottom 0px", // オプションで終了位置を指定できます（必要に応じて調整）
  onEnter: () => document.querySelector(".header").classList.add("header-fixed"), // 画面に入った時に実行
  onLeaveBack: () => document.querySelector(".header").classList.remove("header-fixed") // 画面から出た時に実行
});




//////////////////////////////////////////////////////////////////////////////
//各Swiperイベントの初期化
//////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', (event) => {

  //トップMVスライダー
  const swiper = new Swiper(".mv-swiper", {
    loop: true,
    effect: 'fade',
    speed: 2000, // ２秒かけながら次の画像へ移動
    autoplay: {
      delay: 4000, // ４秒後に次の画像へ
      disableOnInteraction: false, // ユーザー操作後に自動再生を再開する
    },
    allowTouchMove: false, // マウスでのスワイプを禁止
  });


  //TOP　商品一覧スライダー
  const itemlistswiper = new Swiper('.itemlist-swiper', {
    loop: true,
    slidesPerView: 4.5,
    spaceBetween: 30,
    mousewheel: {
      forceToAxis: true,
      sensitivity: 3
    },
  });

  //CONSEPTページ スライダー
  const conceptswiper01 = new Swiper(".concept-swiper01", {
    loop: true,
    effect: 'fade',
    speed: 2000, // ２秒かけながら次の画像へ移動
    autoplay: {
      delay: 4000, // ４秒後に次の画像へ
      disableOnInteraction: false, // ユーザー操作後に自動再生を再開する
    },
    allowTouchMove: false, // マウスでのスワイプを禁止
  });

  const conceptswiper02 = new Swiper(".concept-swiper02", {
    loop: true,
    effect: 'fade',
    speed: 2000, // ２秒かけながら次の画像へ移動
    autoplay: {
      delay: 4000, // ４秒後に次の画像へ
      disableOnInteraction: false, // ユーザー操作後に自動再生を再開する
    },
    allowTouchMove: false, // マウスでのスワイプを禁止
  });

  const conceptswiper03 = new Swiper(".concept-swiper03", {
    loop: true,
    effect: 'fade',
    speed: 2000, // ２秒かけながら次の画像へ移動
    autoplay: {
      delay: 4000, // ４秒後に次の画像へ
      disableOnInteraction: false, // ユーザー操作後に自動再生を再開する
    },
    allowTouchMove: false, // マウスでのスワイプを禁止
  });


});


////////////////////////////////////////////////////////////////////////////////////////
// GSAPアニメーション
///////////////////////////////////////////////////////////////////////////////////////
//TOPバナー
$(function () {
  let cards = gsap.utils.toArray(".card-wrapper");

  let stickDistance = '100px';

  let lastCardST = ScrollTrigger.create({
    trigger: cards[cards.length - 1],
    start: "bottom bottom"
  });

  cards.forEach((card, index) => {

    ScrollTrigger.create({
      trigger: card,
      start: "center center",
      end: () => lastCardST.start + stickDistance,
      pin: true,
      pinSpacing: false,
      ease: "none",
      toggleActions: "restart none none reverse"
    });
  });
});

ScrollTrigger.create({
  trigger: ".p-top_wrap02",
  start: "top top",
  end: "bottom top",
  onEnter: ({trigger}) => {
    const target = document.querySelector(".top-banner_wrap");
    target.classList.add("top-banner_active");
  },
  onLeaveBack: ({trigger}) => {
    const target = document.querySelector(".top-banner_wrap");
    target.classList.remove("top-banner_active");
  },
});


//パララックス
const Parallax = document.querySelectorAll('.anime-para');
Parallax.forEach((Parallax) => {
  gsap.fromTo(Parallax.querySelector('img'), {
    yPercent: -25, 
  }, {
    yPercent: -40, 
    ease: "none",
    scrollTrigger: {
      trigger: Parallax,
      start: "top 70%",
      end: "bottom top",
      scrub: 1,
    }
  }); 
});

//順番にフェードイン
document.querySelectorAll('.fade_triger').forEach(trigger => {
  gsap.fromTo(trigger.querySelectorAll('.anime-fade'), 
    { opacity: 0, y: -10 }, 
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5, // 順番にフェードインする間隔
      scrollTrigger: {
        trigger: trigger,
        start: "top 50%", 
      }
    }
  );
});3
