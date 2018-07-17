$(function() {
	var $windowHeight = $(window).height(),
		$bannerBg = $(".bannerBg"),
		contentPadding = ($windowHeight / 2) - 200;

	$bannerBg.css("height", $windowHeight);
	$(".bannerContent").css("padding-top", contentPadding);
	$(window).resize(function() {
		$bannerBg.css('height', $windowHeight);
	});

	// Mobile Menu
	var mobileMenuOpen = 0;
	$(".mobileMenuBtn").click(function() {
		mobileMenuOpen = !mobileMenuOpen;
		if(mobileMenuOpen) {
			$(this).find("i").attr("class", "fa fa-times");
			$("body, main").css("overflow", "hidden");
			$(".navArea").fadeIn();
		}else {
			$(this).find("i").attr("class", "fa fa-bars");
			$("body, main").removeAttr("style");
			$(".navArea").fadeOut();
		}
	});

	if($(window).width() > 767) {
		$(window).scroll(function() {
			var scrollPos = $(window).scrollTop();
			if(scrollPos > 530) {
				$(".navArea").css({
					position: 'fixed',
					width: '100%',
					top: 0,
					zIndex: 999
				});
				$(".aboutMeArea").css('paddingTop', '40px');
			}else {
				$(".navArea, .aboutMeArea").removeAttr('style');
			}
		});
	}else {
		$(".navArea, .aboutMeArea").removeAttr('style');
	}
});	

    // position: fixed;
    // width: 100%;
    // top: 0;
    // z-index: 999;