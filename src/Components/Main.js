import React from 'react';
import Service from './Service';
import Why from './Why';
import Working from './Working';

function Main({display}) {
    return (
        <main className={display ? '': 'remove'}>
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
            <Why />
            <Service />
            <Working />
        </div>
    </main>
    )
}

export default Main;