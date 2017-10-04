import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';
import '../../../node_modules/slick-carousel/slick/slick.min.js';
import './script.js';

$(document).foundation();

$(document).ready(function(){

// header__nav hover..................
    
if (parseInt($(window).width()) > 1024) {
    
	$('.header__nav-menu-item').mouseenter(function(event) {
		$('.header__nav-menu-link').removeClass('header__nav-menu-link--active');
		$(this).children('.header__nav-menu-link').addClass('header__nav-menu-link--active');
		$('.header__nav-dropdown').hide();
		var selectTab = $(this).children('.header__nav-menu-link').attr('href');
		$(selectTab).stop().css('display', 'flex').hide().fadeIn();
	});

	$('.header__nav-menu').mouseleave(function(event) {
		$('.header__nav-menu-link').removeClass('header__nav-menu-link--active');
		$('.header__nav-dropdown').slideUp();
	});
}

// header__nav hover..................end


// mobile__nav hover..................

if (parseInt($(window).width()) < 1024) {
    $('.header__nav-menu-item:not(:last-child)').click( function() {
    	$(this).toggleClass('header__nav-menu-item--active');
    	var findList = $(this).find('.header__nav-mobile-menu');
    	// находим родителя, для избежания конфликтов при наличии более одного аккордиона
    	var findWrapper = $(this).closest('.header__nav-menu');

    	if (findList.is(':visible')) {
    		findList.hide();
    	} else {
    		findWrapper.find('.header__nav-mobile-menu').slideUp();
    		$('.header__nav-menu-item').removeClass('header__nav-menu-item--active');
    		$(this).addClass('header__nav-menu-item--active');
    		findList.slideDown();
    	}
    });  
}

// mobile__nav hover..................end 


// fixed menu....................

var fixedMenu = function () {
    var sticky = $('.header__nav');
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 1) {
        sticky.addClass('header__nav--fixed');
    } else {
        sticky.removeClass('header__nav--fixed');
    }
};

fixedMenu();
$(window).scroll(fixedMenu);

// fixed menu.....................end


// slick..........................

$('.header__info-slider').slick({
	arrows: false,
    dots: true,	
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
     responsive: [
    {
      breakpoint: 640,
      settings: {
        dots: false,
        autoplay: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        autoplay: false
      }
    },
    {
      breakpoint: 320,
      settings: {
        dots: false,
        autoplay: false
      }
    }
  ]
});

$('.testimonial__slider').slick({
	dots: true,
	arrows: false,
	infinity: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
	{
		breakpoint: 1024,
		  settings: {
		    slidesToShow: 2,
		    slidesToScroll: 2,
		    infinite: true,
		  }
	},
	{
		breakpoint: 640,
		  settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    infinite: true,
		  }
	},
	
  ]
});

// slick..........................end


// hamburger......................

$('.hamburger').click(function(e) {
	e.preventDefault();
	$(this).toggleClass('open');
	$('.main-navigation').toggleClass('open');
});

// hamburger......................end


// tabs...........................

$('.tabs__info:first').show();
$('.tabs__menu-link:first').addClass('tabs__menu-link--active');

$('.tabs__menu-link').click(function(event) {
	event.preventDefault();
	$('.tabs__menu-link').removeClass('tabs__menu-link--active')
	$(this).addClass('tabs__menu-link--active');
	$('.tabs__info').hide();

	var selectTab = $(this).attr('href');
	$(selectTab).fadeIn();
});

// tabs...........................end


});