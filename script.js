$(document).ready(function () {
	const navOffset = $('#nav').offset().top;
	$(window).scroll(function () {
		 const scrolled = $(this).scrollTop();

			  if (scrolled > navOffset) {
					$('#wrapper').addClass('nav-fixed');

			  } else if (scrolled < navOffset) {
					$('#wrapper').removeClass('nav-fixed');
			  }
	});
	$("#nav").on("click","a", function (event) {
		 event.preventDefault();
		 var id = $(this).attr('href'),
			  top = $(id).offset().top;
		 $('body,html').animate({scrollTop: top}, 700);
	});
	$("#intro").on("click","a", function (event) {
		 event.preventDefault();
		 var id = $(this).attr('href'),
			  top = $(id).offset().top;
		 $('body,html').animate({scrollTop: top}, 700);
	});
	$(document).click(function (event) {
		 var clickover = $(event.target);
		 var $navbar = $(".navbar-collapse");
		 var _opened = $navbar.hasClass("show");
		 if (_opened === true && !clickover.hasClass("navbar-toggle")) {
			  $navbar.collapse('hide');
		 }
	});
});
