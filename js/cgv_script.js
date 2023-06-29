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
