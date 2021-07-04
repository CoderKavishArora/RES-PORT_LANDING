$(document).ready(function() {
    $(".name, .student, .small-intro, .name-mob").lettering();

    // IMAGES OVERLAY EFFECT

    anime({
        targets: '.home .person-overlay',
        translateX: 1100,
        delay: 1000,
        duration: 1500,
        easing: 'easeInSine',
    });

    anime({
        targets: '.home .person img',
        opacity: '1',
        delay: 1500,
        duration: 1500,
        easing: 'easeInSine',
    });

    //LEARING

    anime({
        targets: '.student span',
        opacity: 1,
        duration: 1500,
        easing: 'easeInSine',
        delay: anime.stagger(100, {
            start: 3000
        }),
    });

    //NAME _ FADE IN

    anime({
        targets: '.name span',
        opacity: 1,
        duration: 3000,
        easing: 'easeInSine',
        delay: anime.stagger(100, {
            start: 4500
        }),
    });
    anime({
        targets: '.name-mob span',
        opacity: 1,
        duration: 3000,
        easing: 'easeInSine',
        delay: anime.stagger(100, {
            start: 4500
        }),
    });


    // NAME 2ND ANIMAITON UP AND DOWN LETTERS

    anime({
        targets: '.name .char2, .name .char4',

        keyframes: [{
            translateY: 100,
            duration: 1500,
        }],
        easing: 'easeInOutExpo',
        delay: 8000,
    })
    anime({
        targets: '.name .char3, .name .char5',

        keyframes: [{
            translateY: -100,
            duration: 1500,
        }],
        easing: 'easeInOutExpo',
        delay: 8000,
    });

    // LOGO

    anime({
        targets: '.logo',
        opacity: 1,
        duration: 3000,
        delay: 9500,
    })

    // MENU ICON OF MOBILE //
    anime({
        targets: '.menu .tgle-lbl',
        opacity: 1,
        duration: 2000,
        delay: anime.stagger(150, {
            start: 10500
        })
    });

    anime({
        targets: '.menu li',
        opacity: 1,
        duration: 3000,
        delay: anime.stagger(150, {
            start: 10500
        })
    });
    anime({
        targets: '.small-intro span',
        opacity: 1,
        duration: 1000,
        delay: anime.stagger(50, {
            start: 11000
        })
    });


});




var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("jsnavbar").style.top = "0";
    } else {
        document.getElementById("jsnavbar").style.top = "-120px";
    }
    prevScrollpos = currentScrollPos;
};

window.addEventListener("scroll", function() {
    var header = document.getElementById("jsnavbar");
    header.classList.toggle("sticky", window.scrollY > 0);
})