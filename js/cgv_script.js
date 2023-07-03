/* HEADER 시작 (유림) */

/* POP UP PORTFOLIO NOTICE */
let noticePopup = document.querySelector('.notice_portfolio'),
    popupClose = noticePopup.querySelector('.popup_close'),
    dontSee = noticePopup.querySelector('#dont_see');

//쿠키 생성 함수
function setCookie(name,value,day){
  let date = new Date();
  date.setDate(date.getDate()+day);
  document.cookie = `${name}=${value};expires=${date.toUTCString()}`;
}

// 쿠키 확인 함수
function cookieCheck(name){
  let cookieArr = document.cookie.split(';');
  let visited = false;
  for(let cookie of cookieArr){
    if(cookie.search(name) > -1){
      visited = true;
      break;
     }
    }
    //만약 visited의 값이 false라면 dialog가 보인다
    if(!visited){
      noticePopup.setAttribute('open','');
    }
}
cookieCheck('CGV');

/* 
  popupClose 클릭 시, 
    팝업 display none
    dontSee에 체크 되어있다면,
      쿠키 생성,아니라면 쿠키 만료.
*/
popupClose.addEventListener('click',()=>{
  noticePopup.style.display = 'none';
  if(dontSee.checked){
    setCookie('CGV','home', 1);
  }else{
    setCookie('CGV','home', -1);
  }
 });
 

/* ADD BANNER */
//BANNER SLIDE LOOP
let adWrapper = document.querySelector('.ad_wrapper'),
    adSlide = document.querySelectorAll('.ad_wrapper li'),
    adCount = adSlide.length,
    curentAddIndex = 0,
    adTimer,
    adWidth = 1920;

/* 1. ad리스트의 ul의 넓이를 ad의 갯수만큼 확장*/
adWrapper.style.width = `${adCount * adWidth}px`;

/* 
2. ad의 기본적인 이동 슬라이드 함수 adMove
  현재 인덱스가 ad 갯수보다 작다면,
    ul을 현재 ad인덱스 * ad너비를 곱한 값만큼 이동하고
    animated라는 트랜지션 클래스 속성을 추가해 이동하는 과정 보여지도록
  아니라면
    animated라는 트랜지션 속성을 없애고, 
    ul을 원위치로 이동
    현재 인덱스 번호를 0으로 리셋(무한 루프)
 */
function adMove(num){
  curentAddIndex = num;
  if(curentAddIndex < adCount){
     adWrapper.style.transform = `translateX(${adWidth*-num}px)`;
     adWrapper.classList.add('animated');
    //  let time = 3000;
    //  adAutoMove(time);
  } else{
    setTimeout(()=>{
      adWrapper.classList.remove('animated');
      adWrapper.style.transform = `translateX(0px)`;
      curentAddIndex = 0;
      // let time = 0;
      // adMove(0);
    },500);
  }}

/* 
3. adMove 함수를 자동으로 실행시킬 adAutoMove 함수
  setInterval로 3초마다 adMove 실행 
*/
function adAutoMove(){
  adTimer = setInterval(()=>{
  let nextIdx = curentAddIndex+1
  adMove(nextIdx);
}, 3000);
}
adAutoMove(3000);

/*
// slideWrapper에 mouseenter 이벤트가 일어나면 자동 슬라이드 멈추기 -> 유림 수정작업중..
function startAdAuto() {
  setInterval(adAutoMove, 3000);
  //autoSlideInterval = setInterval(adAutoMove, 3000);
}
function stopAdAuto() {
  clearInterval(adAutoMove);
}
adWrapper.addEventListener("mouseover", stopAdAuto);
adWrapper.addEventListener("mouseleave", startAdAuto);
*/


//BANNER CLOSE
let adClose = document.querySelector('.ad_close'),
    ad = document.querySelector('.ad_wrap');

/* 
adClose 버튼 클릭시. 
  toggle을 활용하여 클래스명 active 추가/삭제 및 ad 높이 조절,
  adClose 버튼이 클래스명 active 포함 시, chevron 아이콘으로 html 변경
  아니라면, x마크 아이콘으로 변경 
 */
adClose.addEventListener('click',()=>{
  ad.classList.toggle('active');
  if(ad.classList.contains('active')){
    adClose.innerHTML = '<i class="fa-solid fa-angle-down"></i>'
  } else{
    adClose.innerHTML = '<i class="fa-solid fa-xmark"></i>'
  }
})

let login = document.querySelector('.login'),
    loginIcon = document.querySelector('.login a i');

login.addEventListener('mouseover',()=>{
    loginIcon.classList.replace('fa-lock','fa-lock-open');
    loginIcon.style.transform = `translateX(4px)`;
  })
login.addEventListener('mouseout',()=>{
  loginIcon.classList.replace('fa-lock-open','fa-lock')
  loginIcon.style.transform = `translateX(0)`;
})

/* MIAN MENU DROPDOWN */
// MENU DROPDOWN
let mainMenu = document.querySelectorAll('.menu li'),
    subMenu = document.querySelectorAll('.submenu'),
    menuDown = document.querySelector('.menu_bg'),
		menuHeight = menuDown.offsetHeight,
    subMenuHeight = 0;

