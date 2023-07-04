/* HEADER 시작 (유림) */
/* ADD BANNER */
let adClose = document.querySelector('.ad_close'),
    ad =  document.querySelector('.ad_wrap');

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
// 메인 영상 버튼
let video = document.querySelector('#Elemental'),
// PlayBtn = document.querySelector('.playbtn'),
// PauseBtn = document.querySelector('.pausebtn'),
// SoundBtn = document.querySelectorAll('.sound button'),
// videoSoundBtn = document.querySelector('.soundbtn'),
videoSoundoffBtn = document.querySelector('.soundoffbtn'),
videoToggleBtn = document.querySelector('.mVbtn'),
videoSoundBtn = document.querySelector('.sound');

// videoSoundoffBtn.addEventListener('click', ()=>{
//   video.muted = false;
//   videoSoundoffBtn.style.display = 'none';
//   videoSoundBtn.style.display = 'block';
// }); 

// videoSoundBtn.addEventListener('click', ()=>{
//   video.muted = true;
//   videoSoundBtn.style.display = 'none';
//   videoSoundoffBtn.style.display = 'block';
// }); 

//영상 슬라이드 구현
let videoslideWrapper = document.querySelector('.MovieVideo_slide_wrap'), //ul
    videoslides = document.querySelectorAll('.MovieVideo_slide'), //li
    videoslideCount = videoslides.length,
    videoslideWidth = 1272,
    videoslideMargin = 30,
    showSlides = 3,
    videocurrentIdx = 0,
    videoprevCrousel = document.querySelector('.mV_leftCrousel'),
    videonextCrousel = document.querySelector('.mV_rightCrousel');

//복사본 생성하기
    for(var i = 0;i<videoslideCount;i++){
      var cloneSlide = videoslides[i].cloneNode(true);
      cloneSlide.classList.add('clone');
      videoslideWrapper.appendChild(cloneSlide);
  }
  for(var i = videoslideCount -1; i>=0 ; i--){
      var cloneSlide = videoslides[i].cloneNode(true);
      cloneSlide.classList.add('clone');
      videoslideWrapper.prepend(cloneSlide);
  }

//슬라이드 배치
let allSlides = videoslideWrapper.querySelectorAll('li');
videoslideWrapper.style.width = videoslideWidth * allSlides.length + 'px';

//슬라이드 가운데로 재배치하기
function setSlide(){
  videoslideWrapper.style.transform = `translateX(-${videoslideWidth*(showSlides+1)}px)`;
  setTimeout(()=>{videoslideWrapper.classList.add('animated')},100);
}
setSlide();

//SLIDE이동함수
function moveslide(num){
  videoslideWrapper.style.left = -num * videoslideWidth + 'px';
  videocurrentIdx = num;
  console.log(videocurrentIdx);
  let activeIdx = videocurrentIdx + showSlides+1;
  for(slide of allSlides){
    slide.classList.remove('active');
  }
    allSlides[activeIdx].classList.add('active');

  allSlides.forEach(item=>{
    let slideVideo = item.querySelector('video');
    slideVideo.pause();
  });
  



  if(videocurrentIdx == showSlides || videocurrentIdx == -showSlides){
      setTimeout(function(){
        videoslideWrapper.classList.remove('animated');
        videoslideWrapper.style.left = '0px'; 
        videocurrentIdx = 0;

        for(slide of allSlides){
          slide.classList.remove('active');
          console.log('active제거');
        }
        allSlides[4].classList.add('active');
      },500);

      setTimeout(function(){
        videoslideWrapper.classList.add('animated');
      },600);
  }
  videoToggleBtn.classList.remove('active');
  videoSoundBtn.classList.remove('active');
}
moveslide(0);

//버튼으로 이동하기
 videonextCrousel.addEventListener('click',()=>{
  moveslide(videocurrentIdx+1);
})
videoprevCrousel.addEventListener('click',()=>{
  moveslide(videocurrentIdx-1);
})

// 영상 재생 버튼 및 음소거 버튼
videoToggleBtn.addEventListener('click',()=>{
  videoToggleBtn.classList.toggle('active');
  let activeVideo = videoslideWrapper.querySelector('.active video');
  if(videoToggleBtn.classList.contains('active')){
    activeVideo.play();
  }else{
    activeVideo.pause();
  }
})

videoSoundBtn.addEventListener('click',()=>{
  videoSoundBtn.classList.toggle('active');
  let activeVideo = videoslideWrapper.querySelector('.active video');
  if(videoSoundBtn.classList.contains('active')){
    activeVideo.muted = true;
  } else {
    activeVideo.muted = false;
  }
})

// 무비차트 & 상영예정작 타이틀 클릭
let movieChart = document.querySelector('#btnMovieChart'),
movieReserve = document.querySelector('#btnReserMovie'),
allTitle = document.querySelectorAll('.movieChart_tt a'),
MovieChartSlide = document.querySelectorAll('.movieChart_list > div');

allTitle.forEach(item=>{
  item.addEventListener('click',(e)=>{
    e.preventDefault();
    for(let title of allTitle){
      title.classList.remove('active');
    }
    e.currentTarget.classList.add('active');
    for(let slide of MovieChartSlide){
      slide.style.display = 'none';
    }
    let target = e.currentTarget.getAttribute('href');
    console.log(target);
    document.querySelector(target).style.display = 'block';
  })
})

// 무비차트 슬라이드 구현
let slideContainers = document.querySelectorAll('.slidewrapper')

slideContainers.forEach(item=>{
  multipleSlide(item);
});

function multipleSlide(target){
  
  let slideWrapper = target.querySelector('.MovieChart_slide_wrap'),
  slides = document.querySelectorAll('.MovieChart_slide'),
  slideCount = slides.length,
  slideWidth = 222,
  slideMargin = 40,
  slidesPerView = 5,
  currentIdx = 0,
  prevBtn = target.querySelector('#prev'),
  nextBtn = target.querySelector('#next');
  
  slideWrapper.style.width = slideCount*(slideWidth+slideMargin)+'px';
  
  function moveSlides(num){
      slideWrapper.style.left = -num*(slideWidth+slideMargin)+'px';
      currentIdx = num;
  
      if(currentIdx === 0){
          prevBtn.style.visibility = 'hidden';
          nextBtn.style.visibility = 'visible';
      } else {
         prevBtn.style.visibility = 'visible';
         nextBtn.style.visibility = 'hidden';
      }
  }
  moveSlides(0)
  
  nextBtn.addEventListener('click',()=>{
      if(currentIdx < slideCount-slidesPerView){
        moveSlides(currentIdx+5);
      }
    });
  prevBtn.addEventListener('click',()=>{
      if(currentIdx > 0){
        moveSlides(currentIdx-5);
      }
    });
}
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
