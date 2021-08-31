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


/**
 * 페이지 스크롤에 따른 요소 제어
 */
// 페이지 스크롤에 영향을 받는 요소들을 검색!
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// 페이지에 스크롤 이벤트를 추가!
// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)
window.addEventListener('scroll', _.throttle(function () {
  // 페이지 스크롤 위치가 500px이 넘으면.
  if (window.scrollY > 500) {
    // Badge 요소 숨기기!
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
    // 상단으로 스크롤 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    })

  // 페이지 스크롤 위치가 500px이 넘지 않으면.
  } else {
    // Badge 요소 보이기!
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
    // 상단으로 스크롤 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300))

// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener('click', function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, .7, {
    scrollTo: 0
  })
})

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

new Swiper('.awards .swiper-container', {
    // direction: 'horizontal', 기본값임,
    autoplay : true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});


//프로모션 토글
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

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// https://greensock.com/docs/v2/Easing
function floatingObject(selector, delay, size) {
    // gsap.to(요소, 시간, 옵션);
    gsap.to(selector, //요소
        random(1.5, 2.5), //시간
        { // 옵션
        y: size,
        repeat : -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay)
    })
};

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// 스크롤
const spyEls = document.querySelectorAll('section.scroll-spy');
console.log('a', spyEls)
spyEls.forEach((spyEl) => {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, // 보여짐의 여부를 감시할 요소를 지정
            triggerHook : .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});

/**
 * 올해가 몇 년도인지 계산
 */
 const thisYear = document.querySelector('.this-year')
 thisYear.textContent = new Date().getFullYear()