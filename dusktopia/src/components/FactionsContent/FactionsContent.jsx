import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

function FactionsContent({ data , value , setValue }) {
    const styles = {
        backgroundImage: `url(${data.BackG})`,
    };
    let URL = `/content/${value+1}`
    return (
        <div style={styles} className="faction">
            <div className="content-wrapper">
                <nav className="faction__nav">
                    <Link to="/" className="faction__btn">
                        Close
                    </Link>
                    {value == 4?<Link onClick={()=>{setValue(value=1)}} to='/content/1' className="faction__btn">Next</Link>:<Link onClick={()=>{setValue(value+1)}} to={URL} className="faction__btn">Next</Link>}
                </nav>
                <div className="faction__content">
                    <img src={data.Imagetitle} className="faction__content-img" />

                    <p className="faction__content-text">{data.TextContent}</p>

                    <div className="faction__content-cards">
                        {data.ImageIcon.map((item) => {
                            return (
                                <div key={item+'key'} className="faction__content-card">
                                    <img
                                        className="faction__content-card-img"
                                        src={item}
                                        alt="icon"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FactionsContent;
