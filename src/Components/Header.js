import React from 'react';


function Header() {
    return (
        <header>
        <div className="header">
            <div className="logo">
                <img src="https://quantox.com/assets/img/logo.png" alt="Logo" />
            </div>
            <div className="header__right">
                <div className="languages">
                    <a href="#">eng  |</a>
                    <a href="#">срб  |</a>
                    <a href="#">ya  |</a>
                    <a href="#">де  |</a>
                    <a href="#">мк  |</a>
                    <a href="#">хеб</a>
                </div>
                <div id="hamburger" className="ham_menu">
                    <i className="fas fa-bars fa-3x"></i>
                </div>
            </div>
        </div>
        
        <div className="emtpy">
            <section id="hero" className="hero">
                <h1 id="hero__header" className="hero__header">Web Development & IT Consulting</h1>
                <a className="hero__mouse" href="#articles"><div className="mouse"><div className="mouse__dot"></div></div>
                </a>  
            </section>
        </div>
    </header>
    )
}

export default Header
