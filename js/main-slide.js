const maincontainerwidth = document.getElementsByClassName('img-container-monitor');
// slideCount가 이상한지 다음으로 이상하게 넘어갑니다.
const slideCount = 3;
const maincontainer = document.getElementsByClassName('img-container');
const mainslideWrapper = document.getElementsByClassName('img-container-wrapper');



// 네비게이션바 만들기
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





// 각 컨테이너 크기 만들어주기
for (let i = 0; i < maincontainer.length; i++) {
    maincontainer[i].style.width = `${100 / slideCount}`
}

// 컨테이너 크기 만들어주기 -> 컨테이너의 크기 * 100
for (let i = 0; i < maincontainerwidth.length; i++) {
    maincontainerwidth[i].style.width = `${slideCount * 100}%`
}

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
    if (index===-1) {
        index = slideCount -1 ;
    }
    applySlide();
}


function applySlide() {
    for (let i = 0; i < mainslideWrapper.length ; i++) {
        index++;
        mainslideWrapper[i].style.transform = `translateX(calc( -100% / ${slideCount} * ${index}))`
    }
}

