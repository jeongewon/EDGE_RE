/* HEADER 시작 (유림) */
/* HEADER 끝 (유림) */

/* MAIN_1 시작 (이원) */
/* MAIN_1 끝 (이원) */

/* MAIN_2 시작 (수연) */
let eventM_Wrapper = document.querySelector('.event_move_wrapper'),
    eventM_Lists = document.querySelector('.event_lists'),
    event_Slides = eventM_Lists.querySelectorAll('.event_lists li'),
    eSlide_Count = event_Slides.length,
    event_SlidesPreView = 3,
    eSlide_Width = 402,
    eSlide_Margin = 33,
    choiceIdx = 0,
    eprevBtn = document.querySelector('.move_controls button.pre_btn'),
    enextBtn = document.querySelector('.move_controls button.next_btn');

for(let i = 0; i < eSlide_Count; i++){
  let clone_eSlide = event_Slides[i].cloneNode(true);
  clone_eSlide.classList.add('clone');
  eventM_Lists.appendChild(clone_eSlide);
}

for(let i = eSlide_Count - 1; i >= 0; i--){
  let clone_eSlide = event_Slides[i].cloneNode(true);
  clone_eSlide.classList.add('clone');
  eventM_Lists.prepend(clone_eSlide);
}

new_eSlides = document.querySelectorAll('.event .event_lists li');

new_eSlides.forEach((slide, idx)=>{
  slide.style.left = `${idx * (eSlide_Width + eSlide_Margin)}px`;
});

function set_eSlide(){
  let e_ulMoveAmt = (eSlide_Width + eSlide_Margin) * -eSlide_Count + 'px';
  eventM_Lists.style.transform = `translateX(${e_ulMoveAmt})`;
  eventM_Lists.classList.add('animated');
}
set_eSlide();

//이벤트 섹션 슬라이드 이동함수
function move_eSlide(num){
  eventM_Lists.style.left = -num * (eSlide_Width + eSlide_Margin) + 'px';
  choiceIdx = num;
  console.log(choiceIdx);

  if(choiceIdx == -eSlide_Count || choiceIdx == eSlide_Count){
    setTimeout(()=>{
      eventM_Lists.classList.remove('animated');
      eventM_Lists.style.left = '0px';
      choiceIdx = 0;
    }, 500);
    setTimeout(()=>{
      eventM_Lists.classList.add('animated');  
    }, 600);
  }
}
move_eSlide(0);

function e_debounce(callback, time){
  let eslideTrigger = true;

  return ()=>{
    if(eslideTrigger){
      callback(); eslideTrigger = false;
      setTimeout(()=>{eslideTrigger = true;}, time);
    }
  }
}

//이벤트 캐러셀 좌우 버튼 컨트롤
eprevBtn.addEventListener('click', e_debounce(()=>{
  move_eSlide(choiceIdx - 1); 
}, 500));

enextBtn.addEventListener('click', e_debounce(()=>{
  move_eSlide(choiceIdx + 1); eprevBtn.style.visibility = 'visible';
}, 500));

/* MAIN_2 끝 (수연) */

/* MAIN_3 시작 (정석) */
/* MAIN_3 끝 (정석) */