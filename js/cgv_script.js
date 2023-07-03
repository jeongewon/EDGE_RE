// HEADER 시작 (유림) //
// HEADER 끝 (유림) //

// MAIN_1 시작 (이원) //
// MAIN_1 끝 (이원) //

// MAIN_2 시작 (수연) //
// MAIN_2 끝 (수연) //

// MAIN_3 시작 (정석) //



let gotoTop = document.querySelector('.circle_down a');
let formend = document.querySelectorAll('.footer_form a')
let scromamt = window.scrollY;
gotoTop.addEventListener('click', function(e){
e.preventDefault();
window.scrollTo({
  top:0,
  left:0,
  behavior: 'smooth'
  });
});

for(let item of formend){
  item.addEventListener('click',(e)=>{
    e.preventDefault();
    window.alert('현재 이동이 불가합니다');
  });
};



// MIIN_3 끝 (정석) //
