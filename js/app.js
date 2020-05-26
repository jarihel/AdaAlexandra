let diseñador="\nDISEÑADOR:\n///////////////////////////////////////////////////////\n//  _   _   _                                   ___  //\n// ||X  X|--||  ||XXX|XX ||--  XX  ||   ||   -- X || //\n// || XX||||||  ||---|| X|||| XXXX ||   ||   ||  X   //\n// ||   |||||XXX||XXX||  X|||XX  XX||XXX||XXX||||_X  //\n//                                                   //\n///////////////////////////////////////////////////////";console.log(diseñador)
const doc = document;
/*----------------------------------------------------*/
/* Quote Loop
------------------------------------------------------ */

function fade($ele) {
    $ele.fadeIn(1000).delay(3000).fadeOut(1000, function () {
        var $next = $(this).next('.quote');
        fade($next.length > 0 ? $next : $(this).parent().children().first());
    });
}
fade($('.quoteLoop > .quote').first());


/*----------------------------------------------------*/
/* Navigation
------------------------------------------------------ */

$(window).scroll(function () {

    if ($(window).scrollTop() > 300) {
        $('.main_nav').addClass('sticky');
    } else {
        $('.main_nav').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function () {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.main_nav').removeClass('open-nav');
    } else {
        $('.main_nav').addClass('open-nav');
    }
});

$('.main_nav li a').click(function () {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_nav').removeClass('open-nav');
    }
});


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

jQuery(document).ready(function ($) {

    $('.smoothscroll').on('click', function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
            window.location.hash = target;
        });
    });

});


TweenMax.staggerFrom(".heading", 0.8, { opacity: 0, y: 20, delay: 0.2 }, 0.4);


/*----------------------------------------------------*/
/* galery
------------------------------------------------------ */

const wraper = doc.querySelector(".wraper");
const img_area = doc.querySelector(".img-area");
const box = doc.querySelectorAll(".img");

const box1 = doc.querySelector("#box-1");



img_area.addEventListener("mouseenter", () => {
box.forEach((e, i) => {
        let elemento = e.parentElement.parentElement;
        elemento.classList.remove(`box-${i+1}`);
        elemento.classList.add(`box-${i+1}b`)
    })
})
img_area.addEventListener("mouseleave", () => {
   box.forEach((e, i) => {
        let elemento = e.parentElement.parentElement;
        elemento.classList.add(`box-${i+1}`);
        elemento.classList.remove(`box-${i+1}b`)
    })
})


/*----------------------------------------------------*/
/* scroll-down
------------------------------------------------------ */
const scrol = doc.querySelector(".scroll-down");
scrol.addEventListener("mouseenter", () => {
    navbar.classList.add("transp");
})

scrol.addEventListener("mouseout", () => {
    navbar.classList.remove("transp");
})

/*----------------------------------------------------*/
/* menu
------------------------------------------------------ */

//////////////////////////////////////////

const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
const navbar = doc.querySelector(".navbar");

menuOpen.addEventListener("click", () => {
    overlay.classList.add("overlay--active");
    navbar.classList.add("none");
});

menuClose.addEventListener("click", () => {
    overlay.classList.remove("overlay--active");
    navbar.classList.remove("none");
});




