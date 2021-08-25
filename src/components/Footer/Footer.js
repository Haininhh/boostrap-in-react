import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import './Footer.css'

function Footer() {
    return (
        <div className="Footer white-cl">
            <Navbar expand="lg">
                <Container className="Footer__content">
                    <Navbar.Brand className="fsz-16 cl-grey">TeneTest @ 2020 Teneocto Inc</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="align-center">
                            <Nav.Link className="nav__link blue-cl fw-5" href="#Privacy">Privacy Policy</Nav.Link>
                            <Nav.Link className="nav__link blue-cl fw-5" href="#Team">Team of use</Nav.Link>
                            <Nav.Link className="nav__link blue-cl fw-5" href="#About">About</Nav.Link>
                            <Nav.Link className="nav__link blue-cl fw-5" href="#Contact">Contact us</Nav.Link>
                            <Form.Select className="me-sm-2 nav__form" id="inlineFormCustomSelect">
                                <option value="0">English</option>
                                <option value="1">Vietnamese</option>
                            </Form.Select>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Footer;
