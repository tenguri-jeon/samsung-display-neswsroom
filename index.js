chechWidth();
// 인기기사 js는 되는데 사진이 잘려요....

//한개의 컨텐츠width는 -> (전체 크기 - (갭크기*슬라이드갯수-1))/슬라이드 갯수
// (1200px - (32px*3-1))/3

let containerWidth;
let slideWidth;
let index = 0;
const slidecontainerWidth = document.getElementById('top-news-wrapper');
const slide = document.getElementsByClassName('top-news-container');
const slideWrapper = document.getElementsByClassName('top-news-container-wrapper');
const count = 3;
const nextslide = document.getElementsByClassName('after-img');

// nextslide[1].addEventListener('click', next);

function chechWidth() {
    // 컨테이너 전체 크기
    slideWidth = (containerWidth - (64 * (count - 1))) / count;
    containerWidth = slidecontainerWidth.clientWidth;
    for (let i = 0; i < count; i++) {
        slide[i].style.width = `${slideWidth}px`;
    }
}

// 왜 안될까요
// function next() {
//     if(index < slideWrapper.childElementCount-count){
//         index ++;
//     slideWrapper.style.transfrom = `translateX(-${index * (slideWidth + 32)}px)`;
// }
// }





