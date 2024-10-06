function loadTemplates() {
    var templates = [
        { template: 'templates/header.html', target: '#header' },
        { template: 'templates/hero.html', target: '#hero' },
        { template: 'templates/about.html', target: '#about' },
        { template: 'templates/skill.html', target: '#skill' },
        { template: 'templates/experience.html', target: '#experience' },
        { template: 'templates/activity.html', target: '#activity' },
        { template: 'templates/education.html', target: '#education' },
        { template: 'templates/qualifications.html', target: '#qualifications' },
        { template: 'templates/portfolio.html', target: '#portfolio' },
        { template: 'templates/gallery.html', target: '#gallery' },
        { template: 'templates/footer.html', target: '#footer' },
        { template: 'templates/contact.html', target: '#contact' }
    ];

    templates.forEach(function (template) {
        $(template.target).load(template.template, function () {
            console.log('Successfully loaded ' + template.template + ' into ' + template.target);
            
            // 모든 템플릿 로드 후에 스크롤 이벤트 연결
            if (template === templates[templates.length - 1]) {
                attachScrollEvents();
            }
        });
    });
}

function attachScrollEvents() {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var targetSection = $(this).attr('href');
        var targetElement = $(targetSection);

        console.log('Clicked section:', targetSection);

        if (targetElement.length) {
            $('html, body').animate({
                scrollTop: targetElement.offset().top
            }, 800);
        }

        window.location.hash = targetSection;
    });
}

$(document).ready(function () {
    loadTemplates();  // 템플릿 로드 후 스크롤 이벤트 처리
});

