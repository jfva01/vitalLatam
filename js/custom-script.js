
$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    //$('.modal').modal();
    //$('#modal1').modal('open');
	$(".button-collapse").sideNav({closeOnClick: true});
    $('.carousel.carousel-slider').carousel({fullWidth: true, indicators: true},setTimeout(autoplay, 4500));
	$('.parallax').parallax();
    $('.scrollspy').scrollSpy();
	$('a.scroll').click(function(e){
		e.preventDefault();
	   $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
	});    

    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4500);
    }

	$('input#input_text, textarea#textarea1').characterCounter();

    if ($("#navbar").length > 0){

        /* PAGE SCROLLING */
        var menu = $('#navbar');
        var contenedor = $('#menu-contenedor');
        var list = $('#list');
        var menu_offset = menu.offset();
        var link = $('.valign-wrapper');
        var button = $('.button-collapse');

        //Menu on scroll fixed
        $(window).on('scroll',function(){
            if($(window).scrollTop()>menu_offset.top){
                menu.addClass('fixed');
                menu.addClass('white');
                menu.removeClass('transparent');
                menu.removeClass('z-depth-0');
                menu.addClass('z-depth-1');
                link.addClass('blue-grey-text text-darken-1');
                button.addClass('teal-text');
                list.addClass('menuscroll');
            }else{
                menu.removeClass('fixed');
                menu.removeClass('white');
                link.removeClass('blue-grey-text text-darken-1');
                menu.addClass('transparent');
                menu.removeClass('z-depth-1');
                menu.addClass('z-depth-0');
                button.removeClass('teal-text');
                list.removeClass('menuscroll');
            }

        });
    
    };

    $('.tooltipped').tooltip({delay: 50});

});

$(document).ready(function(){
    $('a.scroll').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});