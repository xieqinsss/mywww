function scrollnumber(element, cssname, offset) {
    var a, b, c, d;
    d = $(element).offset().top;
    a = eval(d + offset);
    b = $(window).scrollTop();
    c = $(window).height();
    if (b + c > a) {
        $((element)).addClass((cssname));
    }
}
function scrollfun() {
    //scrollnumber(".welcome-img1", 'pulse', 10);
    scrollnumber(".animate2", 'fadeInUp', 10);
    scrollnumber(".animate1", 'swing', 10);
}
$(document).ready(function (e) {
    scrollfun();
    $(window).scroll(function () {
        scrollfun();
    });
    $(".welcome-img1").hover(function(){
	  $(this).addClass("pulse");
    },function(){
    	$(this).removeClass("pulse");
    })
    $(".welcome-img2").hover(function(){
	  $(this).addClass("pulse");
    },function(){
    	$(this).removeClass("pulse");
    })
});

