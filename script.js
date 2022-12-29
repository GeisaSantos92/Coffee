var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    dots: false,
	margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav: false,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut'
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[3000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})



// Mudar para active o menu de acordo com a área
$('section').each(function(){
	var height = $(this).height(),
			offsetTop = $(this).offset().top,
			menuHeight = $('.menu').innerHeight(),
			id = $(this).attr('id'),
			$itemMenu = $('a[href="#' + id + '"]');
	
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(offsetTop - menuHeight < scrollTop && offsetTop + height - menuHeight > scrollTop) {
			$itemMenu.addClass('active');
		} else {
			$itemMenu.removeClass('active');
		}
	});
});


// Animação ao Scroll

var $target = $('[data-anime="scroll"]'),
		animationClass = 'animate',
		offset = $(window).height() * 3/4;

function animeScroll() {
	var documentTop = $(document).scrollTop();
	
	$target.each(function(){
		var itemTop = $(this).offset().top;
		if (documentTop > itemTop - offset) {
			$(this).addClass(animationClass);
		} else {
			$(this).removeClass(animationClass);
		}
	});
}

animeScroll();

$(document).scroll(function(){
	animeScroll();
});


// Scroll suave para o topo
$('.logo').click(function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, 500)
});

// Scroll suave para link interno
$('.menu-nav a[href^="#"]').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('.menu').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

// Botão do menu mobile
$('.mobile-btn').click(function(){
	$(this).toggleClass('active');
	$('.mobile-menu').toggleClass('active');
});
