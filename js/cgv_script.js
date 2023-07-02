/* HEADER 시작 (유림) */
/* POP UP PORTFOLIO*/
let noticePopup = document.querySelector('.notice_portfolio'),
    popupClose = noticePopup.querySelector('.popup_close'),
    dontSee = noticePopup.querySelector('#dont_see');
   

//let allCookies = document.cookie; 
  //console.log(document.cookie);
/*
popupClose.addEventListener('click',(e)=>{
  e.preventDefault();
  let dontSeeCk = dontSee.checked;
  if(dontSeeCk){
    setCookie('CGV','home',1)
    noticePopup.style.display = 'none';
  }else{
    noticePopup.style.display = 'none';
  }
})
*/

//쿠키 생성
function setCookie(name,value,day){
  let date = new Date();
  date.setDate(date.getDate()+day);
  let setCookie = '';
  setCookie += `${name}=${value};`;
  setCookie += `expires=${date.toUTCString()}`;
  document.cookie = setCookie;
}
setCookie('CGV','home', 1);

popupClose.addEventListener('click',(e)=>{
  e.preventDefault();
  let dontSeeCk = dontSee.checked;
  noticePopup.removeAttribute('open');
  if(dontSeeCk){
    setCookie('CGV','home', 1);
    noticePopup.style.display = 'none';
  }else{
    setCookie('CGV','home', -1);
  }
 });



// 쿠키 확인
function cookieCheck(name){
  let cookieArr = document.cookie.split(';');
  let visited = false;
  for(let cookie of cookieArr){
    if(cookie.search(name) > -1){
      visited = true;
      break;
    }
    if(!visited){
      popup.setAttribute('open','');
    }
  }}
  // if(!visited){
  //   popup.setAttribute('open','');
  // }
 cookieCheck('CGV');



/* ADD BANNER SLIDE*/
let adWrapper = document.querySelector('.ad_wrapper'),
    adSlide = document.querySelectorAll('.ad_wrapper li'),
    adCount = adSlide.length,
    curentAddIndex = 0,
    adTimer,
    adWidth = 1920;

    adWrapper.style.width = `${adCount * adWidth}px`;
  

function adMove(num){
  adWrapper.style.transform = `translateX(${adWidth*-num}px)`;
  curentAddIndex = num;
}
function adAutoMove(){
  adTimer = setInterval(()=>{
  //let nextIdx = curentSlideIndex+1;
  let nextIdx = (curentAddIndex+1)%slideCount;
  adMove(nextIdx);
}, 3000);
}
adAutoMove();

// slideWrapper에 mouseenter 이벤트가 일어나면 자동 슬라이드 멈추기
adWrapper.addEventListener('mouseenter',()=>{
  adMove(adTimer);
})
adWrapper.addEventListener('mouseleave',()=>{
  adMove()
})


/* ADD BANNER */
let adClose = document.querySelector('.ad_close'),
    ad = document.querySelector('.ad_wrap');

adClose.addEventListener('click',()=>{
  ad.classList.toggle('active');
  if(ad.classList.contains('active')){
    adClose.innerHTML = '<i class="fa-solid fa-angle-down"></i>'
  } else{
    adClose.innerHTML = '<i class="fa-solid fa-xmark"></i>'
  }
})

/* MENU DROPDOWN */
let mainMenu = document.querySelectorAll('.menu li'),
    subMenu = document.querySelectorAll('.submenu'),
    menuDown = document.querySelector('.menu_bg'),
		menuHeight = menuDown.offsetHeight;


let subMenuHeight = 0;
subMenu.forEach(item=>{
	if(item.offsetHeight > subMenuHeight){
		subMenuHeight = item.offsetHeight;
	}
	})
let menuTotalHeight = `${menuDown.offsetHeight + subMenuHeight + 80}px`


mainMenu.forEach(item=>{
	item.addEventListener('mouseover',()=>{
		menuDown.style.height = menuTotalHeight;
	});
	item.addEventListener('mouseout',()=>{
		menuDown.style.height = `${menuHeight}px`;
	});
})


/* MENU STICKY */
let menuSticky = document.querySelector('.main_menu'),
    menuWrap = document.querySelector('.menuwrap')
    menuLi = document.querySelectorAll('.menu_li a'),
    menuScroll = menuDown.offsetTop,
    scrollAmout = window.scrollY;


window.addEventListener('scroll',()=>{
  console.log(window.scrollY)
    if(window.scrollY > (menuScroll)){
      menuWrap.classList.add('sticky');
      menuSticky.style.background = "linear-gradient(to right, rgb(215, 67, 87), rgb(241,79,58) 59%, rgb(239, 100, 47))";
      for(li of menuLi){
        li.style.color = "#fff";
      }
    } else {
      menuWrap.classList.remove('sticky');
      menuSticky.style.background = "#fff";
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
