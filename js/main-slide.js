mainslide();
function mainslide() {
    
    
const maincontainerwidth = document.getElementsByClassName('img-container-monitor');
const slideCount = 3;
const maincontainer = document.getElementsByClassName('img-container');
const mainslideWrapper = document.getElementsByClassName('img-container-wrapper');
const nextslide = document.getElementsByClassName('after-img');
const beforeslide = document.getElementsByClassName('before-img');
const navigationBar = document.getElementsByClassName('progress-span');
const navigationbutton = document.getElementsByClassName('progress-button');
let slideWith ; 
let index = 0;
let barWith = 0;
let barInterval;

for (let i = 0; i < maincontainer.length; i++) {
    makeProgressButton();
}

function makeProgressButton(){
    const navigationbutton = document.createElement('div');
    const navigationBar = document.createElement('span');
    navigationbutton.classList.add('progress-button');
    navigationBar.classList.add('progress-span');
    navigationbutton.appendChild(navigationBar);
    document.querySelector('.buttons').appendChild(navigationbutton);
}
// 네비게이션바 만들기





// 각 컨테이너 크기 만들어주기
for (let i = 0; i < maincontainer.length; i++) {
    maincontainer[i].style.width = `${100 / slideCount}%`
}

// 컨테이너 크기 만들어주기 -> 컨테이너의 크기 * 100
// for (let i = 0; i < maincontainerwidth.length; i++) {
    //     maincontainerwidth[i].style.width = `${slideCount * 100}%`
    // }
    
    
    // 클릭했을때 넘어가는 이벤트 만들기
    nextslide[0].addEventListener('click', slideRight);
    beforeslide[0].addEventListener('click', slideleft);
    
function slideRight() {
    index++;
    if (index===slideCount) {
        index = 0 ;
    }
    applySlide();
}

function slideleft() {
    index--;
    if (index=== -1 ) {
        index = slideCount -1 ;
    }
    applySlide();
}


function applySlide() {
    resetBar();
    for (let i = 0; i < mainslideWrapper.length ; i++) {
        mainslideWrapper[i].style.transform = `translateX(-${100 / slideCount * index}%)`
    }
}

// 네비게이션바 span 크기 바꾸기 
/*
1. 스팸 가져오기 -> function안에 들어가 있으니 다시 가져와야함
2. 스팸 크기 무엇으로 늘리고 줄일지 -> 
스팸 가져와서 윗스를 0%로 만들고 상황에 적절한 곳에 클래스 active넣어줌
intervarl을 선언하고 setInterval사용하여 interval을 실행시킨다. 
3. 스팸과 각 컨텐츠를 연겷해서 누르면 컨텐츠로 이동하게 만들어보기
*/

resetBar();
startBar();

function resetBar() {
    for (let i = 0; i < navigationbutton.length; i++) {
        barWith = 0;
        navigationbutton[i].classList.remove('active');
        navigationBar[i].style.width = '0%';
    }
    navigationbutton[index].classList.add('active');
}

function startBar() {
    barInterval = setInterval(() => {
        growBar();
    }, 100);
}

function stopBar() {
    clearTimeout(barInterval);
}

function  growBar() {   
    barWith += 2;    
    navigationBar[index].style.width = `${barWith}%`;
    if(barWith===100) {
        slideRight()
    }
}
}

