export default (function scriptFile(){
    const query = document.querySelector.bind(document);
    const hamburger = query('#hamburger');
    const closeIt = document.getElementById('close');
    const expand = document.getElementById('expand');
    const less = document.querySelectorAll('.less');

    function mainNavAdd(){
        let topHead = query('.header').clientHeight;
        let topHero = query('.emtpy').clientHeight;
        let topHide = topHead + topHero;
        let docViewTop = query('#service').offsetTop;
        let topFooter = query('#foter').offsetTop;
        let docViewBottom = docViewTop + query('#service').clientHeight;
        let navLogo = query('#navLogo');
        let hor = query('#Hor');
        let socialLinks = query('#social__links');
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
        let articles = document.querySelectorAll('.article');
        if(windowScroll > docViewTop && windowScroll < docViewBottom){
            console.log(articles.length);
            for (let i = 0; i < articles.length; i++) {
                if(i % 2 !== 0){
                    articles[i].classList.add('animRight');
                }
                articles[i].classList.add('animLeft'); 
            }
        }else{
            for (let i = 0; i < articles.length; i++) {
                
                if(i % 2 !== 0){
                    articles[i].classList.remove('animRight');
                }
                articles[i].classList.remove('animLeft');
            }
        }
    }
    document.addEventListener('DOMContentLoaded', (event) => {
        let hero = query('.hero');
        let heroHeader = query("#hero__header");
        mainNavAdd();
        sectionWorkorkingAdd();
        hero.classList.add('animHero');
        heroHeader.style.animationDelay = ".4s";
    });

    window.onscroll = function(e) {
        mainNavAdd();
        sectionWorkorkingAdd();
    }
    
    // hamburger.addEventListener('click',() =>{
    //     let navi = query('#navi');
    //     let site = query('#site');
    //     let foter = query('#foter');
    //     navi.classList.add('nav__add');
    //     site.classList.add('remove');
    //     foter.classList.add('remove');
    // })
    // closeIt.addEventListener('click',() =>{
    //     navi.classList.remove('nav__add');
    //     site.classList.remove('remove');
    //     foter.classList.remove('remove');
    // })
    // expand.addEventListener('click',() =>{
    //     for (let i = 0; i <expand.length; i++) {
    //     less[i].classList.remove('less');
    //     less[i].classList.add('more');
    //     }
    // });
})();
