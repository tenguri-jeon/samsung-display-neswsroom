const maincontainerwidth = document.getElementsByClassName('img-container-monitor');
const maincontainer = document.getElementsByClassName('img-container');

// 컨테이너 크기 만들어주기 -> 컨테이너의 크기 * 100
function makemainContainerwidth() {
    maincontainerwidth[0].style.width = maincontainerwidth[0].length * 100; 
}

for (let i = 0; i < maincontainer.length; i++) {
    maincontainer[i].style.width = `${100 / maincontainerwidth.length}`
}