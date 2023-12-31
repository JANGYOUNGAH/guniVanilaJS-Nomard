const images = [
  "back1.jpg",
  "back2.jpg",
  "back3.jpg",
  "back4.jpg",
  "back5.jpg",
  "back6.jpg",
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
const wrap = document.querySelector("#wrap");

let bgaImages = bgImage.src = `images/${chosenImage}`;



// ::after를 입력할 style element를 만듭니다.
let rootAfterStyle = document.createElement("style");

// 원하는 ::after style을 작용합니다.
rootAfterStyle.innerHTML = 
`#wrap::after{
  width: 100%;
  height: 100%;
  content: "";
  position: absolute;
  top:0;
  left:0;
  z-index: -1;
  background-position: center ;
  opacity: 0.8;
  background: url(${bgaImages});
  background-size: cover;
  background-repeat: no-repeat;
}`;
  
// <head> tag에 넣습니다.
document.head.appendChild(rootAfterStyle);

