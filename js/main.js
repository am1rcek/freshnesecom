let elHeaderMenu = document.querySelector(".header__menu");
let elLinethird = document.querySelector(".line2");
let elLineOne = document.querySelector(".line1");
let elLineThree = document.querySelector(".line3");
let elNav = document.querySelector(".nav");
let elHeaderTop = document.querySelector(".header-top");


elHeaderMenu.addEventListener("click",function(){
    elLinethird.classList.toggle("remove-line");
    elLineOne.classList.toggle("rotate-line1");
    elLineThree.classList.toggle("rotate-line3");
    elNav.classList.toggle("open-nav");
    elHeaderTop.classList.toggle("open-header");
})