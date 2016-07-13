$(document).ready(function(){

	$(".header__profile-notifications").click(function() {
		$(this).toggleClass("active");
		$(".notification-hover").toggleClass("off");
	});

	$(".header__profile-wrap").click(function() {
		$(this).toggleClass("active");
		$(".profile-wrap-hover").toggleClass("off");
	});

	$(".nav__item, .drop-down--hover").hover(function(){
		$(".drop-down--hover").addClass("on");
		}, function() {
		$(".drop-down--hover").removeClass("on");
	});

	$(".plus-button").click(function() {
		$(this).css({"transform":"rotate(45deg)"});
		$(".blago-button").css({"bottom":"160px","opacity":"1"});
		$(".help-button").css({"bottom":"105px","opacity":"1"});
	});

	$(".blago-button").click(function() {
		$(".popup-bg").fadeToggle();
	});

	function equlizer(myclass) {
			var maxHeight = 0;
			$(myclass).each(function(){
		   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
			});

			$(myclass).height(maxHeight);

		}

	equlizer('.eq-height');
	equlizer('.log-height');

});