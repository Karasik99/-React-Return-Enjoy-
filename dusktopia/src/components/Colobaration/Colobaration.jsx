import React from 'react';
import './style.scss';

function Colobaration() {
    const ColobarationLink = [{name:'Roadmap',id:"#roadmap"},{name:'Collaborations',id:"#colobarations"},{name:"FAQ",id:"#faq"}];

    const ColobarationImage = [
        './images/logo-1.jpg',
        './images/logo-2.jpg',
        './images/logo-3.jpg',
        './images/logo-4.jpg',
    ];
    return (
        <section id='colobarations' className="colobarations">
            <div className="content-wrapper">
                <nav className="colobarations__nav">
                    <ul className="colobarations__sidebar-menu">
                        {ColobarationLink.map((item) => {
                            return (
                                <li key={item.id+'key'} className="road__sidebar-item">
                                    <a href={item.id} className="road__sidebar-link">
                                        {item.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className="colobarations__content">
                    <h3 className="colobarations__title">COLLABORATIONS</h3>
                    <div className="colobarations__cards">
                        {ColobarationImage.map((item) => {
                            return <img key={item+'key'} className="colobarations__card" src={item} alt="logo" />;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Colobaration;
