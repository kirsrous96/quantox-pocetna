function scriptFile(){
const hamburger = document.getElementById('hamburger');
const navi = document.getElementById('navi');
const hero = document.querySelector('.hero');
const naviLeft = document.getElementById('naviLeft');
const site = document.getElementById('site');
const heroMouse = document.querySelector('.hero__mouse');
const closeIt = document.getElementById('close');
const foter = document.getElementById('foter');
const service = document.getElementById('service');
const naviLeftnav = document.getElementById('naviLeftnav').children;
const navFooter = document.getElementById('nav__footer').children;
const working = document.querySelector('.working')
const expand = document.getElementById('expand');
const less = document.querySelectorAll('.less');
const article1=document.querySelector('.working__article1');
const article2=document.querySelector('.working__article2');
const article3=document.querySelector('.working__article3');
const article4=document.querySelector('.working__article4');
const article5=document.querySelector('.working__article5');


window.onload = ()=> {
    hero.classList.add('animHero');

}



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

foter.addEventListener('mouseenter', () =>{
    naviLeft.classList.remove('main__nav');
    naviLeft.classList.add('nav__remove');
})
foter.addEventListener('mouseleave',() =>{
    naviLeft.classList.remove('nav__remove');
    naviLeft.classList.add('main__nav');
})

naviLeft.addEventListener('mouseenter', () =>{
    naviLeft.classList.add('addColor');
    for (let i = 0; i < naviLeftnav.length; i++) {
        naviLeftnav[i].style.color = "#fff";
      }
      for (let i = 0; i < navFooter.length; i++) {
        navFooter[i].style.color = '#fff';
      }
      
})

service.addEventListener('mouseenter', () =>{
    naviLeft.classList.add('addColor');
    for (let i = 0; i < naviLeftnav.length; i++) {
        naviLeftnav[i].style.color = "#fff";
      }
      for (let i = 0; i < navFooter.length; i++) {
        navFooter[i].style.color = '#fff';
      }
      
})

working.addEventListener('mouseover',() =>{
    article1.classList.add('animLeft');
    article2.classList.add('animRight');
    article3.classList.add('animLeft');
    article4.classList.add('animRight');
    article5.classList.add('animLeft');
})

naviLeft.addEventListener('mouseleave', () =>{
    naviLeft.classList.remove('addColor');
    for (let i = 0; i < naviLeftnav.length; i++) {
        naviLeftnav[i].style.color = "#333";
      }
      for (let i = 0; i < navFooter.length; i++) {
        navFooter[i].style.color = '#333';
      }
})
service.addEventListener('mouseleave', () =>{
    naviLeft.classList.remove('addColor');
    for (let i = 0; i < naviLeftnav.length; i++) {
        naviLeftnav[i].style.color = "#333";
      }
      for (let i = 0; i < navFooter.length; i++) {
        navFooter[i].style.color = '#333';
      }
})

expand.addEventListener('click',() =>{
    for (let i = 0; i <expand.length; i++) {
    less[i].classList.remove('less');
    less[i].classList.add('more');
    }
});

};

export default scriptFile;