$(function (){

	// ページ内リンクのみ取得
	$(document).ready(function(){
	  //位置・時間調整
	  var adjust = -100;
	  var time = 500;

	  //URLのハッシュ値を取得
	  var urlHash = location.hash;
	  //ハッシュ値があればページ内スクロール
	  if(urlHash) {
	    //スクロールを0に戻しておく
	    $('body,html').stop().scrollTop(0);
	    setTimeout(function () {
	      //ロード時の処理を待ち、時間差でスクロール実行
	      scrollToAnker(urlHash) ;
	    }, 100);
	  }

	  //通常のクリック時
	  $('a[href^="#"]').on('click', function(event) {
	    event.preventDefault();

	    // ハッシュ値を取得して URI デコードする
	    var decodedHash = decodeURI(this.hash);
	    // ハッシュの確認
	    console.log(decodedHash);
	    //リンク先が#か空だったらhtmlに
	    var hash = decodedHash == "#" || decodedHash == "" ? 'html' : decodedHash;
	    //スクロール実行
	    scrollToAnker(hash);
	    return false;
	  });

	  // 関数：スムーススクロール
	  // 指定したアンカー(#ID)へアニメーションでスクロール
	  function scrollToAnker(hash) {
	    var target = $(hash);
	    var position = target.offset().top + adjust;
	    $('body,html').stop().animate({scrollTop:position}, time, 'swing');
	  }
	})

$('.tab_btn').click(function() {
	var index = $('.tab_box .tab_btn').index(this);
	console.log(index);
	$('.tab_box .tab_btn, .tab_box .tab_panel').removeClass('active');
	$(this).addClass('active');
	$('.tab_box .tab_panel').eq(index).addClass('active');
})

$(function() {
	$('.btn-gNav').on("click", function(){
		$(this).toggleClass('open');
		$('#gNav').toggleClass('open');
	});
});

// メニューをクリックされたら、非表示にする
$(function() {
	$('.gNav-menu li a').on("click", function(){
     $('.btn-gNav').removeClass('open');
     $('#gNav').removeClass('open');
	});
});

$('#datepicker').datepicker({
    dateFormat: 'yy年mm月dd日',
		minDate: "5d",
		monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
});

});
