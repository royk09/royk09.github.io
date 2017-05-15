/**
 * Created by admin on 28.04.2017.
 */
(function ($) {
    var hwSlideSpeed = 2000;
    var hwTimeOut = 5000;
    var hwNeedLinks =true;

    $(document).ready(function(e) {
        $('.slide').hide().eq(0).show();
        $('.slide-title').hide().eq(0).show();

        var slideNum = 0;
        var slideTime;
        var slideCount = $('.slide-wrapper').length;

        var animSlide = function(arrow){

            clearTimeout(slideTime);
            if(arrow == 'next'){

                hideSlide();
                if(slideNum == (slideCount-1)){slideNum=0;}
                else{slideNum++}

                showSlide();
            }
            else if(arrow == 'prew')
            {
                hideSlide();
                if(slideNum == 0){slideNum=slideCount-1;}
                else{slideNum-=1}
                showSlide();
            }
            else{
                slideNum = arrow;
            }


        }
        function showSlide() {
            $('.slide').eq(slideNum).stop(true, true).fadeIn(hwSlideSpeed);
            $('.slide-title').eq(slideNum).stop(true, true).show('slide', {'direction':'left'}, hwSlideSpeed, rotator);

          //  return false;
            //show(hwSlideSpeed,  rotator)}, 1);
        }
        function hideSlide() {
            $('.slide').eq(slideNum).stop(true, true).fadeOut(hwSlideSpeed/2);
            $('.slide-title').eq(slideNum).stop(true, true).hide('slide', {'direction':'right'}, hwSlideSpeed/2);
          //  return false;
        }
        if(hwNeedLinks){
            var $linkArrow = $('<a class="nav-button" id="prewbutton" href="#"><img src = "./images/button.png" /></a><a class="nav-button" id="nextbutton" href="#"><img src = "./images/button.png" /></a>')
                .prependTo('.slider');
            $('.nav-button').css({
                position: 'absolute',
                'z-index': '10',
                opacity: '.4'
            });
            $('#prewbutton').css({
                bottom: '6px',
                left: '9px'
            });
            $('#nextbutton').css({
                bottom: '10px',
                right: '9px',
                transform: 'rotate(180deg)',
                '-moz-transform': 'rotate(180deg)',
                '-ms-transform': 'rotate(180deg)',
                '-webkit-transform': 'rotate(180deg)',
                '-o-transform': 'rotate(180deg)'
            });

            $('#nextbutton').click(function(){

                animSlide('next');
                return false;
            })
            $('#prewbutton').click(function(){

                animSlide('prew');
                return false;
            })
            $('#nextbutton, #prewbutton').hover(
                function () {
                    $(this).css({"opacity": "1",
                    });
        },
            function () {
                $(this).css({"opacity": ".4"});
            }

        );
        }

        var pause = false;
        var rotator = function(){
            if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
        }
        $('.slide-wrapper').hover(
            function(){clearTimeout(slideTime); pause = true;},
            function(){pause = false; rotator();
            });

        rotator();
    });
})(jQuery);