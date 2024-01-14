import React from 'react';
import './style.scss';

function RoadCard({id, name, content, background,Change}){

    return (
        <div onMouseMove={()=>{Change(background)}} className="road__card">
            <h4 className="road__card-title">{id}</h4>
            <h5 className="road__card-subtitle">{name}</h5>
            <p className="road__card-text">
                {content}
            </p>
        </div>
    );
}

export default RoadCard;
