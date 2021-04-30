$(document).ready(function(){
	// SHOW
	$('#nav-toggle').on('click', function(e){
		e.preventDefault();
		$('#nav-menu').toggleClass('show');
	});
	// CLOSE
	$('#nav-close').on('click', function(e){
		e.preventDefault();
		$('#nav-menu').removeClass('show');
	});
	// REMOVE MENU / SCROLL MENU
	$('.nav__link').on('click', function(e){
		e.preventDefault();
		$('#nav-menu').removeClass('show');
		let srtop = $($(this).attr('href'))[0].offsetTop;
		srtop = srtop > 50 ? srtop : srtop - 50;
		$(window).scrollTop(srtop);
	});
	// PERCENTAGE SKILLS
	$('.skills__bar').each(function(indice, element){
		$(this).width($(this).attr('data-percent')+'%');
	});
	// SCROLL
	$(window).on('scroll', function(){
		const scrollY = window.pageYOffset;

		$('section').each(function(index, element){
			const sectionHeight = element.offsetHeight;
			const sectionTop = element.offsetTop -50;
			const sectionId = element.getAttribute('id');

			if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
				$('.nav__menu a[href="#'+sectionId+'"]').addClass('active');
			} else {
				$('.nav__menu a[href="#'+sectionId+'"]').removeClass('active');
			}
		});
	});
});