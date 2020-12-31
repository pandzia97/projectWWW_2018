    $(window).on('resize', function () {
        
        
        $(".parallax-window--video").parallax('destroy');
        $(".parallax-window--video").parallax({ afterDestroy : function(){
                console.log($('.parallax-window--video'));
                return $('.parallax-window--video').parallax({src: '../../images/pexels-photo-258804.jpeg'});
          }});
                $(".parallax-window--video").parallax({ afterRefresh : function(){
                console.log($('.parallax-window--video'));
              return $('.parallax-window--video').parallax({src: '../../images/pexels-photo-258804.jpeg'});
            }});
    });


    $(document).ready(function () {

        $(".parallax-window--video").parallax({src: '../../images/pexels-photo-258804.jpeg'});
        
        // menu-icon
        $('#button-hamburger').click(function () {
            $(this).toggleClass('open');
        });

        $("#button-hamburger").on("click", function () {
            $("#navbar-menu").toggleClass('show');
        });

        // object-fit
        var userAgent, ieReg, ie;
        userAgent = window.navigator.userAgent;
        ieReg = /msie|Trident.*rv[ :]*11\./gi;
        ie = ieReg.test(userAgent);

        if (ie) {
            $(".ie-fit").each(function () {
                var $container = $(this),
                    imgUrl = $container.find("img").prop("src");
                if (imgUrl) {
                    $container.css("backgroundImage", 'url(' + imgUrl + ')').addClass("custom-object-fit");
                }
            });
        }
        // fancybox
        $('[data-fancybox]').fancybox({
            protect: true
        });

        $(window).scroll(function () {
            $('.section-title').each(function (i) {
                var top_of_element = $(this).position().top;
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > top_of_element) {
                    $(this).animate({
                        'opacity': '1',
                        'bottom': '0',
                    }, 1000);
                }
            });
        });

         $('a[href*="#"]').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 1500, 'linear');
        });

        $('.main-menu a[href*="#"]').on('click', function (e) {
            e.preventDefault();
            $( "#button-hamburger" ).trigger( "click" );
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 1500, 'linear');
        });


        $('.scroll-top').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 2500, 'swing');
        });


    });