/* 
1.각 서브메뉴의 높이를 구하고, 
메뉴 호버시 DROPDOWN될 서브메뉴 배경 부분의 높이를 변수 menuTotalHeight에 할당
*/
subMenu.forEach(item=>{
	if(item.offsetHeight > subMenuHeight){
		subMenuHeight = item.offsetHeight;
	}
})
let menuTotalHeight = `${menuDown.offsetHeight + subMenuHeight + 80}px`

/* 
2.각 메인메뉴에 마우스 오버 시, menuTotalHeight로 메뉴 높이 변경
 마우스 아웃 시, 기본 menuHeight로 변경
*/
mainMenu.forEach(item=>{
	item.addEventListener('mouseover',()=>{
		menuDown.style.height = menuTotalHeight;
	});
	item.addEventListener('mouseout',()=>{
		menuDown.style.height = `${menuHeight}px`;
	});
})


// MENU STICKY
let menuSticky = document.querySelector('.main_menu'),
    menuWrap = document.querySelector('.menuwrap')
    menuLi = document.querySelectorAll('.menu_li a'),
    menuScroll = menuDown.offsetTop,
    body = document.body,
    scrollAmout = window.scrollY;

/* 
1.윈도우 스크롤 발생시,
  스크롤양이 메뉴의 offsetTop보다 크다면,
    메뉴에 클래스명 sticky추가 후, 최상단 고정 및 배경색 그라디언트 변경
    각 메인 메뉴의 글자색 흰색으로 변경 
  아니라면, 클래스 sticky 삭제 후, 원래대로 변경
*/
window.addEventListener('scroll',()=>{
    if(window.scrollY >= menuScroll){
      body.classList.add('sticky');
      menuWrap.style.hight = 0;
      menuSticky.style.background = "linear-gradient(to right, rgb(215, 67, 87), rgb(241,79,58) 59%, rgb(239, 100, 47))";
      for(li of menuLi){
        li.style.color = "#fff";
      }
    } else {
      body.classList.remove('sticky');
      menuSticky.style.background = "";
      for(li of menuLi){
        li.style.color = "";
      }
    }
})


/* SEARCH MODAL */
let lightbox = document.querySelector('#lightbox'),
    modalOpen = document.querySelector('#modal_open'),
    modalClose = document.querySelector('.modal_close'),
    modal = document.querySelector('.modal_box');

/* 
modalOpen 버튼(검색 버튼) 클릭 시, 
  모달 display block 효과로 화면에 띄우고,
  배경색 클래스명 visible 추가해서 보이게
modalClose 버튼 클릭 시, 
  모달 display none 으로 숨기고,
  배경색 클래스명 visible 삭제
*/
modalOpen.addEventListener('click',()=>{
  modal.style.display = 'block';
  lightbox.classList.add('visible');
});
modalClose.addEventListener('click',()=>{
  modal.style.display = 'none';
  lightbox.classList.remove('visible');
});
/* HEADER 끝 (유림) */

/* MAIN_1 시작 (이원) */
let slideContainer = document.querySelector('.MovieChart_wrap'),
slideWrapper = document.querySelector('.MovieChart_slide_wrap'),
slides = document.querySelectorAll('.MovieChart_slide_wrap li'),
slideCount = slides.length,
slideWidth = 222,
slideMargin = 40,
slidesPerView = 5,
currentIdx = 0,
prevBtn = document.querySelector('#prev'),
nextBtn = document.querySelector('#next'),
video = document.getElementById('eleMental'),
videoPlayBtn = document.querySelector('.playbtn'),
videoPauseBtn = document.querySelector('.pausebtn');

// 예고편 영상 재생
videoPlayBtn.addEventListener('click',()=>{
    video.play();
});
videoPauseBtn.addEventListener('click',()=>{
    video.pause();
});

slideWrapper.style.width = slideCount*(slideWidth+slideMargin)+'px';

function moveSlide(num){
    slideWrapper.style.left = -num*(slideWidth+slideMargin)+'px';
    currentIdx = num;

    if(currentIdx === 0){
        prevBtn.classList.add('disabled');
    } else{
        prevBtn.classList.remove('disabled');
    }
}
moveSlide(0)

nextBtn.addEventListener('click',()=>{
    if(currentIdx < slideCount-slidesPerView){
      moveSlide(currentIdx+5);
    }
  });
  prevBtn.addEventListener('click',()=>{
    if(currentIdx > 0){
      moveSlide(currentIdx-5);
    }
  });
/* MAIN_1 끝 (이원) */

/* MAIN_2 시작 (수연) */
/* MAIN_2 시작 (수연) */

/* MAIN_3 시작 (정석) */
/* MAIN_3 끝 (정석) */
 /* HEADER 끝 (유림) */



/* MAIN_2 시작 (수연) */
/* MAIN_2 끝 (수연) */

/* MAIN_3 시작 (정석) */
/* MAIN_3 끝 (정석) */
