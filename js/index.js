$(function(){
	var h=$('.top-bar-v1').height(),
	h1=$('header').height(),
	h2=$(window).height()-h-h1,
	// h3=$('body').height(),
	w=$(window).width();
	// console.log(h3)
	if (w>=768) {
		$('.news-v1 .thumb video').css({'height':'208px'});
		$('.main-slider .bxslider li').css('height',h2);
	}
	$('video').on('click',function(){
		$('.body1,.video').addClass('videoBody');
		var me=$(this),
		src=me.children('source').attr('src');
		$('.body1 .video video').attr({'src':src});

		if($('.body1').hasClass('videoBody')){
		    $('.body1').click(function(ev){
		    if(ev.target!=this){
		        return;
		    }else{
		        $('.body1,.video').removeClass('videoBody');
		        $('.body1 video').attr('src','');
		    }
		    });
		}
	});
});