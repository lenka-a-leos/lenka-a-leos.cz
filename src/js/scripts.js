(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using anime.js
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                anime({
                    targets: 'html, body',
                    scrollTop: target.offset().top - 72,
                    duration: 1000,
                    easing: 'easeInOutExpo'
                });
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

		var decodeEntities = (function() {
				var element = document.createElement('div');

				function decodeHTMLEntities (str) {
						if(str && typeof str === 'string') {
								// strip script/html tags
								//str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
								//str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
								element.innerHTML = str;
								str = element.textContent;
								element.textContent = '';
						}

						return str;
				}

				return decodeHTMLEntities;
		})();
  
    // Make it a tiny bit harder to mine the emails
    $(document).ready(function() {
        var x = ["l", "ryvolova", "cz", "seznam", "&#46;", "&#64;", "jc", "leos"];
        var lenka = decodeEntities(x[1] + x[4] + x[0] + x[5] + x[3] + x[4] + x[2]);
        $(".lenka-email").attr("href", "mailto:" + lenka);
        $(".lenka-email").text(lenka);
        var leos = decodeEntities(x[7] + x[6] + x[5] + x[3] + x[4] + x[2]);
        $(".leos-email").attr("href", "mailto:" + leos);
        $(".leos-email").text(leos);
    });
})(jQuery); // End of use strict
