var loaded = 0;

jQuery(window).on('load',function() { 
	loaded = 1;
});

jQuery(function($){
	// If all Elements have loaded
	if(loaded == 0 && $('body').hasClass('home')){
		setInterval(function(){
			if(loaded == 1){
				$('body .loader').addClass('website-loaded');
				$('body').addClass('preloader-active');
				setTimeout(function(){
					$('body').addClass('preloader-anim-done');
				},1000);
				return;
			}
		},1000);
	}else{
		$('body .loader').addClass('website-loaded');
		$('body').addClass('preloader-active');
		setTimeout(function(){
			$('body').addClass('preloader-anim-done');
		},1000);
		return;
	}
});