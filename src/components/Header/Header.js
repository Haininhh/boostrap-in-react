import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as  Router, Link, Switch } from 'react-router-dom';


const Header = (props) => {

    const handleClick = () => {
      props.setState("home");
    };
    const onClick = () => {
      props.setState("login");
    };
    
    return (
        <Router>
            <Switch>
                <header>
                    <Navbar bg="primary" variant="dark">
                        <Container>
                            <Link to="/home" style={{textDecoration: 'none'}}>
                                <Navbar.Brand href="/home">Home</Navbar.Brand>
                            </Link>
                            
                            <Nav className="ms-auto">
                                {props.loginState === "login" ? 
                                    <Link to="/home" style={{textDecoration: 'none'}}>
                                        <Nav.Link className="navbar__link white-cl" href="/home" onClick={handleClick}>Login</Nav.Link>
                                    </Link> :
                                    <></>
                                }   
                                {props.loginState === "home" ? 
                                    <Link to="/login" style={{textDecoration: 'none'}}>
                                        <Nav.Link className="navbar__link white-cl" href="/login"  onClick={onClick}>Logout</Nav.Link>
                                    </Link> :
                                    <></> 
                                }   
                            </Nav>
                        </Container>
                    </Navbar>
                </header>
            </Switch>
        </Router>
        
    )
}

export default Header;
