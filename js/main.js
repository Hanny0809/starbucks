const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼 보이기 
    gsap.to(toTopEl, .4, {
      x: 0
    })
  } else {
    // 배치 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기 
    gsap.to(toTopEl, .4, {
      x: 100
    })
  }
}, 300));
// _.throttle(함수, 시간)


toTopEl.addEventListener('click', function () {
  gsap.to(window, 1, {
    scrollTo: 0          // 화면이동 
  })
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션(객체데이터형태));
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7
    opacity: 1

  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal' 수평은 디폴트 값 
  slidesPerView: 3,  // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10,   // 슬라이드 사이 여백 (10px) 
  centeredSlides: true,   // 1번 슬라이드가 가운데 보이기 
  loop: true,    // 반복 재생 
  // autoplay: {   // 자동 재생  3000이 기본값 
    // delay: 5000  // 5초 (설정 시간마다 자동 재생)
  // }
  pagination: {
    el: '.promotion .swiper-pagination',    // 페이지 번호 요소 선택자 
    clickable: true   // 사용자의 페이지 번호 요소 제어 
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  slidesPerView: 5,
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})

// 토글버튼 클릭 후 요소 사라지게 하는 부분 
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion  // true
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리 
    promotionEl.classList.remove('hide');
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector,      // 선택자
    random(1.5, 2.5),   // 애니메이션 동작 시간 
    { // 옵션                    
    y: size,            // y축 이동 
    repeat: -1,    // 반복 횟수 , -1 : 무한반복
    yoyo: true,     // 한번 재생된 애니메이션을 다시 뒤로 재생 
    ease: Power1.easeInOut,   // 아이템의 움직임이 좀 더 자연스럽게 만듦 
    delay: random(0, delay)    // 1초동안 멈춰있다가 애니메이션 실행 
  }
  );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating1', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,     // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8,         // 뷰포트 화면에 어떤 위치에 도달하면 메소드를 실행할지 결정(0~1 사이)
    })
    .setClassToggle(spyEl, 'show') // 요소, 옵션 
    .addTo(new ScrollMagic.Controller());
});


