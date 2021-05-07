import React from 'react';

function Main() {
    return (
        <main>
        <div id="naviLeft" className="main__nav">
            <img id="navLogo" src="https://quantox.com/assets/img/logo-menu.png" alt="Logo" />
            <div id="naviLeftnav" className="nav">
                <a className="navA" id="navLink1" href="#">Услуге</a>
                <a className="navA" id="navLink2" href="#">Портфолио</a>
                <a className="navA" id="navLink3" href="#">Вести</a>
                <a className="navA" id="navLink4" href="#">Блог</a>
                <a className="navA" id="navLink5" href="#">Контакт</a>
                <a className="navA" id="navLink6" href="#">О нама</a>
                <a className="navA" id="navLink7" href="#">Отворене позиције</a>
                <a className="navA" id="navLink8" href="#">Ангажујте Нас</a>
            </div>
            <div id ="nav__footer" className="nav__footer">
                <a className="navA" id="navLink9" href="#">eng  |</a>
                <a className="navA" id="navLink10" href="#">срб  |</a>
                <a className="navA" id="navLink11" href="#">ya  |</a>
                <a className="navA" id="navLink12" href="#">де  |</a>
                <a className="navA" id="navLink13" href="#">мк  |</a>
                <a className="navA" id="navLink14" href="#">хеб</a>
                    
                <hr id="Hor" />
                <div id="social__links" className="social__links">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        </div>
        <div id="articles" className="articles">
        <article id="why" className="why">
                <div className="why__back"><h1><span className="overline">ЗАШ</span>ТО ИЗАБРАТИ QUANTOX?</h1></div>
                <div className="why__text">
                    <ul className="text">
                            <li className="why__text1"><p>Quantox је поуздан! Радићете са компанијом која запошљава више од 200 квалификованих стручњака из разних области, а комбинација њихових талената омогућава нам да самоуверено креирамо апсолутно сваку врсту дигиталног производа, од desktop и мобилних апликација до уређаја за виртуелну реалност. Наш највећи приоритет је да осигурамо да посао који сте нам доделили буде урађен добро и на време</p></li>
                            <li className="why__text2"><p>Запошљавамо најбоље што IT индустрија има да понуди, како би наши клијенти увек добили стабилна, креативна и одржива решења</p></li>
                            <li className="why__text3"><p>Имамо више од 10 година искуства и поносимо се квалитетом наших услуга.</p></li>
                            <li className="why__text4"><p>Наш тим се служи енглеским језиком на високом нивоу што је од виталног значаја за добру комуникацију са клијентима - штеди ваше време и спречава евентуалне несугласице и нејасноће приликом превода и рада на пројекту.</p></li>
                            <li className="why__text5 less"><p>Наше особље је исплативо решење за вас - на располагању вам је лојалан и посвећен тим искусних програмера.</p></li>
                            <li className="why__text6 less"><p>Поред рада на постојећим пројектима, наш тим је посвећен константном тренингу и унапређењу знања и искуства, пратећи најновије технологије и методе рада у циљу израде најквалитетнијег производа</p></li>
                            <li className="why__text7 less"><p>Quantox Technology је основан на принципима вредновања рада, бриге о запосленима и клијентима, одговорном понашању свих у компанији, а све у циљу подизања граница сарадње на свим нивоима. Сви запослени у Quantoxu су добро плаћени и третирани су са поштовањем. Водимо се изузетном радном етиком, градимо јединство тима кроз разна дружења унутар и ван канцеларије</p></li>
                            <li className="why__text8 less">Quantox ради на врло занимљивим и динамичним пројектима, на платформама које досежу милионе корисника на глобалном нивоу.</li>
                    </ul>
                    <button id="expand">ВИДИ СВЕ</button>
                </div>
        </article>
        <article id="service" className="service">
            <h1><span className="overline">НАШ</span>Е УСЛУГЕ</h1>
            <div className="service__text">
                <ul className="hex-grid__list">
                    <a href="#">
                    <li className="hex-grid__item hex-1">
                        <div className="hex-grid__content">
                            РАЗВОЈ МОБИЛНОХ АПЛИКАЦИЈА
                        </div>
                    </li>
                </a>
                <a href="#">
                    <li className="hex-grid__item hex-2">
                        <div className="hex-grid__content">
                            АДМИНИСТРАТОР
                        </div>
                    </li></a>
                    <a href="#">
                    <li className="hex-grid__item hex-3">
                        <div className="hex-grid__content">
                            BACK END ПРОГРАМИРАЊЕ
                        </div>
                    </li></a>
                    <a href="#">
                    <li className="hex-grid__item hex-4">
                        <div className="hex-grid__content">
                            КОНСАЛТИНГ
                        </div>
                    </li></a>
                    <a href="#">
                    <li id="hex-5" className="hex-grid__item hex-5">
                        <div className="hex-grid__content">
                            FRONT END ПРОГРАМИРАЊЕ
                        </div>
                    </li></a>
                    <a href="#">
                    <li className="hex-grid__item hex-6">
                        <div className="hex-grid__content">
                            ВЕБ ДИЗАЈН
                        </div>
                    </li></a>
                    <a href="#">
                    <li className="hex-grid__item hex-7">
                        <div className="hex-grid__content">
                            ПОДРШКА
                        </div>
                    </li></a>
                    <a href="#">
                    <li className="hex-grid__item hex-8">
                        <div className="hex-grid__content">
                            ВИРТУЕЛНИ АСИСТЕНТИ
                        </div>
                    </li></a>
                    <a href="#">
                    <li className="hex-grid__item hex-9">
                        <div className="hex-grid__content">
                            КОРИСНИШКА ПОДРШКА
                        </div>
                    </li></a>
                    <a href="#">
                    <li className="hex-grid__item hex-10">
                        <div className="hex-grid__content">
                            АУТОРСКА ПРАВА
                        </div>
                    </li></a>
                    <a href="#">
                    <li className="hex-grid__item hex-11">
                        <div className="hex-grid__content">
                            ВИДЕО МОНТАЖА
                        </div>
                    </li></a>
                </ul>
            </div>
        </article>
        <article id="working" className="working">
            <div className="working__back"><h1><span className="overline">ПРО</span>ЦЕС РАДА</h1></div>
            <div className="working__articles">
            <div className="working__article1 article">
                <div className="working__article">
                <h1>ФАЗА 1 - КРЕАТИВНА ДИСКУСИЈА</h1>
                <p>Важно нам је да разумемо вашу визију и пројектне циљеве, стога практикујемо да вас пажљиво саслушамо пре почетка рада на пројекту. Од виталног је значаја да сваки пројекат буде добро вођен како би се осигурао квалитет услуге што укључује стварање основа за даље развијање сарадње.</p>
            </div>
            </div>
            <div className="working__article2 article">
                <div className="working__article">
                <h1>ПРОЈЕКТНА ДОКУМЕНТАЦИЈА</h1>
                <p>Претварамо ваше идеје у детаљне функционалне захтеве и спецификације. Ово нам даје могућност да дефинишемо сет технологија које ћемо користити приликом израде вашег дигиталног производа.</p>
            </div>
            </div>
            <div className="working__article3 article">
                <div className="working__article">
                <h1>ФОРМИРАЊЕ ТИМА</h1>
                <p>На основу ваших захтева, временских рокова и спецификација, Quantox ће креирати тим стручњака који ће оживети вашу идеју.</p>
            </div>
            </div>
            <div className="working__article4 article">
                <div className="working__article">
                <h1>РАЗВОЈ</h1>
                <p>И забава може да почне. Када се договори почетна основа и спецификација, Quantox ће, на агилан начин, радити на реализацији сваког дела слагалице било ког специфичног захтева наших клијената, а у циљу превазилажења и њихових највећих очекивања.</p>
            </div>
            </div>
            <div className="working__article5 article">
                <h1>ДИСТРИБУЦИЈА И ОДРЖАВАЊЕ</h1>
                <div className="working__article">
                <p>Quantox гарантује пружање квалитетне подршке и сигурности при сваком кораку! Од имплементације до лансирања, надоградње и одржавања ми смо ту да вам пружимо подршку за све ваше потребе.</p>
            </div>
            </div>
        </div>
        </article>
    </div>
    </main>
    )
}

export default Main;