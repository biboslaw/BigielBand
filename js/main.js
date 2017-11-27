$(document).ready(function () {

    var quotes = {
        
        quote0:{"q":"Serdecznie polecamy zespół!!! Goście weselni byli zachwyceni, bawili się do białego rana:) Impreza prowadzana profesjonalnie, tak jak nam zależało. Dziękujemy i GORĄCO POLECAMY!!!", "a":"Natalia Miłoch"},
        quote1:{"q":"Taaaaaak się tańczy jak Bigiel gra! WYŚMIENITY Zespół, doskonała muza! Polecamy! Polecamy! ... i jeszcze raz polecamy! Monia, Dawid i 130 gości weselnych :) Dzięki Panowie! Jesteście The Best!", "a":"Monika Sobota"},
        quote2:{"q":"100% muzyki + 100% zaangażowania +100% radości= 300% satysfakcji ;))))))", "a":"Danka Plotnik"},
        quote3:{"q":"Zabaw z zespołem Bigiel Band przynosi niezapomniane wrażenia ;p Wszyscy gości weselni świetnie się bawili. Muzyka na wysokim poziomie... nawet największego 'gniotka' zaaranżują, że szczeny opadają ;) POLECAMY SERDECZNIE!!!! Sabina i Mateusz.", "a":"Sabi Naser"},
        quote4:{"q":"W imieniu wesela Anny i Łukasza, dziękujemy za świetną zabawę! Wszyscy Goście jak i Para Młoda bawili się wyśmienicie, wybór utworów a przede wszystkim (!!!) ich wykonania i aranże genialne :) dziękujemy Szymonowi, Sebastianowi, Markowi oraz Krzysztofowi :) ps. Konik na biegunach rządzi !:)", "a":"Jagoda Supernak-Koziarska"},
        quote5:{"q":"(...)Najlepsza kapela na wesele ever! Muzyka świetna, podobała się każdemu (bez przesady - wszyscy goście niezależnie od wieku Was chwalili), zabawy weselne z żartem i ze smakiem, świetna atmosfera a do tego pełny profesjonalizm i dobry humor. Dziękujemy i polecamy wszystkim wesele z Biglami:)))", "a":"Marysia Poloczek"},
        quote6:{"q":"Serdecznie dziękujemy za rewelacyjną zabawę podczas Naszego przyjęcia weselnego 　 Goście byli zachwyceni... i My też ;D Świetne i w pełni profesjonalne prowadzenie całej imprezy !!! Nieszablonowo, z pomysłem i super humorem, tak potrafi tylko Bigiel Band !!! POLECAMY GORĄCO", "a":"Aneta & Paweł"}
        
    };
        var randomize;
        var rand;
    
    
/////////// function declaration ///////////////    
    
    function randomQuote(){
        randomize = Math.floor(Math.random()*10);
        while (randomize>6&&randomize<10){
            randomize = Math.floor(Math.random()*10);
        }
        randomize = "quote" + randomize;
        return quotes[randomize];
    }    
        
    
    
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
            $(elem).removeClass('notViewed').addClass('viewed').fadeIn();
            var animElemLeft = $('.animBlock.notViewed').length;
            
        }
    }
    
    function fillQuote() {
       
       rand = randomQuote();
       $('.quote1').children('p').html(rand["q"]);
       $('.quote1').children('h3').html(rand["a"]);
   }
    
    ////////// function calls ////

   
    fillQuote();

    setInterval(fillQuote, 9000);
   

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