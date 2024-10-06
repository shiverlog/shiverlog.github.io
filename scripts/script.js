// ==================================== Header O ====================================

// Toggle
$(document).ready(function () {
    $('.navbar-toggler').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
        $('.submenu').toggleClass('active');
    });

    $(window).on('scroll', function () {
        if ($('.menu').hasClass('active')) {
            $('.menu').removeClass('active');
            $('.navbar-toggler').removeClass('active');
        }
    });
});

// ==================================== Footer O ====================================

// scrollToTop
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener("scroll", function () {
    var backToTopButton = document.getElementById("back-to-top");
    if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Chat button click event
document.querySelector('.chat-button').addEventListener('click', function () {
    var contactFormWrapper = document.querySelector('.contact-form-wrapper');
    var icon = document.querySelector('.chat-button svg');
    contactFormWrapper.classList.toggle('active');
    

    if (contactFormWrapper.classList.contains('active')) {
        icon.classList.remove('fa-comments');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark'); 
        icon.classList.add('fa-comments'); 
    }
});

// EmailJS를 사용하여 연락처 폼 데이터를 이메일로 전송
$("#contact-form").submit(function (event) {
    emailjs.init("ujzf0Rr5kUMtMUrzM");

    emailjs.sendForm('service_qsslh3j', 'template_8hwpzad', '#contact-form')
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById("contact-form").reset();
            alert("양식이 성공적으로 제출되었습니다");
        }, function (error) {
            console.log('FAILED...', error);
            alert("양식 제출 실패! 다시 시도하세요");
        });
    event.preventDefault();
});


// ==================================== Hero O ====================================

// Slide switch
function toggleButton(button) {
    var playBtn = document.querySelector('.play-btn');
    var pausedBtn = document.querySelector('.paused-btn');
    var activeButton = document.querySelector('.btn-wrap .active');
    if (activeButton === playBtn) {
        playBtn.classList.remove('active');
        pausedBtn.classList.add('active');
    } else if (activeButton === pausedBtn) {
        pausedBtn.classList.remove('active');
        playBtn.classList.add('active');
    }
}

