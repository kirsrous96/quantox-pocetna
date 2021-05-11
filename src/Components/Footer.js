import React, { useState } from 'react';

function Footer({display}) {
    const [email,setEmail] = useState('');
    
    const subscribeTo = (e) =>{
        e.preventDefault();
        console.log(email);
        if(email !== ''){
            setEmail('Hvala vam!');
        }
    }

    const newInput = (e) =>{
        if(email !== ''){
            setEmail('');
        } 
    }

    return (
        <footer id="foter" className={display ? '': 'remove'}>
        <div className="form__container">
        <h1><span className="overline att">ПРИ</span>ЈАВИТЕ СЕ НА НАШУ Е-МАИЛ ЛИСТУ</h1>       
        <div className="form">
        <form >
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" id="email" placeholder="Ваш Е-маил" onClick={newInput}  />
            <button onClick={subscribeTo}>ПРИЈАВИ СЕ</button>
        </form>
        </div>
        </div>
        <div className="links">
            <div className="links__container">
                <img src="https://quantox.com/assets/img/logo-services.png" alt="Logo" />
        <div className="nav">
            <a href="#">Услуге</a>
            <a href="#">Портфолио</a>
            <a href="#">Вести</a>
            <a href="#">Блог</a>
            <a href="#">Контакт</a>
            <a href="#">О нама</a>
            <a href="#">Отворене позиције</a>
            <a href="#">Ангажујте Нас</a>
        </div>
        <div className="social__links">
            <a href="https://www.facebook.com/QuantoxTechnology"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/QuantoxCom"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/company/quantoxtechnology?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A2967774%2Cidx%3A2-1-2%2CtarId%3A1463128826639%2Ctas%3Aquantox"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/quantoxtech/"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/channel/UCFixgh2k_3jduhQ-Mg8PCoA"><i className="fab fa-youtube"></i></a>
        </div>
            </div>
        </div>
        <div className="foot__copy">
            <p>Сва ауторска права задржава Quantox Technology д.о.о. у чијем је власништву web сајт <a href="#"><span>www.quantox.com</span></a></p>
            <p><a href="#"><span>Мапа Сајта</span></a></p>
        </div>
    </footer>
    )
}

export default Footer
