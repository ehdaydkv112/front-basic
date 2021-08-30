const searchEl = document.querySelector('.search');

// const searchInputEl = document.querySelector('.search input');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', () => {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', () => {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

// 포커스가 해제되었을 때
searchInputEl.addEventListener('blur', () => {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


// 스크롤
const badgeEl = document.querySelector('header .badges');

// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(() => {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity : 0,
            display : 'none'
        });
    } else {
        gsap.to(badgeEl, .6, {
            opacity : 1,
            display : 'block'
        });
    }
}, 300));

// All로 묶었음
const fadeEls = document.querySelectorAll('.visual .fade-in');
console.log(fadeEls)
fadeEls.forEach((fadeEl, index) => {
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7 초 뒤에 각 요소들이 opactiy 1로 1초동안 바꿔가면서 나타낼 것
        opacity: 1
    });
});


// 슬라이드
// new 생성자 클래스
// new Swiper(선택자, 옵션)
// 옵션 vertical 수직
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical', // 수직 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true // 반복 재생 여부
})

new Swiper('.promotion .swiper-container', {
    // direction: 'horizontal', 기본값임
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true // 클릭이 가능한지, 페이지 번호 요소 제어가 가능한지
    },
    navigation: {
        prevEl : '.promotion .swiper-prev',
        nextEl : '.promotion .swiper-next'
    }
})

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', () => {
    isHidePromotion = !isHidePromotion
    if (isHidePromotion) {
        promotionEl.classList.add('hide');
    } else {
        promotionEl.classList.remove('hide');
    }
});