// Chevron switch
$(document).ready(function() {

    backgrounds
    var backgrounds = [
        'linear-gradient(to right bottom, rgba(220, 20, 60, 0.2), rgba(255, 127, 80, 0.2)), url("assets/img/slide_1.jpg")',
        'linear-gradient(to right bottom, rgba(220, 20, 60, 0.2), rgba(255, 127, 80, 0.2)), url("assets/img/slide_2.jpg")',
        'linear-gradient(to right bottom, rgba(220, 20, 60, 0.2), rgba(255, 127, 80, 0.2)), url("assets/img/slide_3.jpg")',
        'linear-gradient(to right bottom, rgba(220, 20, 60, 0.2), rgba(255, 127, 80, 0.2)), url("assets/img/slide_4.jpg")',
        'linear-gradient(to right bottom, rgba(220, 20, 60, 0.2), rgba(255, 127, 80, 0.2)), url("assets/img/slide_5.jpg")'
    ];

    // title
    var title = [
        "I'm a Biggest Dreamer",
        "I'm a Great Web Developer",
        "I Will Grow Into a DevOps Engineer",
        "I Want to Start With You",
        '<h2 class="slide-title" data-in-effect="pulse"><span class="title-lg">Crafting the Future</span><span class="title-s">of</span><span class="title-lg">Web Development</span></h2>',
        '<h2 class="slide-title" data-in-effect="bounceDown"><span class="title-lg">Empowering</span><span class="title-s">Data-Driven</span><span class="title-lg">Decisions</span></h2>',
        '<h2 class="slide-title" data-in-effect="rotateIn"><span class="title-lg">Building</span><span class="title-s">Scalable</span><span class="title-lg">Cloud Solutions</span></h2>',
        '<h2 class="slide-title" data-in-effect="rollIn"><span class="title-lg">Innovating</span><span class="title-s">with Web,</span><span class="title-lg">Cloud, and Data</span></h2>',
    ];

    // chevronContents 배열을 정의합니다.
    var chevronContents = [
        ["Slide 1 - Content Part 1"],
        ["Slide 2 - Content Part 1"],
        ["Slide 3 - Content Part 1"],
        ["Slide 4 - Content Part 1"],
        ["Slide 5 - Content Part 1"]
    ];

    // Default
    $('input[data-slide-index="0"]').prop('checked', true);
    $('.hero').css('background-image', backgrounds[0]);

    $(".chevron").slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: true,
        prevArrow: $('.left-btn'),
        nextArrow: $('.right-btn'),
        autoplay: true,  // 자동 재생 옵션
        autoplaySpeed: 30 
    });

    // 왼쪽, 오른쪽 화살표 클릭 이벤트
    $('.left-btn').click(function() {
        $('.chevron').slick('slickPrev');
    });
    $('.right-btn').click(function() {
        $('.chevron').slick('slickNext');
    });

    // 슬라이드 재생 및 일시정지 버튼
    $('.play-btn').click(function() {
        console.log("Play button clicked");
        $('.paused-btn').addClass('active');
        $(this).removeClass("active");
        $('.chevron').slick('slickPlay')
    });

    $('.paused-btn').click(function() {
        console.log("Pause button clicked");
        $('.play-btn').addClass('active');
        $(this).removeClass('active');
        $('.chevron').slick('slickPause')
    });

    // 라디오 버튼 클릭 이벤트
    $('input[name="radio-group"]').on('change', function() {
        var slideIndex = parseInt($(this).attr('data-slide-index'));
        changeSlide(slideIndex);
        $('.slick-slider').slick('slickGoTo', slideIndex);
    });

    // 슬라이드 변경 후 라디오 버튼 체크 업데이트
    $('.slick-slider').on('afterChange', function(event, slick, currentSlide) {
        $('input[name="radio-group"]').eq(currentSlide).prop('checked', true);
        changeSlide(currentSlide);
    });

    // 슬라이드 배경 및 타이틀 변경 함수
    function changeSlide(slideNumber) {
        // 배경 이미지 변경
        $('.hero').css('background-image', backgrounds[slideNumber]);

        // 슬라이드 타이틀 변경
        $('.chevron_1, .chevron_2, .chevron_3, .chevron_4').empty(); // 기존 타이틀 삭제
        if (slideNumber < 5) {
            $(`.chevron_${slideNumber + 1}`).append(title[slideNumber]);
        }

         // chevron 내용 업데이트
         $(`.chevron_1`).append(chevronContents[slideNumber][0]);
         $(`.chevron_2`).append(chevronContents[slideNumber][1]);
         $(`.chevron_3`).append(chevronContents[slideNumber][2]);
         $(`.chevron_4`).append(chevronContents[slideNumber][3]);
         $(`.chevron_5`).append(chevronContents[slideNumber][4]);
    }

    // textillate setting
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



// ==================================== Skill O ====================================

// JSON 데이터를 가져와서 스킬을 보여주는 함수
async function fetchSkills() {
    try {
        const response = await fetch('skills.json'); // skills.json 파일에서 데이터 가져오기
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching skills:', error);
    }
}

// 스킬을 화면에 표시하는 함수
function showSkills(skillsData, selectedCategories = []) {
    const skillsContainer = document.getElementById('skillsContainer');
    let skillHTML = '';

    // 필터링된 스킬을 담을 배열
    let filteredSkills = [];

    // 선택된 카테고리가 없으면 모든 스킬을 보여줌
    if (selectedCategories.length === 0) {
        skillsData.forEach(category => {
            filteredSkills = filteredSkills.concat(category.skills);
        });
    } else {
        // 선택된 카테고리가 있을 경우 해당 카테고리의 스킬만 보여줌
        skillsData.forEach(category => {
            if (selectedCategories.includes(category.category)) {
                filteredSkills = filteredSkills.concat(category.skills);
            }
        });
    }

    // 필터링된 스킬들을 표시
    filteredSkills.forEach(skill => {
        skillHTML += `
            <div class="skill-box">
                <div class="skills">
                    <img class="skill-img" src="${skill.icon}" alt="${skill.name} icon" />
                    <span class="skill-name">${skill.name}</span>
                </div>
            </div>
        `;
    });

    skillsContainer.innerHTML = skillHTML;
}

