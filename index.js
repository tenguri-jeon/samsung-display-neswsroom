// 인기기사

//한개의 컨텐츠width는 -> (전체 크기 - (갭크기*슬라이드갯수-1))/슬라이드 갯수
// (1200px - (32px*3-1))/3
const slide = document.getElementsByClassName('top-news-slidewapper');
const slideWidth = document.getElementsByClassName('top-news-container');
const containerWidth = slide.clientWidth;
const count = slide.childElementCount;

function width() {
    slideWidth = (containerWidth - (32*(count-1))/count);
}







