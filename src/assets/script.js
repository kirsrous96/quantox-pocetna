module.exports = (function scriptFile(){
    const query = document.querySelector.bind(document);
    const hamburger = document.getElementById('hamburger');
    const navi = document.getElementById('navi');
    const hero = query('.hero');
    const site = document.getElementById('site');
    const heroHeader = query(".hero__header");
    const closeIt = document.getElementById('close');
    const foter = document.getElementById('foter');
    let navLogo = document.getElementById('navLogo');
    let hor= document.getElementById('Hor');
    let socialLinks = document.getElementById('social__links');
    const expand = document.getElementById('expand');
    const less = document.querySelectorAll('.less');

    function mainNavAdd(){
        let topHead = query('.header').clientHeight;
        let topHero = query('.emtpy').clientHeight;
        let topHide = topHead + topHero;
        let docViewTop = query('#service').offsetTop;
        let topFooter = query('#foter').offsetTop;
        let docViewBottom = docViewTop + query('#service').clientHeight;
        let navLink1 = query("#navLink1"),navLink2 = query("#navLink2"),navLink3 = query("#navLink3"),navLink4 = query("#navLink4"),navLink5 = query("#navLink5"),
        navLink6 = query("#navLink6"),navLink7 = query("#navLink7"),navLink8 = query("#navLink8"),navLink9 = query("#navLink9"),navLink10 = query("#navLink10"),
        navLink11 = query("#navLink11"),navLink12 = query("#navLink12"),navLink13 = query("#navLink13"),navLink14 = query("#navLink14");
        let navLinks = [navLink1,navLink2,navLink3,navLink4,navLink5,navLink6,navLink7,navLink8,navLink9,navLink10,navLink11,navLink12,navLink13,navLink14];
        let otherNav = [hor,socialLinks,navLogo];
        for(let i=0;i< navLinks.length;i++){
            let elementTop = navLinks[i];
            let elemTop = elementTop.getBoundingClientRect().top + document.documentElement.scrollTop;
            if(elemTop < topHide ||elemTop > topFooter){
                elementTop.classList.add("removeLinks");
            }else{
                elementTop.classList.remove("removeLinks");
            }
        }
        for(let i=0;i< otherNav.length;i++){
            let otherEl = otherNav[i];
            let other = otherEl.getBoundingClientRect().top + document.documentElement.scrollTop;
            if(other < topHide || other > topFooter){
                otherEl.classList.add("removeLinks");
            }else{
                otherEl.classList.remove("removeLinks");
            }
        }
        for(let i=0;i< navLinks.length;i++){
            let elementTop = navLinks[i];
            let elemTop = elementTop.getBoundingClientRect().top + document.documentElement.scrollTop;
            if(elemTop > docViewTop && elemTop< docViewBottom){
                elementTop.classList.add("addLinks");  
            }else{
                elementTop.classList.remove("addLinks");
            }
        }
    }

    function sectionWorkorkingAdd(){
        let docViewTop = query('.working').offsetTop;
        let docViewBottom = docViewTop + query('.working').offsetHeight;
        let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let article1=query('.working__article1');
        let article2=query('.working__article2');
        let article3=query('.working__article3');
        let article4=query('.working__article4');
        let article5=query('.working__article5');
        if(windowScroll > docViewTop && windowScroll < docViewBottom){
            article1.classList.add('animLeft');
            article2.classList.add('animRight');
            article3.classList.add('animLeft');
            article4.classList.add('animRight');
            article5.classList.add('animLeft');
        }else{
            article1.classList.remove('animLeft');
            article2.classList.remove('animRight');
            article3.classList.remove('animLeft');
            article4.classList.remove('animRight');
            article5.classList.remove('animLeft');
        }
    }
    document.addEventListener('DOMContentLoaded', (event) => {
        mainNavAdd();
        sectionWorkorkingAdd();
        hero.classList.add('animHero');
        heroHeader.style.animationDelay = ".4s";
    });

    window.onscroll = function(e) {
        mainNavAdd();
        sectionWorkorkingAdd();
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
    expand.addEventListener('click',() =>{
        for (let i = 0; i <expand.length; i++) {
        less[i].classList.remove('less');
        less[i].classList.add('more');
        }
    });
})();
