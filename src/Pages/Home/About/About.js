import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../../../images/about.jpg';

const About = () => {
    return (
        <Container>
                <Row>
                    <Col className="my-5">
                        <h1 className="fw-bold " style={{color: "#0BC560"}}>The New Way to Healthy Life</h1>
                        <h2>12+ Years of Experience</h2>
                        <h2>Goals and Objectives</h2>
                        <p>Popular is committed to render the possible standard service to the people of the country at an affordable cost. This will definitely reduce the burden of the government and will make the path of "Health for all".</p>
                        <div className="d-flex">
                            <div className="p-3">
                                <h2>Extensive Employment</h2>
                                <p>A culture of internet only jobs has coined the phrase Wirk. Wirk simply means Internet Work.</p>
                            </div>
                            <div className="p-3">
                                <h2>Working Placeholdered</h2>
                                <p>A culture of internet only jobs has coined the phrase Wirk. Wirk simply means Internet Work.</p>
                            </div>
                        </div>
                    </Col>
                    <Col><img className="w-100 my-5 rounded-3" src={about} alt="" /></Col>
                </Row>
                
        </Container>
    );
};

export default About;