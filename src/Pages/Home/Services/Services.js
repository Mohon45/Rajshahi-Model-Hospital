import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);

    return (
        <div className="service-container" id="services">
            <Container>
                <h1 className="service-title mt-5 mb-5">Our services</h1>
                <div className="service-card mb-5">
                    {
                        services.map(service => <Service
                            key={service.key}
                            service={service}
                        ></Service>
                        )
                    }
                </div>
            </Container>
        </div>
    );
};

export default Services;