// 태그 버튼을 동적으로 추가하는 함수
function createCategoryTags(skillsData) {
    const categoryTagsContainer = document.querySelector('.category-tags');
    
    skillsData.forEach(category => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('category-tag');
        checkbox.setAttribute('data-category', category.category);
        checkbox.id = `tag-${category.category}`;
        
        const label = document.createElement('label');
        label.setAttribute('for', `tag-${category.category}`);
        label.innerText = category.category;

        categoryTagsContainer.appendChild(checkbox);
        categoryTagsContainer.appendChild(label);
    });

    // 태그 선택 시 필터링 이벤트 추가
    document.querySelectorAll('.category-tag').forEach(tag => {
        tag.addEventListener('change', function() {
            const selectedCategories = Array.from(document.querySelectorAll('.category-tag:checked'))
                .map(checkbox => checkbox.getAttribute('data-category'));
            
            // 선택된 카테고리에 따라 스킬 필터링
            fetchSkills().then(data => showSkills(data, selectedCategories));
        });
    });
}

// 데이터 가져와서 화면에 표시 및 태그 버튼 생성
fetchSkills().then(data => {
    showSkills(data); // 모든 스킬 표시
    createCategoryTags(data); // 태그 동적으로 추가
});


// // 프로젝트를 화면에 표시하는 함수
// function showProjects(projects) {
//     let projectsContainer = document.querySelector("#work .box-container");
//     let projectHTML = "";
//     projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
//         projectHTML += `
//         <div class="box tilt">
//       <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
//       <div class="content">
//         <div class="tag">
//         <h3>${project.name}</h3>
//         </div>
//         <div class="desc">
//           <p>${project.desc}</p>
//           <div class="btns">
//             <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
//             <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
//           </div>
//         </div>
//       </div>
//     </div>`
//     });
//     projectsContainer.innerHTML = projectHTML;

//     // Tilt.js 효과 적용
//     VanillaTilt.init(document.querySelectorAll(".tilt"), {
//         max: 15,
//     });

//     // Scroll Reveal 애니메이션 적용
//     const srtop = ScrollReveal({
//         origin: 'top',
//         distance: '80px',
//         duration: 1000,
//         reset: true
//     });

//     // 프로젝트 부분에 Scroll Reveal 효과 적용
//     srtop.reveal('.work .box', { interval: 200 });

// }

// // JSON 데이터를 가져와 스킬과 프로젝트를 보여줌
// fetchData().then(data => {
//     showSkills(data);
// });

// fetchData("projects").then(data => {
//     showProjects(data);
// });

// // Tilt.js 효과 시작
// VanillaTilt.init(document.querySelectorAll(".tilt"), {
//     max: 15,
// });

// // 개발자 도구 비활성화
// document.onkeydown = function (e) {
//     if (e.keyCode == 123) { // F12 비활성화
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { // Ctrl+Shift+I 비활성화
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { // Ctrl+Shift+C 비활성화
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { // Ctrl+Shift+J 비활성화
//         return false;
//     }
//     if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { // Ctrl+U 비활성화
//         return false;
//     }
// }

// // Tawk.to 실시간 채팅 삽입
// var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
// (function () {
//     var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
//     s1.async = true;
//     s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
//     s1.charset = 'UTF-8';
//     s1.setAttribute('crossorigin', '*');
//     s0.parentNode.insertBefore(s1, s0);
// })();

// // Scroll Reveal 애니메이션 적용
// const srtop = ScrollReveal({
//     origin: 'top',
//     distance: '80px',
//     duration: 1000,
//     reset: true
// });