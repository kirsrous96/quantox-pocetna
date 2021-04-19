const $ = require( "jquery" )


function scriptFile(){
const hamburger = document.getElementById('hamburger');
const navi = document.getElementById('navi');
const hero = document.querySelector('.hero');

const site = document.getElementById('site');

const heroHeader = document.querySelector(".hero__header");
const closeIt = document.getElementById('close');
const foter = document.getElementById('foter');

let navLogo = $('#navLogo');
let hor= $('#Hor');
let socialLinks = $('#social__links')

const expand = document.getElementById('expand');
const less = document.querySelectorAll('.less');

function mainNavAdd(){
    let topHead = $('.header').height();
    let topHero = $('.emtpy').height();
    let topHide = topHead + topHero;
    let docViewTop = $('#service').offset().top;
    let topFooter = $('#foter').offset().top;
    let docViewBottom = docViewTop + $('#service').height();
    let navLink1 = $("#navLink1"),navLink2 = $("#navLink2"),navLink3 = $("#navLink3"),navLink4 = $("#navLink4"),navLink5 = $("#navLink5"),
    navLink6 = $("#navLink6"),navLink7 = $("#navLink7"),navLink8 = $("#navLink8"),navLink9 = $("#navLink9"),navLink10 = $("#navLink10"),
    navLink11 = $("#navLink11"),navLink12 = $("#navLink12"),navLink13 = $("#navLink13"),navLink14 = $("#navLink14");
    let navLinks = [navLink1,navLink2,navLink3,navLink4,navLink5,navLink6,navLink7,navLink8,navLink9,navLink10,navLink11,navLink12,navLink13,navLink14];
    let otherNav = [hor,socialLinks,navLogo];
    for(let i=0;i< navLinks.length;i++){
        let elemTop = navLinks[i];
        if(elemTop.offset().top < topHide ||elemTop.offset().top > topFooter){
            elemTop.addClass("removeLinks");
        }else{
            elemTop.removeClass("removeLinks");
        }
    }
    for(let i=0;i< otherNav.length;i++){
        let other = otherNav[i];
        if(other.offset().top < topHide || other.offset().top > topFooter){
            other.addClass("removeLinks");
        }else{
            other.removeClass("removeLinks");
        }
    }

    for(let i=0;i< navLinks.length;i++){
        let elemTop = navLinks[i];
        if(elemTop.offset().top > docViewTop && elemTop.offset().top< docViewBottom){
            elemTop.addClass("addLinks");
            
        }else{
            elemTop.removeClass("addLinks");
        }
    }
}

function sectionWorkorkingAdd(){

    let docViewTop = $('.working').offset().top;
    let docViewBottom = docViewTop + $('.working').height();
    let article1=$('.working__article1');
    let article2=$('.working__article2');
    let article3=$('.working__article3');
    let article4=$('.working__article4');
    let article5=$('.working__article5');
    if($(window).scrollTop() > docViewTop && $(window).scrollTop() < docViewBottom){
        article1.addClass('animLeft');
        article2.addClass('animRight');
        article3.addClass('animLeft');
        article4.addClass('animRight');
        article5.addClass('animLeft');
    }else{
        article1.removeClass('animLeft');
        article2.removeClass('animRight');
        article3.removeClass('animLeft');
        article4.removeClass('animRight');
        article5.removeClass('animLeft');
    }
}

window.onload = ()=> {
    mainNavAdd();
    sectionWorkorkingAdd();
    hero.classList.add('animHero');
    heroHeader.style.animationDelay = ".4s";
    
}
$(window).scroll(function(){
    mainNavAdd();
    sectionWorkorkingAdd();
})


hamburger.addEventListener('click', () =>{
    navi.classList.add('nav__add');
    site.classList.add('remove');
    foter.classList.add('remove');
})

closeIt.addEventListener('click', () =>{
    navi.classList.remove('nav__add');
    site.classList.remove('remove');
    foter.classList.remove('remove');
})

expand.addEventListener('click',() =>{
    for (let i = 0; i <expand.length; i++) {
    less[i].classList.remove('less');
    less[i].classList.add('more');
    }
});
};
export default scriptFile;