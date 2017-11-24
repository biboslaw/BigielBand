$(document).ready(function () {

    
    
    
/////////// function declaration ///////////////    
    
    function menuSwitch() {
        
        var $wind = $(window).scrollTop();
        if (($(window).width() <= 768) && $wind < $('#logo').height()) {
            $('.nav').fadeOut();
            $('.mobileNav').fadeOut();
             console.log('blah');
        } else if(($(window).width() <= 768) && $wind >= $('#logo').height()){
            $('.nav').fadeOut();
            $('.mobileNav').fadeIn();
            console.log('blah2');
        } else if(($(window).width() > 768) && $wind >= $('#logo').height()){
            $('.nav').fadeIn();
            $('.mobileNav').fadeOut();
            console.log('blah3');
        } else {
            $('.nav').fadeOut();
            $('.mobileNav').fadeOut();
            console.log('blah4');
        };
    };

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('.nav li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.nav li a').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
            
            
            
        });
    };

    function menuChange(event) {
        event.preventDefault();
        var $wind = $(window);
        menuSwitch();
    };

    function scrollAbout(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 800);

        $('ul').find('#about').addClass('active');

    };

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        var elemHeightMid = $(elem).height() / 2;



        if (docViewBottom >= (elemTop + elemHeightMid)) {
            $(elem).removeClass('notViewed').addClass('viewed');
            var animElemLeft = $('.animBlock.notViewed').length;
            
        }
    }
    
    ////////// function calls ////



    $(document).on('scroll', onScroll);

    $('a').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
    
  /*  $(document).on('scroll', function(){
        if($(window).scrollTop() >= $('#logo').height() && $(window).width() <= 768){
                $('.mobileNav').fadeIn();
            } else {
                $('.mobileNav').fadeOut();
            }
            if($(window).scrollTop() >= $('#logo').height() && $(window).width() > 768){
                $('.nav').fadeIn();
            } else {
                $('.nav').fadeOut();
            };
    });

*/
    $(window).on('scroll', function(){
               menuSwitch();
    });
    menuSwitch();


    $('.mobileNav button').on('click', function () {
        $('.nav').slideToggle();

    });

    


    ////// animation code from ////////// 
    ////// https://designshack.net/articles/css/how-to-design-animated-sliding-page-elements-with-css ///////

    $(function () {
        var $blocks = $('.animBlock.notViewed');
        var $window = $(window);

        $window.on('scroll', function (e) {
            $blocks.each(function (i, elem) {
                if ($(this).hasClass('viewed'))
                    return;
                isScrolledIntoView($(this));
            });
        });
    });


});