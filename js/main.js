/**
*
* -----------------------------------------------------------------------------
*
* Template : TunHum Business template
* Author : compact-theme
* Author URI : http://thecodude.com/
*
* -----------------------------------------------------------------------------
*
**/

(function($) {
  "use strict";

  // sticky menu
  var header = $('.menu-sticky');
  var win = $(window);
  win.on('scroll', function() {
     var scroll = win.scrollTop();
     if (scroll < 150) {
         header.removeClass("sticky");
	   header.addClass("header2");
     } else {
         header.addClass("sticky");
	   header.removeClass("header2");
     }
  }); 

	//window load
	$(window).on( 'load', function() {
		//em menu
		if($(window).width() < 992) {
		  $('.em-menu').css('height', '0');
		  $('.em-menu').css('opacity', '0');
		  $('.em-menu-toggle').on( 'click', function(){
			 $('.em-menu').css('opacity', '1');
		 });
		}
	})

  $('.cart-icons').on('click', function(e) {
    $('.minicart-details').toggleClass("show-cartmenu"); 
    e.preventDefault();
  });	

   //canvas menu
    var navexpander = $('#nav-expander');
    if(navexpander.length){
        $('#nav-expander').on('click',function(e){
            e.preventDefault();
            $('body').toggleClass('nav-expanded');
        });
    }
    var navclose = $('#nav-close');
    if(navclose.length){
        $('#nav-close').on('click',function(e){
            e.preventDefault();
            $('body').removeClass('nav-expanded');
        });
    }

    $(".hamburger-menu-container ul li").on('click', function() {
        $(this).children('.sub-menu').slideToggle();
    });
  
  // onepage nav
  $(".navbar li").on("click", function () {
      if ($(".showhide").is(":visible")) {
          $(".showhide").trigger("click");
      }
  });

  if ($.fn.onePageNav) {
      $(".navbar").onePageNav({
          currentClass: "active"
      });
  }
	
  // collapse hidden
  $(function(){ 
       var navMain = $(".navbar-collapse"); // avoid dependency on #id
       // "a:not([data-toggle])" - to avoid issues caused
       // when you have dropdown inside navbar
       navMain.on("click", "a:not([data-toggle])", null, function () {
           navMain.collapse('hide');
       });
   });

  // video 
  if ($('.player').length) {
      $(".player").YTPlayer();
  }

	//Slide search bar
	if ($('.seach_bar').length) {
		$('.seach_bar').on("click", function (){
			$('.search_box').slideToggle();
		});
	}
    
  /*-------------------------------------
     OwlCarousel
     -------------------------------------*/
  $('.my-carousel').each(function() {
      var owlCarousel = $(this),
      loop = owlCarousel.data('loop'),
      items = owlCarousel.data('items'),
      margin = owlCarousel.data('margin'),
      stagePadding = owlCarousel.data('stage-padding'),
      autoplay = owlCarousel.data('autoplay'),
      autoplayTimeout = owlCarousel.data('autoplay-timeout'),
      smartSpeed = owlCarousel.data('smart-speed'),
      dots = owlCarousel.data('dots'),
      nav = owlCarousel.data('nav'),
      navSpeed = owlCarousel.data('nav-speed'),
      xsDevice = owlCarousel.data('mobile-device'),
      xsDeviceNav = owlCarousel.data('mobile-device-nav'),
      xsDeviceDots = owlCarousel.data('mobile-device-dots'),
      smDevice2 = owlCarousel.data('ipad-device2'),
      smDeviceNav2 = owlCarousel.data('ipad-device-nav2'),
      smDeviceDots2 = owlCarousel.data('ipad-device-dots2'),
      smDevice = owlCarousel.data('ipad-device'),
      smDeviceNav = owlCarousel.data('ipad-device-nav'),
      smDeviceDots = owlCarousel.data('ipad-device-dots'),
      mdDevice = owlCarousel.data('md-device'),
      mdDeviceNav = owlCarousel.data('md-device-nav'),
      mdDeviceDots = owlCarousel.data('md-device-dots');
      owlCarousel.owlCarousel({
          loop: (loop ? true : false),
          items: (items ? items : 4),
          lazyLoad: true,
          margin: (margin ? margin : 0),
          //stagePadding: (stagePadding ? stagePadding : 0),
          autoplay: (autoplay ? true : false),
          autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
          smartSpeed: (smartSpeed ? smartSpeed : 250),
          dots: (dots ? true : false),
          nav: (nav ? true : false),
          navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
          navSpeed: (navSpeed ? true : false),
          responsiveClass: true,
          responsive: {
              0: {
                  items: (xsDevice ? xsDevice : 1),
                  nav: (xsDeviceNav ? true : false),
                  dots: (xsDeviceDots ? true : false)
              },
              590: {
                  items: (smDevice2 ? smDevice : 2),
                  nav: (smDeviceNav2 ? true : false),
                  dots: (smDeviceDots2 ? true : false)
              },
              768: {
                  items: (smDevice ? smDevice : 3),
                  nav: (smDeviceNav ? true : false),
                  dots: (smDeviceDots ? true : false)
              },
              992: {
                  items: (mdDevice ? mdDevice : 4),
                  nav: (mdDeviceNav ? true : false),
                  dots: (mdDeviceDots ? true : false)
              }
          }
      });

  });

  /*-------------------------------------
      Fetuered Videos popup
  -------------------------------------*/
	var popupvideos = $('.popup-videos');
		if(popupvideos.length){
	       $('.popup-videos').magnificPopup({
           disableOn: 700,
           type: 'iframe',
           mainClass: 'mfp-fade',
           removalDelay: 160,
           preloader: false,
        });
	}

  // image popup
	var imaggepoppup = $('.image-popup');
	if(imaggepoppup.length){
		$('.image-popup').magnificPopup({
			type: 'image',
			callbacks: {
				beforeOpen: function() {
				   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated pulse');
				}
			},
			gallery: {
				enabled: true
			}
		});
	}

  /*-------------------------------------
      youtube popup js
  -------------------------------------*/
  $.fn.YouTubePopUp = function(options) {
    var YouTubePopUpOptions = $.extend({
            autoplay: 1
    }, options );
    $(this).on('click', function (e) {
        var youtubeLink = $(this).attr("href");
        if( youtubeLink.match(/(youtube.com)/) ){
            var split_c = "v=";
            var split_n = 1;
        }
        if( youtubeLink.match(/(youtu.be)/) || youtubeLink.match(/(vimeo.com\/)+[0-9]/) ){
            var split_c = "/";
            var split_n = 3;
        }
        var getYouTubeVideoID = youtubeLink.split(split_c)[split_n];

        var cleanVideoID = getYouTubeVideoID.replace(/(&)+(.*)/, "");

        if( youtubeLink.match(/(youtu.be)/) || youtubeLink.match(/(youtube.com)/) ){
            var videoEmbedLink = "https://www.youtube.com/embed/"+cleanVideoID+"?autoplay="+YouTubePopUpOptions.autoplay+"";
        }
        if( youtubeLink.match(/(vimeo.com\/)+[0-9]/) || youtubeLink.match(/(vimeo.com\/)+[a-zA-Z]/) ){
            var videoEmbedLink = "https://player.vimeo.com/video/"+cleanVideoID+"?autoplay="+YouTubePopUpOptions.autoplay+"";
        }
        $("body").append('<div class="YouTubePopUp-Wrap YouTubePopUp-animation"><div class="YouTubePopUp-Content"><span class="YouTubePopUp-Close"></span><iframe src="'+videoEmbedLink+'" allowfullscreen></iframe></div></div>');

        if( $('.YouTubePopUp-Wrap').hasClass('YouTubePopUp-animation') ){
            setTimeout(function() {
                $('.YouTubePopUp-Wrap').removeClass("YouTubePopUp-animation");
            }, 600);
        }
        $(".YouTubePopUp-Wrap, .YouTubePopUp-Close").on('click',function(){
            $(".YouTubePopUp-Wrap").addClass("YouTubePopUp-Hide").delay(515).queue(function() { $(this).remove(); });
        });
        e.preventDefault();
    });
  };
    
  //Accordion one Item always open
	var whychoose = $('.panel-heading a');
	if(whychoose.length){
		$('.panel-heading a').on('click',function(e){
			if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
				e.preventDefault();
				e.stopPropagation();
			}
		});
	}

  // wow init
  new WOW().init();

  // image loaded portfolio init
    $('.grid').imagesLoaded(function() {
        $('.portfolio-filter').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item',
            }
        });
    }); 

	// YouTubePopUp
	var popupvideo = $('.popup-video');
	   if(popupvideo.length){
       $(".popup-video").YouTubePopUp();
	}

	// Add smooth scrolling to Slider bottom links
	$("#next-down a").on('click', function(event) {	
		if (this.hash !== "") {
		  event.preventDefault();	
		  // Store hash
		  var hash = this.hash;
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 3000, function(){
			 window.location.hash = hash;
		  });
		}
	}); 
        
  // portfolio Filter
	var filterbutton = $('.portfolio-filter button');
	if(filterbutton.length){
		$('.portfolio-filter button').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});
	}
	
	//single product controlar
	var controlar = $('.controlar .btn:first-of-type');
	if(controlar.length){
		$('.controlar .btn:first-of-type').on('click', function() {
			$('.controlar input').val( parseInt($('.controlar input').val(), 10) + 1);
			});
			$('.controlar .btn:last-of-type').on('click', function() {
			$('.controlar input').val( parseInt($('.controlar input').val(), 10) - 1);
		});
	}
    
		
  // Counter Up 
  var rscounter = $('.em-counter');
	if(rscounter.length){
		$('.em-counter').counterUp({
			delay: 20,
			time: 1500
		});
	}

  var skillbarid = $('.skillbar');
	if(skillbarid.length){
    $('.skillbar').skillBars({
      from: 0,
      speed: 4000, 
      interval: 100,
      decimals: 0,
    });
  } 

  //Images Zoom
  var zoom_03_id = $('#zoom_03');
	if(zoom_03_id.length){
        $("#zoom_03").elevateZoom({gallery:'gal1', cursor: 'pointer', galleryActiveClass: 'active', imageCrossfade: true, loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'}); 
     
        $("#zoom_03").on("click", function(e) {  
            var ez =   $('#zoom_03').data('elevateZoom');	
            $.fancybox(ez.getGalleryList());
             return false;
        });
    } 

    // scrollTop init
    var totop = $('#scrollUp');    
    win.on('scroll', function() {
        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
	
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });
	
	// Google Map
	if ($('#g-map').length) {
		var mapProp= {
        center:new google.maps.LatLng(51.508742, -0.120850),
        zoom:5,
    };
    var map=new google.maps.Map(document.getElementById("g-map"),mapProp);
	}	
  
  /*-------------------------------------
        Home page main Slider
  -------------------------------------*/

  var owl = $('#main-slider');
  owl.owlCarousel({
      loop:true,
      margin:0,
      navSpeed:800,
      nav:true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      items:1,
      autoplay:true,
      transitionStyle : "fade",
  });
    
  //preloader
    $(window).on( 'load', function() {
        $("#loader-wrapper").delay(2000).fadeOut(500);
        $(".spinner").on( 'click', function() {
        $("#loader-wrapper").fadeOut(500);
        })
    });
        
    $('.back-top').on('click', function(){
       $('html, body').animate({scrollTop:0},2000); 
    });
  // add animate.css class(es) to the elements to be animated
  function setAnimation ( _elem, _InOut ) {
    var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    _elem.each ( function () {
      var $elem = $(this);
      var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );
      $elem.addClass($animationType).one(animationEndEvent, function () {
        $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
      });
    });
  }

  // Fired before current slide change
  owl.on('change.owl.carousel', function(event) {
      var $currentItem = $('.owl-item', owl).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-out]");
      setAnimation ($elemsToanim, 'out');
  });

  // Fired after current slide has been changed
  owl.on('changed.owl.carousel', function(event) {

      var $currentItem = $('.owl-item', owl).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-in]");
      setAnimation ($elemsToanim, 'in');
  })
})(jQuery);