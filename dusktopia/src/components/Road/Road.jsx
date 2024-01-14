import React, { useEffect, useState } from 'react';
import './style.scss';
import RoadCard from '../RoadCard/RoadCard';
import * as database from '../../RoadButtonsDB.json';

function Road() {
    const [Image, setImage] = useState('/images/motel.png');
    const styles = {
        backgroundImage: `url(${Image})`,
    };
    const data = Array.from(database);
    const RoadLink = [{name:'Factions',id:"#factions"},{name:'Roadmap',id:"#roadmap"},{name:"Collaborations",id:"#colobarations"}];

    return (
        <section id='roadmap' className="road">
            <div className="road__wrap">
                <div style={styles} className="road__img"></div>
            </div>
            <div className="content-wrapper">
                <h2 className="road__title">road map</h2>
                <div className="road__content">
                    <nav className="road__nav">
                        <ul className="road__sidebar-menu">
                            {RoadLink.map((item) => {
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
                    <img className="road__vector" src="./images/icons/vector.png" alt="vector" />
                    <div className="road__cards">
                        {data.map((item) => {
                            return (
                                <RoadCard key={item.id+'key'}
                                    id={item.id}
                                    name={item.name}
                                    content={item.textcontent}
                                    background={item.background}
                                    Change={setImage}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Road;
