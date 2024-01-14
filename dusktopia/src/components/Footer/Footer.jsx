import React from 'react';
import './style.scss';
import { Images } from '../Header/Header';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <Link to='/' className='footer__logo'>Dusktopia</Link>
                <ul className="footer__menu">
                    {Images.map((item) => {
                        return (
                            <li key={item.alt+'key'} className="footer__item">
                                <a href="#" className="footer__link">
                                    <img key={item + 1} src={item.src} alt={item.alt} />
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <p className="footer__descriptions">Copyright © 2023. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
