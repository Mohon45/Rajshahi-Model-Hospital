import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../../images/banner/banner1.png';
import banner2 from '../../../images/banner/banner2.png';
import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
    return (
        <>
            <Carousel className="carosal-style">
                <Carousel.Item className="carosal-style">
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="carousel-title">
                        <h3>Happy to see you healthy</h3>
                        <h1>High Quality, Appropriate 
                            <br />
                            and Accessible medical care
                        </h1>
                        <p>We aim to deliver for all of our patients</p>
                        <a href="/">
                            <Button>Learn More </Button>
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carosal-style">
                    <img
                        className="d-block w-100 img-style"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="carousel-title">
                        <h3>Happy to see you healthy</h3>
                        <h1>The Trusted and 
                            <br />
                            friendly medical professionals
                        </h1>
                        <p>for every patient of all branches over the country</p>
                        <a href="/">
                            <Button>Learn More </Button>
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carosal-style">
                    <img
                        className="d-block w-100 img-style"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="carousel-title">
                        <h3>Happy to see you healthy</h3>
                        <h1>The art of our medical service
                            <br />
                            amuses the patient
                        </h1>
                        <p>while our technology identifies the disease sharply</p>
                        <a href="/">
                            <Button>Learn More </Button>
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;