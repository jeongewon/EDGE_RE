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
let slideContainer = document.querySelector('.slidewrapper .MovieChart_wrap'),
slideWrapper = document.querySelector('.slidewrapper .MovieChart_slide_wrap'),
slides = document.querySelectorAll('.slidewrapper .MovieChart_slide_wrap li'),
slideContainer2 = document.querySelector('.ReserveMovie_slidewrapper .MovieChart_wrap'),
slideWrapper2 = document.querySelector('.ReserveMovie_slidewrapper .MovieChart_slide_wrap'),
slides2 = document.querySelectorAll('.ReserveMovie_slidewrapper .MovieChart_slide_wrap li'),
slideCount = slides.length,
slideWidth = 222,
slideMargin = 40,
slidesPerView = 5,
currentIdx = 0,
prevBtn = document.querySelector('#prev'),
nextBtn = document.querySelector('#next'),
video = document.querySelector('.MovieVideo_slide video'),
videoPlayBtn = document.querySelector('.playbtn'),
videoPauseBtn = document.querySelector('.pausebtn'),
videoSoundBtn = document.querySelector('.soundbtn'),
videoSoundoffBtn = document.querySelector('.soundoffbtn'),
videoToggleBtn = document.querySelector('.mVbtn button');

videoSoundoffBtn.addEventListener('click', ()=>{
  video.muted = false;
}); 

videoPauseBtn.addEventListener('click',()=>{
  video.pause();
});



//영상 슬라이드 구현
let videoslideWrapper = document.querySelector('.MovieVideo_slide_wrap'), //ul
    videoslides = document.querySelectorAll('.MovieVideo_slide'), //li
    videoslideCount = videoslides.length,
    videoslideWidth = 1272,
    videoslideMargin = 0,
    videocurrentIdx = 0,
    videoprevCrousel = document.querySelector('.mV_leftCrousel'),
    videonextCrousel = document.querySelector('.mV_rightCrousel');




// for(let i = 0; i<videoslideCount;i++){
//   let cloneSlide = videoslides[i].cloneNode(true);
//   cloneSlide.classList.add('clone');
//   videoslideContainer.appendChild(cloneSlide);
// }
// for(let i = videoslideCount-1; i>=0 ;i--){
//   let cloneSlide = videoslides[i].cloneNode(true);
//   cloneSlide.classList.add('clone');
//   videoslideContainer.prepend(cloneSlide);
// }

// newSlides = document.querySelectorAll('.MovieVideo_slide li');

// newSlides.forEach((slide,idx)=>{
//   slide.style.left = `${idx*(videoslideWidth+videoslideMargin)}px`;
// });

// function setSlide(){
//   // ul {transform:translateX(-3000px)}
//   let ulMoveAmt = (videoslideWidth + videoslideMargin)*-videoslideCount+'px';
//   videoslideContainer.style.transform = `translateX(${ulMoveAmt})`;
//   videoslideContainer.classList.add('animated');
// }
// setSlide();


// //슬라이드 이동함수
// function moveSlide(num){
//   videoslideContainer.style.left = -num*(videoslideWidth+videoslideMargin)+'px';
//   videocurrentIdx = num;
//   if(videocurrentIdx == -videoslideCount || videocurrentIdx == videoslideCount){
//     setTimeout(()=>{
//       videoslideContainer.classList.remove('animated');
//       videoslideContainer.style.left = '0px';
//       videocurrentIdx = 0;
//     },500);
//     setTimeout(()=>{
//       videoslideContainer.classList.add('animated');
//     },1272);
//   }
// }

// function debounce(callback, time){
//   let slideTrigger = true;
//   // return function(){}
//   return ()=>{
//     if(slideTrigger){
//       callback();
//       slideTrigger = false;
//       setTimeout(()=>{
//         slideTrigger = true;
//       },time);
//     }
//   }
// }

// //좌우 컨트롤
// videoprevCrousel.addEventListener('click',()=>{
//     moveSlide(videocurrentIdx+1);
// });
// videonextCrousel.addEventListener('click',()=>{
//     moveSlide(videocurrentIdx-1);
// });

// 타이틀 클릭
let movieChart = document.querySelector('#btnMovieChart'),
movieReserve = document.querySelector('#btnReserMovie'),
allTitle = document.querySelectorAll('.movieChart_tt a'),
MovieChartSlide = document.querySelector('.slidewrapper'),
ReserveMovieSlide = document.querySelector('.ReserveMovie_slidewrapper');

movieReserve.addEventListener('click',()=>{
  ReserveMovieSlide.style.display = 'block';
  MovieChartSlide.style.display = 'none';
})

movieChart.addEventListener('click',()=>{
  MovieChartSlide.style.display = 'block';
  ReserveMovieSlide.style.display = 'none';
})

// 무비차트 & 상영예정작 슬라이드 구현
slideWrapper.style.width = slideCount*(slideWidth+slideMargin)+'px';
slideWrapper2.style.width = slideCount*(slideWidth+slideMargin)+'px';

function moveSlide(num){
    slideWrapper.style.left = -num*(slideWidth+slideMargin)+'px';
    slideWrapper2.style.left = -num*(slideWidth+slideMargin)+'px';
    currentIdx = num;

    if(currentIdx === 0){
        prevBtn.style.visibility = 'hidden';
        nextBtn.style.visibility = 'visible';
    } else {
       prevBtn.style.visibility = 'visible';
       nextBtn.style.visibility = 'hidden';
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
