import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {title, img, desc, key} = service;
   
    return (
        <div className="service" id="services">
            <img src={img} alt="" />
            <h2>{title}</h2>
            <p>{desc.slice(0,150)}</p>
            <Link to={`/booking/${key}`}>
                <button className="btn mb-3">Booking {title.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;