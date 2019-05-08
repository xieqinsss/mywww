$(function(){
  	$(document).scroll(function(){
		if($(document).scrollTop()>=500){
			$("#toTop").fadeIn(500);
		}else{
			$("#toTop").fadeOut(500);
		}
	})
	$("#toTop").click(function(){
		$("html,body").animate({scrollTop:0},500);
	})
	
 })
