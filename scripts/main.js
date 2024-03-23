
// templates load
function loadComponent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

// slide switch
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

// slide switch
$(document).ready(function() {
    console.log("JQuery Start");
    $(".play-btn").click(function() {
        $(".paused-btn").addClass("active");
        $(this).removeClass("active");
    });

    $(".paused-btn").click(function() {
        $(".play-btn").addClass("active");
        $(this).removeClass("active");
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



