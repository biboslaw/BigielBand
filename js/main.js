$(document).ready(function () {

    var quotes = {
        
        quote0:{"q":"Serdecznie polecamy zespół!!! Goście weselni byli zachwyceni, bawili się do białego rana:) Impreza prowadzana profesjonalnie, tak jak nam zależało. Dziękujemy i GORĄCO POLECAMY!!!", "a":"Natalia Miłoch"},
        quote1:{"q":"Taaaaaak się tańczy jak Bigiel gra! WYŚMIENITY Zespół, doskonała muza! Polecamy! Polecamy! ... i jeszcze raz polecamy! Monia, Dawid i 130 gości weselnych :) Dzięki Panowie! Jesteście The Best!", "a":"Monika Sobota"},
        quote2:{"q":"Zabaw z zespołem Bigiel Band przynosi niezapomniane wrażenia ;p Wszyscy gości weselni świetnie się bawili. Muzyka na wysokim poziomie... nawet największego 'gniotka' zaaranżują, że szczeny opadają ;) POLECAMY SERDECZNIE!!!! Sabina i Mateusz.", "a":"Sabi Naser"},
        quote3:{"q":"W imieniu wesela Anny i Łukasza, dziękujemy za świetną zabawę! Wszyscy Goście jak i Para Młoda bawili się wyśmienicie, wybór utworów a przede wszystkim (!!!) ich wykonania i aranże genialne :) dziękujemy Szymonowi, Sebastianowi, Markowi oraz Krzysztofowi :)", "a":"Jagoda Supernak-Koziarska"},
        quote4:{"q":"(...)Najlepsza kapela na wesele ever! Muzyka świetna, podobała się każdemu (bez przesady - wszyscy goście niezależnie od wieku Was chwalili), zabawy weselne z żartem i ze smakiem, świetna atmosfera a do tego pełny profesjonalizm i dobry humor. Dziękujemy i polecamy wszystkim wesele z Biglami:)))", "a":"Marysia Poloczek"},
        quote5:{"q":"Serdecznie dziękujemy za rewelacyjną zabawę podczas Naszego przyjęcia weselnego. Goście byli zachwyceni... i My też ;D Świetne i w pełni profesjonalne prowadzenie całej imprezy !!! Nieszablonowo, z pomysłem i super humorem, tak potrafi tylko Bigiel Band !!! POLECAMY GORĄCO", "a":"Aneta & Paweł"}
        
    };
    
    
    var iframeYT = ["https://www.youtube.com/embed/H4ZTGK7UtxA",
                    "https://www.youtube.com/embed/JFxS2w69SPk",
                    "https://www.youtube.com/embed/GqVITtIrlzo",
                    "https://www.youtube.com/embed/HKPTObTrqik",
                    "https://www.youtube.com/embed/MMrb-tFJm1I", 
                    "https://www.youtube.com/embed/uJ7tq54cbMk",
                    "https://www.youtube.com/embed/wUkXnh_5RsU",
                    "https://www.youtube.com/embed/aUxw4hSDy8M",
                    "https://www.youtube.com/embed/yiHCukJpphM",
                    "https://www.youtube.com/embed/q-31pF4wm5I",
                    "https://www.youtube.com/embed/1KtgENqxz7g",
                    "https://www.youtube.com/embed/_PcaghQdbf0",
                    "https://www.youtube.com/embed/v50HKtFHLdU",
                    "https://www.youtube.com/embed/vLxognTsvyg",
                    "https://www.youtube.com/embed/Zsc-CcyShZY",
                    "https://www.youtube.com/embed/0H8U7mtJiyc",
                    "https://www.youtube.com/embed/NqJgVS6G_Xk",
                    "https://www.youtube.com/embed/Gob6mt7f4Is",
                    "https://www.youtube.com/embed/rC_9OIGu0D4"
                    
        
    ]
        var randomize;
        var rand;
        var randomize2;
        var rand2;
        var iframeYT2 = JSON.parse(JSON.stringify(iframeYT));
        var elem = 0;
/////////// function declaration ///////////////    
    
    function randomQuote(){
        randomize = Math.floor(Math.random()*10);
        while (randomize>5&&randomize<10){
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
       if(!$('.quote1').hasClass('slideEffect')){
           $('.quote1').addClass('slideEffect');
       };
       rand = randomQuote();
       $('.quote1').children('p').html(rand["q"]);
       $('.quote1').children('h3').html(rand["a"]);
   }
    
    function randomVideo (elem) {
        randomize2 = Math.floor(Math.random()*(19-elem));
        return randomize2;
    }
   
    function fillVideo () {
        
        
        $('iframe').animate({opacity: '0'}).each(function(){
            
            rand2 = randomVideo(elem);
            $(this).attr('src', iframeYT2[rand2]);
            iframeYT2.splice(rand2,1);
            elem++;
            
        }).delay(100).animate({opacity: '1'});
        if (iframeYT2.length<5){
            iframeYT2 = JSON.parse(JSON.stringify(iframeYT));
            elem = 0;
        };
    };
    
    
        
   
    
    ////////// function calls ////
    $('.centerDiv img').delay(1000).fadeIn(1000);
    
    $('.arrow').delay(3000).fadeIn();

   $('.refresh').on('click', fillVideo);
    
    fillQuote();

    setInterval(fillQuote, 15000);
   

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