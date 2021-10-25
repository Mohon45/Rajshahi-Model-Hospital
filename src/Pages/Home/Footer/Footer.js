import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <Container className="footer-container">
                <div className="left-site-footer">
                    <Navbar className="header-name" href="#home">
                        <h1>Rajshahi Model Hospital</h1>
                    </Navbar>
                    <p className="footer-description"> Rajshahi Model Hospital Ltd. has a collection of the most advanced medical technologies. All the machineries which are being used here are designed with rigorous safety standards to aid in the diagnosis or treatment of medical problems.</p>

                    <div className="social-icon">
                        <Link to="/"><i className="fab fa-facebook-square fa-3x"></i></Link>
                        <Link to="/"><i className="fab fa-instagram-square fa-3x"></i></Link>
                        <Link to="/"><i className="fab fa-twitter-square fa-3x"></i></Link>
                        <Link to="/"><i className="fab fa-linkedin fa-3x"></i></Link>
                    </div>
                    <h2 style={{fontWeight: "bold", color: "#0BC560", marginTop: "30px"}}>Help Desk</h2>
                    <h3>01782638193</h3>
                </div>
                <div className="about-us right-side-footer">
                    <h1>About Us</h1>
                    <ul>
                        <li>Support Forum</li>
                        <li>Faq & Help Center</li>
                        <li>Registretion And Account</li>
                        <li>Services & Help</li>
                    </ul>
                </div>
                

            </Container>
            <hr/>
            <p style={{textAlign: "center"}}>&copy;Copyright-2021 Junior Developer. Developed by <span className="footer-intro">Md.Mohon</span></p>
        </div>
    );
};

export default Footer;