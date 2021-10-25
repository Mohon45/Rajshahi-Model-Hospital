import React from 'react';
import pageNotFound from '../../images/404 page.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <img className="not-found" src={pageNotFound} alt="" />
        </div>
    );
};

export default NotFound;