import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

function NotFound() {
    return (
        <article className="notfound">
            <div className="notfound__subpicture">
                <p className="notfound__subpicture-text">4</p>
                <p className="notfound__subpicture-text">0</p>
                <p className="notfound__subpicture-text">4</p>
            </div>
            <div className="notfound__content">
                <div className="notfound__info-1">
                    <img src="./images/error.svg" alt="error" />
                    <h2 className="notfound__title">Whoops!</h2>
                </div>
                <h2 className="notfound__title">Page not found!</h2>
                <p className="notfound__text">
                    We're sorry, the page you were looking for isn't found here. The link you
                    followed may either be broken or no longer exists. Please try again, or take a
                    look at our.
                </p>
                <div className="notfound__info-2">
                    <h2 className="notfound__title">Maybe go main page?</h2>
                    <Link to='/' className="notfound__link">yes</Link>
                </div>
            </div>
        </article>
    );
}

export default NotFound;
