// Navbar Scroll
$('.page-scroll').on('click', function (e) {
    var href = $(this).attr('href');
    var elemenHref = $(href);

    $('html,body').animate({
        scrollTop: elemenHref.offset().top - 50
    }, 750);

    e.preventDefault();
});

// Parallax
// $(window).scroll(function () {
//     // Jumbotron
//     var wScroll = $(this).scrollTop();

//     $('.jumbotron img').css({
//         'transform': 'translate(0px, ' + wScroll / 4 + '% )'
//     });

//     $('.jumbotron h1').css({
//         'transform': 'translate(0px, ' + wScroll / 2 + '% )'
//     });

//     $('.jumbotron p').css({
//         'transform': 'translate(0px, ' + wScroll / 1 + '% )'
//     });

//     // About
//     if (wScroll > $('.about').offset().top - 330) {
//         $('.about .gambarAbout').each(function (i) {
//             setTimeout(function () {
//                 $('.about .gambarAbout').eq(i).addClass('muncul');
//             }, 300 * i)
//         });
//     }

//     if (wScroll > $('.about').offset().top - 330) {
//         $('.about .pAbout').each(function (i) {
//             setTimeout(function () {
//                 $('.about .pAbout').eq(i).addClass('muncul');
//             }, 300 * i)
//         });
//     }

//     // Portfolio
//     if (wScroll > $('.portfolio').offset().top - 330) {
//         $('.portfolio .gambarPorto').each(function (i) {
//             setTimeout(function () {
//                 $('.portfolio .gambarPorto').eq(i).addClass('show');
//             }, 300 * i)
//         });
//     }

//     if (wScroll > $('.portfolio').offset().top - 280) {
//         $('.portfolio .pPorto').each(function (i) {
//             setTimeout(function () {
//                 $('.portfolio .pPorto').eq(i).addClass('show');
//             }, 300 * i)
//         });
//     }
// });