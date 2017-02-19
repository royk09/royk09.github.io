/**
 * Created by royk09 on 18.02.2017.
 */

$(document).ready(function() {
    $('.zoom').click(function () {
        var button = $(this);
        var img = (button.closest(".image").children("img"));
        var src = img.attr("src");
        $(".images-wrapper").append("<div class='popup-image'>" +
                                        "<img src='"+src+"' class='resize-image' />" +
                                    "</div>");
        $(".images-wrapper .popup-image").css({"position": "absolute",
            "top":"0",
            "display":"block",
            "top": "13px",
            "left": "13px",
        "z-index": "50"});
        $('.popup-image img').animate({'width': $(".images-wrapper").width()-28, 'height': $(".images-wrapper").height()-28}, 800);


        /**       $('.zoom').fadeOut(2000);
         $('.image').parent("").delay(0).animate({'width': '500px', 'height': '659px'}, 2000);
         });
         $('img').click(function() {
        $('#button p').text('Нажми меня');
        $('#button').fadeIn(2000);
        $('#wrapper img').fadeOut(2000, function () {
            $(this).css({'width': '0px', 'height': '0px'})
        });
    });
         }
         );
         */

    $(".popup-image").click(function(){    // Событие клика на затемненный фон
        $(".popup-image").fadeOut(1000);    // Медленно убираем всплывающее окно
        setTimeout(function() {    // Выставляем таймер
            $(".popup-image").remove(); // Удаляем разметку всплывающего окна
        }, 800);
    });
    });
});