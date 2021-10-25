import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';
const Header = () => {
    const { user, logOut} = useAuth();
    return (
        <>
            <Navbar className="navber" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="nav-title wrap" href="#home">Rajshahi Model Hospital</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="nav-link">
                            <Nav.Link className="nav-link-only" as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link className="nav-link-only" as={HashLink} to="/services">Services</Nav.Link>
                            <Nav.Link className="nav-link-only" as={HashLink} to="/about">About Us</Nav.Link>
                
                            {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link className="nav-link-only" as={Link} to="/login">Login</Nav.Link>}
                            <Navbar.Text>
                                Signed in as: <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>  
        </>
    );
};

export default Header;