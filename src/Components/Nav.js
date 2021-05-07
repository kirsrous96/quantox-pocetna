import React from 'react';


function Nav() {
    return (
        <nav id="navi">
        <i id="close" className="nav__close fas fa-times fa-3x"></i>    
        <div className="navigation">
            <div className="nav__logo">
                <img src="https://quantox.com/assets/img/logo-menu.png" alt="logo" />
            </div>
            <div className="nav">
                <a href="#">Почетна страна</a>
                <a href="#">Услуге</a>
                <a href="#">Портфолио</a>
                <a href="#">Вести</a>
                <a href="#">Блог</a>
                <a href="#">Контакт</a>
                <a href="#">О нама</a>
                <a href="#">Отворене позиције</a>
                <a href="#">Ангажујте Нас</a>
            </div>
            <div className="navi__footer">
                <a href="#">eng  |</a>
                <a href="#">срб  |</a>
                <a href="#">ya  |</a>
                <a href="#">де  |</a>
                <a href="#">мк  |</a>
                <a href="#">хеб</a>
                <hr />
                <div className="social__links">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default Nav
