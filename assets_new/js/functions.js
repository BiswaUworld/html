// Menu change on scroll down
$(window).on("scroll", function() {
    if($(window).scrollTop() > 0) {
        $("header").addClass("small");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("header").removeClass("small");
    }
});

// Mobile menu
$(document).on('click', '.mobilemenu-icon', function () {
    $('.mobilemenu').toggle();
    $('header').toggleClass('mobile');
    $('.mobilemenu-icon').toggleClass('ic-menu ic-close');
});

$(document).on('click', '.mobilemenu .menu-wrap ul.main-items li a.has-child', function () {
    $(this).find('.menu-expand').toggleClass('collapse');
    $(this).next('.sub-items').toggle();
});

$(document).on('click', '.usertab .user', function () {
    $('.usertab').toggleClass('active');
});
$(document).on("click", function(e) {
    if ($(e.target).is('.usertab, .user, .useraccess') === false) {
      $(".usertab").removeClass('active');
    }
});

// Scroll to top
$(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
        $('.scroll-top').fadeIn();
    } else {
        $('.scroll-top').fadeOut();
    }
});
$(document).on('click', '.scroll-top', function () {
    //1 second of animation time
    $('html, body').animate({scrollTop: 0}, 0);
});

// Popup-modal
$(document).on('click', '.service-holder', function () {

    var image = $(this).attr('data-image');
    var title = $(this).attr('data-title');
    var desc = $(this).attr('data-desc');

    $('.popup').css('display', 'block');

    $('.popup').find('.popup-head').html(title);
    $('.popup').find('.popup-image').html('<img src="' + image + '" />');
    $('.popup').find('.popup-desc').html(desc);

    $("body").addClass("stop-scroll");

});
$(document).on('click', '.popup .close', function () {
    $(this).parents('.popup').css('display', 'none');
    $('.popup').find('.popup-head').html('');
    $('.popup').find('.popup-image').html('');
    $('.popup').find('.popup-desc').html('');
    $("body").removeClass("stop-scroll");
});