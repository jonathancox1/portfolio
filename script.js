
function smoothScroll() {
    window.scroll({
        top: 2500,
        left: 0,
        behavior: 'smooth'
    });

    window.scrollBy({
        top: 100,
        left: 0,
        behavior: 'smooth'
    });

    document.querySelector('#email').scrollIntoView({
        behavior: 'smooth'
    });
};



$(window).on("load", function () {
    function fade() {
        var animation_height = $(window).innerHeight() * 0.25;
        var ratio = Math.round((1 / animation_height) * 10000) / 10000;
        $('.fade').each(function () {
            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();
            if (objectTop < windowBottom) {
                if (objectTop < windowBottom - animation_height) {
                    $(this).css({
                        transition: 'opacity 0.25s ease-in',
                        opacity: 1
                    });
                } else {
                    $(this).css({
                        transition: 'opacity 0.25s ease-out',
                        opacity: (windowBottom - objectTop) * ratio
                    });
                }
            } else {
                $(this).css('opacity', 0);
            }
        });
    }
    $('.fade').css('opacity', 0);
    fade();
    $(window).scroll(function () { fade(); });

    function imgLoad() {
        $('.me').css({
            transition: 'opacity 0.25s ease-in',
            opacity: 1
        })
    }
    $('')
    imgLoad();
});


// $(window).on("load", function () {
//     function slide() {
//         var animation_height = $(window).innerHeight() * .05;
//         var ratio = Math.round((1 / animation_height) * 10000) / 10000;
//         $('.slide').each(function () {
//             var objectTop = $(this).offset().top;
//             var windowBottom = $(window).scrollTop() + $(window).innerHeight();
//             if (objectTop < windowBottom) {
//                 if (objectTop < windowBottom - animation_height) {
//                     $(this).css({
//                         transition: 'left .5s ease-in',
//                         left: 0,
//                     })
//                 } else {
//                     $(this).css({
//                         // transition: 'left .5s ease-out',
//                         // left: (windowBottom - objectTop) * ratio
//                     });
//                 }
//             } else {
//                 $(this).css('left', 1000);
//             }
//         });
//     }
//     $('.slide').css('left', 1000);
//     slide();
//     $(window).scroll(function () { slide(); });
// });