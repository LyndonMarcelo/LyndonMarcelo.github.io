/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Footer.
		breakpoints.on('<=medium', function() {
			$footer.insertAfter($main);
		});

		breakpoints.on('>medium', function() {
			$footer.appendTo($header);
		});

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				breakpoints.on('<=medium', function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				breakpoints.on('>medium', function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}

	// Main Sections: Two.

		// Lightbox gallery.
			$window.on('load', function() {

				$('#two').poptrox({
					caption: function($a) { return $a.next('h3').text(); },
					overlayColor: '#2c2c2c',
					overlayOpacity: 0.85,
					popupCloserText: '',
					popupLoaderText: '',
					selector: '.work-item a.image',
					usePopupCaption: true,
					usePopupDefaultStyling: false,
					usePopupEasyClose: false,
					usePopupNav: true,
					windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				});

			});


			//ARA================================================

			$('#ARA2').hide();
			$('#ARA3').hide();

			ARAbtn1.addEventListener('click', () => {
				$('#ARA1').show();
				$('#ARA2').hide();
				$('#ARA3').hide();
				
			})

			ARAbtn2.addEventListener('click', () => {
				$('#ARA1').hide();
				$('#ARA2').show();
				$('#ARA3').hide();
				
			})

			ARAbtn3.addEventListener('click', () => {
				$('#ARA1').hide();
				$('#ARA2').hide();
				$('#ARA3').show();
				
			})

			//=====================================================

			$('#SL2').hide();
			$('#SL3').hide();
			$('#SL4').hide();
			$('#SL5').hide();

			SLbtn1.addEventListener('click', () => {
				$('#SL1').show();
				$('#SL2').hide();
				$('#SL3').hide();
				$('#SL4').hide();
				$('#SL5').hide();
				
			})

			SLbtn2.addEventListener('click', () => {
				$('#SL1').hide();
				$('#SL2').show();
				$('#SL3').hide();
				$('#SL4').hide();
				$('#SL5').hide();
				
			})

			SLbtn3.addEventListener('click', () => {
				$('#SL1').hide();
				$('#SL2').hide();
				$('#SL3').show();
				$('#SL4').hide();
				$('#SL5').hide();
				
			})

			SLbtn4.addEventListener('click', () => {
				$('#SL1').hide();
				$('#SL2').hide();
				$('#SL3').hide();
				$('#SL4').show();
				$('#SL5').hide();
				
			})

			SLbtn5.addEventListener('click', () => {
				$('#SL1').hide();
				$('#SL2').hide();
				$('#SL3').hide();
				$('#SL4').hide();
				$('#SL5').show();
				
			})


			//=====================================================

			$('#CA2').hide();
			$('#CA3').hide();


			CAbtn1.addEventListener('click', () => {
				$('#CA1').show();
				$('#CA2').hide();
				$('#CA3').hide();

			})

			CAbtn2.addEventListener('click', () => {
				$('#CA1').hide();
				$('#CA2').show();
				$('#CA3').hide();
				
			})

			CAbtn3.addEventListener('click', () => {
				$('#CA1').hide();
				$('#CA2').hide();
				$('#CA3').show();

				
			})


			//=====================================================

			$('#DS2').hide();

			DSbtn1.addEventListener('click', () => {
				$('#DS1').show();
				$('#DS2').hide();

			})

			DSbtn2.addEventListener('click', () => {
				$('#DS1').hide();
				$('#DS2').show();

			})

			


			

})(jQuery);