import React from 'react';
import './style.scss';
import HeaderButton from '../Utils/HeaderButton/HeaderButton';
import { Link } from 'react-router-dom';


function Header() {
    const headerButtons = ['Whitepaper','Mint','Content Wallet'];
    

    return (
        <header id='home' className="header">
            <div className="content-wrapper">
                <nav className="header__nav">
                    <Link to='/' className="header__logo">DuskTopia</Link>
                    <ul className="header__menu">
                        {Images.map(item => {
                            return(
                            <li key={item.alt+'key'} className="header__item">
                                <img  src={item.src} alt={item.alt} />
                            <a href="#" className="header__link">
                            </a>
                            </li>)
                        })}
                        <li className="header__item">
                            <HeaderButton contenttext = {headerButtons[0]} />
                        </li>
                    </ul>
                </nav>
                <div className="header__inner">
                    <div className="header__sidebar">
                        <ul className="header__sidebar-menu">
                            {HeaderLinks.map(item =>{
                                return(
                                    <li key={item.id+'key'} className="header__sidebar-item">
                                        <a href={item.id} className="header__sidebar-link">{item.name}</a>
                                    </li>)})}
                        </ul>
                    </div>
                    <div className="header__content">
                        <h1 className="header__title">FROM DUSK TO DAWN</h1>
                        <div className="header__buttons">
                            <HeaderButton contenttext = {headerButtons[1]} />
                            <HeaderButton contenttext = {headerButtons[2]} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;
export const HeaderLinks = [{name:'Home',id:"#home"},{name:'Factions',id:"#factions"},{name:"RoadMap",id:"#roadmap"}];
export const Images = [{src: '/images/icons/logos_discord-icon.svg' , alt: 'discord'},{src: '/images/icons/logos_twitter.svg' , alt: 'twitter'},{src: '/images/icons/ant-design_medium-circle-filled.svg' , alt: 'M'}]