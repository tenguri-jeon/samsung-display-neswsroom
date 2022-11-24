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


for(let i=0 ; i < ProgressButton.length ; i++ ){
    createBar();
}

function createBar() {
    const makeProgressButton = document.createElement('div');
    makeProgressButton.classList.add('progress-button')
    const makeProgressBar = document.createElement('span');
    makeProgressBar.classList.add('progress-span');
    makeProgressButton.appendChild(makeProgressBar);
    document.querySelector('.buttons').appendChild(makeProgressButton);
}
