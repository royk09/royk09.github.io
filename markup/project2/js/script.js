/**
 * Created by royk09 on 18.02.2017.
 */

$(document).ready(function() {
    $(".zoom").click(function () {
        var button = $(this);
        var img = (button.closest(".image").children("img"));
        var src = img.attr("src");
        $(".images-wrapper").append("<div class='popup-image'>" +
                                        "<span class='close'><i class='fa fa-times' aria-hidden='true'></i></span>" +
                                    "</div>");
        $(".images-wrapper .popup-image").css({"position": "absolute",
            "display":"block",
            "background": "url(" + src + ") no-repeat center",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
            "top": "11px",
            "left": "11px",
            "border": "2px solid #999999",
            "z-index": "50"});
        $(".popup-image .close").css({
            "position": "absolute",
            "z-index": "51",
            "color": "#fff",
            "right":"20px",
            "top": "-14px",
            "background": "#25a6f7",
            "font-size": "10px",
            "padding": "8px 10px",
            "cursor": "pointer"
        });
        $(".popup-image").animate({"width": $(".images-wrapper").width()-30, "height": $(".images-wrapper").height()-30}, 400);
        $(".content").animate({"opacity": "0.1"},400);


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

    $(".close").click(function(){    // Событие клика на затемненный фон
        $(".popup-image").fadeOut(1000);    // Медленно убираем всплывающее окно
        $(".content").animate({"opacity": "1"},1000);
        setTimeout(function() {    // Выставляем таймер
            $(".popup-image").remove(); // Удаляем разметку всплывающего окна
        }, 1000);
    });
    });
});