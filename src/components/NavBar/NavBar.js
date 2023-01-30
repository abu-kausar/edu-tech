import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        {/* <img
                        alt=""
                        src="..//..//../public/images/learning.png"
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                        />{' '} */}
                        <SchoolIcon></SchoolIcon> <b>ED-TECH</b>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link exact to="/home">Home</Nav.Link>
                        <Nav.Link href="/courses">Courses</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;