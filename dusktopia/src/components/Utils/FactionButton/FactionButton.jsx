import React, { useContext, useState,} from 'react';
import './style.scss';
import { Link } from "react-router-dom";



function FactionButton({ buttonimg, image, name , id , value , setValue }) {
    
    const styles = {
        backgroundImage: `url(${buttonimg})`,
    };
    let URL = `/content/${id}`
    const [check , setCheck] = useState(false);

    return (
        <div className="factions__card">
            <h3 onClick={()=>{setCheck(!check)}} className="factions__card-title">{name}</h3>
            {check &&  <>
                <img className="factions__card-image" src={image} alt="" />
                <Link onClick={()=>setValue(id)} to={URL} style={styles} className="factions__card-button">
                    More
                </Link>
            </>}
        </div>
    );
}

export default FactionButton;
