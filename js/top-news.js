// 인기기사 js는 되는데 사진이 잘려요.... => 큰 슬라이드를 잘못가져왔음, 갭 크기 조정

//한개의 컨텐츠width는 -> (전체 크기 - (갭크기*슬라이드갯수-1))/슬라이드 갯수
// (1200px - (32px*3-1))/3
인기기사슬라이드();
function 인기기사슬라이드(){

let containerWidth;
let slideWidth;
let index = 0;
// slidecontainerWidth의 크기를 가져오는것이 아님
const slidecontainerWidth = document.querySelector('.top-news-slidewapper')
const slide = document.getElementsByClassName('top-news-container');
const slideWrapper = document.getElementsByClassName('top-news-container-wrapper');
const nextslide = document.getElementsByClassName('after-img');
const beforeslide = document.getElementsByClassName('before-img');

let count;
let contents;
let slidehallwidth;


nextslide[1].addEventListener('click', (e)=>{
    // 위로 올라가는거 초기화 시켜줌
    e.preventDefault();
    next();
}
);

beforeslide[1].addEventListener('click' , (e)=>{
    e.preventDefault();
    leftslide();
}
);


chechWidth(3, slidecontainerWidth, slide);

function chechWidth(count, slidehallwidth, contents) {
    // 컨테이너 전체 크기
    containerWidth = slidehallwidth.clientWidth;
    slideWidth = (containerWidth - (32 * (count - 1))) / count;
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.width = `${slideWidth}px`;
    }
}

// 왜 안될까요 -> 클래스로 가져왔으면 몇번째 자식인지 적어줘야 함.
function next() {
    if(index < slideWrapper[0].childElementCount-3){
        // 인덱스++띄어쓰기 하면 안됨
        index++;
    }
    // 클래스네임으로 가져왔기 때문에 [0]해줘야함
    slideWrapper[0].style.transform = `translateX(-${index * (slideWidth + 32)}px)`;
}
}

function leftslide() {
    index--;
    slideWrapper[0].style.transform = `translateX(-${index * (slideWidth + 32)}px)`;
}





