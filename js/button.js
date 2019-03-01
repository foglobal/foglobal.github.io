$(function() {
    var topBtn = $('#register');    
    topBtn.hide();
    //スクロールが800に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
});