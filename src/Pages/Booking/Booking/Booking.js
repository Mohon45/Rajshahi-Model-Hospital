import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { servicekey} = useParams();
    return (
        <div>
            <h1>This is Booking Section: {servicekey}</h1>
        </div>
    );
};

export default Booking;