$(function(){
	$(window).scroll(function(){

		if($('body').scrollTop()>100){
			$('.logo').addClass('chucam');
			$('nutlen').addClass('hienthi');
		}
		else if('body'.scrollTop()<=100)
		{
			$('.logo').removeClass('chucam');
		}
	})
})