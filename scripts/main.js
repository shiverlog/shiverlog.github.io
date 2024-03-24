
// Templates load
function loadComponent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

// Slide switch
// function toggleButton(button) {
//     var playBtn = document.querySelector('.play-btn');
//     var pausedBtn = document.querySelector('.paused-btn');
//     var activeButton = document.querySelector('.btn-wrap .active');
    
//     if (activeButton === playBtn) {
//         playBtn.classList.remove('active');
//         pausedBtn.classList.add('active');
//     } else if (activeButton === pausedBtn) {
//         pausedBtn.classList.remove('active');
//         playBtn.classList.add('active');
//     }
// }

// Chevron switch
$(document).ready(function() {
    console.log("JQuery Start");
    
    // backgrounds
    var backgrounds = [
        'linear-gradient(to right bottom, rgba(220, 20, 60, 0.2), rgba(255, 127, 80, 0.2)), url("/img/slide_1.jpg")',
        'linear-gradient(to right bottom, rgba(220, 20, 60, 0.2), rgba(255, 127, 80, 0.2)), url("/img/slide_2.jpg")',
        'linear-gradient(to right bottom, rgba(220, 20, 60, 0.2), rgba(255, 127, 80, 0.2)), url("/img/slide_3.jpg")',
        'linear-gradient(to right bottom, rgba(220, 20, 60, 0.2), rgba(255, 127, 80, 0.2)), url("/img/slide_4.jpg")',
        'linear-gradient(to right bottom, rgba(220, 20, 60, 0.2), rgba(255, 127, 80, 0.2)), url("/img/slide_5.jpg")'
    ];

    // title
    var title = [
        '<h2 class="slide-title" data-in-effect="pulse"><span class="title-lg">Journey</span><span class="title-s">Towards</span><span class="title-lg">DevOps Developer</span></h2>',
        '<h2 class="slide-title" data-in-effect="bounceDown"><span class="title-lg">To Shine as a Developer<span class="title-s">in the</span><span class="title-lg">Industry</span></h2>',
        '<h2 class="slide-title" data-in-effect="rotateIn"><span class="title-lg"><span class="title-lg">Here\'s My Development Stack</span></h2>',
        '<h2 class="slide-title" data-in-effect="rollIn"><span class="title-lg">I\'ve Studied These</span></h2>',
        "I'm a Biggest Dreamer",
        "I'm a Great Web Developer",
        "I Will Grow Into a DevOps Engineer",
        "I Want to Start With You."
    ];

    // Default
    $('input[data-slide-index="0"]').prop('checked', true);
    //$('.hero').css('background-image', backgrounds[0]);

    $(".chevron-wrap").slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: true,
        prevArrow: $('.left-btn'),
        nextArrow: $('.right-btn')
    });

    $('.left-btn').click(function() {
        $('.chevron-wrap').slick('slickPrev');
    });
    $('.right-btn').click(function() {
        $('.chevron-wrap').slick('slickNext');
    });

    $('.play-btn').click(function() {
        $('.paused-btn').addClass('active');
        $(this).removeClass("active");
        $('.chevron-wrap').slick('slickPlay')
    });

    $('.paused-btn').click(function() {
        $('.play-btn').addClass('active');
        $(this).removeClass('active');
        $('.chevron-wrap').slick('slickPause')
    });

    $('input[name="radio-group"]').on('change', function() {
        var slideIndex = parseInt($(this).attr('data-slide-index'));
        $('.slick-slider').slick('slickGoTo', slideIndex);
    });

    $('.slick-slider').on('afterChange', function(event, slick, currentSlide) {
        $('input[name="radio-group"]').eq(currentSlide).prop('checked', true);
    //console.log(currentSlide);
    changeSlide(currentSlide);
    });

    function changeSlide(slideNumber) {
        console.log(slideNumber);
        //empty
        $('.chevron_1, .chevron_2, .chevron_3, .chevron_4').empty();
        $('.slide-title').insertBefore('.hero');
        if (slideNumber === 0) {
            $('<div class="chevron-image"></div>').css('background-image', backgrounds[0]).appendTo('.chevron-contents');
            $('.chevron_1').append(title[0]);
        } else if (slideNumber === 1) {
            $('<div class="chevron-image"></div>').css('background-image', backgrounds[1]).appendTo('.chevron-contents');
            $('.chevron_2').append(title[1]);
        } else if (slideNumber === 2) {
            $('<div class="chevron-image"></div>').css('background-image', backgrounds[2]).appendTo('.chevron-contents');
            $('.chevron_3').append(title[2]);
        } else if (slideNumber === 3) {
            $('<div class="chevron-image"></div>').css('background-image', backgrounds[3]).appendTo('.chevron-contents');
            $('.chevron_4').append(title[3]);
        } else if (slideNumber === 4) {
            $('<div class="chevron-image"></div>').css('background-image', backgrounds[4]).appendTo('.chevron-contents');
        }           
    }

    //textillate setting
    $('.tlt').textillate({
        initialDelay: 0,
        in: {
            sequence: true 
        },
        out: {
            effect: 'pulse',
            sequence: true
        }
    });

    // typed setting
    var typed = new Typed('.chevron_5', {
        strings: [
            title[4], 
            title[5],
            title[6],
            title[7]
        ],
        typeSpeed: 80,
        loop: true,
    });
});





// header
loadComponent('templates/header.html', 'header');
// main
loadComponent('templates/hero.html', 'hero');
loadComponent('templates/about.html', 'about');
loadComponent('templates/portfolio.html', 'portfolio');
loadComponent('templates/achievements.html', 'achievements');
loadComponent('templates/qualifications.html', 'qualifications');
loadComponent('templates/career.html', 'career');
loadComponent('templates/gallery.html', 'gallery');
loadComponent('templates/contact.html', 'contact');
// footer
loadComponent('templates/footer.html', 'footer');



