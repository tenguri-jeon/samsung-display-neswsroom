const navTouch = document.querySelector('nav');
const header = document.querySelector('header');



navTouch.addEventListener('mouseenter', ()=>{
    header.classList.add('active');
})

navTouch.addEventListener('mouseleave', ()=>{
    header.classList.remove('active');
})
// 네비게이션 스크립트

const index = 0;
const imgContainerwrapper = document.querySelector('.img-container-monitor');
console.log(imgContainerwrapper);


// for(let i=0 ; i < ProgressButton.length ; i++ ){
//     createBar();
// }

function createBar() {
    const makeProgressButton = document.createElement('div');
    makeProgressButton.classList.add('progress-button')
    const makeProgressBar = document.createElement('span');
    makeProgressBar.classList.add('progress-span');
    makeProgressButton.appendChild(makeProgressBar);
    document.querySelector('.buttons').appendChild(makeProgressButton);
}


// 인기기사
const topNewscontainer = document.getElementsByClassName('top-news-container');
const leftbutton = document.getElementsByClassName('before-img');
const rightbutton = document.getElementsByClassName('after-img');
const topNewscontainerwrapper = document.getElementsByClassName('top-news-container-wrapper');
const slideCount = topNewscontainerwrapper[0].childElementCount;

leftrightbutton();

function leftrightbutton () {
    leftbutton.addEventListener('click', slideLeft);
    rightbutton.addEventListener('click', slideRight);

//슬라이드 레퍼의 크기 조정해 주기 => 화면 형성해 주기
    for (let i = 0; i < topNewscontainerwrapper.length; i++) {
        topNewscontainerwrapper[i].style.width = `${slideCount*100}%`
    }
//슬라이드 레퍼의 크기 조정해 주기 => calc(100 / 3과 같음)
    for(let i = 0 ; i < topNewscontainer.length ; i ++) {
        topNewscontainer[i].style.width = `${100/slideCount}%`
    }

function slideRight() {
    index++;
    if(index===slideCount){
        index=0;
    }
    applySlide();
}

function slideLeft() {
    index--;
    if(index === -1){
        index = slideCount-1;
    }
    applySlide();
}

function applySlide() {
    for (let i = 0; i < topNewscontainerwrapper.length; i++) {
    topNewscontainerwrapper[i].style.transform = `translateX(calc( -100% / ${slideCount} * ${index}))`;
}
}
}

