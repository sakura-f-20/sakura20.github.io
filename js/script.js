$(function(){
  var imgHeight = $('.kv_wrapper').outerHeight();  //キービジュアルの画像の高さを取得
  var bgHeight = $('.fv').outerHeight(); //ファーストビューの高さを取得
  

  $(".burger_btn").on('click',function() {
    if( $(window).scrollTop() < imgHeight -50) {
      //ハンバーガーボタンがfvより上にあるとき
      $('.bar').toggleClass('cross'); //ハンバーガーボタンのラインをクロスさせるCSSを当てたり外したりする
      $('.header_nav').toggleClass('open'); //ナビゲーションが開くCSSを当てたり外したりする
      $('.burger_musk').fadeToggle(300); //背景を暗くするマスクをフェードイン・フェードアウトさせる
      $('body').toggleClass('noscroll'); //ハンバーガーメニューを開いたときにスクロールしないようにする
    } else {
      //ハンバーガーボタンがfvより下にあるとき
      $(this).toggleClass('black'); //ハンバーガーボタンを黒くしたり白くしたりする
      $('.bar').toggleClass('cross');
      $('.header_nav').toggleClass('open');
      $('.burger_musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }
  });

  // スクロールしたら、サイトロゴとハンバーガーボタンの色が変わる
  $(window).on('load scroll', function() {
    if ($(window).scrollTop() < imgHeight -50) {
      //メインビジュアル内にいるので、クラスを外す。
      $('.header_logo').removeClass('black');
    } else {
      //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
      $('.header_logo').addClass('black');
    }

    if ($(window).scrollTop() < bgHeight -50) {
      //メインビジュアル内にいるので、クラスを外す。
      $('.burger_btn').removeClass('black');
    } else {
      //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
      $('.burger_btn').addClass('black');
    }
  });
});