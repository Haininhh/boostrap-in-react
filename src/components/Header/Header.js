import React, { useState } from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as  Router, Link, Switch, /* Redirect */ } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';


const Header = (props) => {
    const userInfoURLApi = 'http://35.213.94.95:8899/api/users';
    const [values, setValues] = useState({
        username: "",
    })

    /* Get token */
    const cookies = new Cookies();
    const token = cookies.get("token");

    /* Get user info */
        const instance = axios.create({
            baseURL: userInfoURLApi,
            headers: {'Authorization': 'Bearer '+ token}
        });
        
        (instance.get('/me').then(response => {
            values.username = response.data.username;
            console.log(values.username)
        }))


    return (
        <Router>
            <Switch>
                <React.Fragment>
                    <header>
                        <Navbar bg="primary" variant="dark">
                            <Container>
                                <Link to="/home" style={{textDecoration: 'none'}}>
                                    <Navbar.Brand href="/home">Home</Navbar.Brand>
                                </Link>
                                
                                <Nav className="ms-auto">
                                    {props.loginState === "login" ? 
                                        <Link to="/home" style={{textDecoration: 'none'}}>
                                            <Nav.Link className="navbar__link white-cl" href="/home" onClick={() => props.setState("home")}>Login</Nav.Link>
                                        </Link> :
                                        <></>
                                    }
                                    
                                    {props.loginState === "home" ? 
                                        <div className="asdasd"> 
                                            {/* <div className="userInfo">{username}</div> */}
                                            <Link to="/login" style={{textDecoration: 'none'}}>
                                                <Nav.Link className="navbar__link white-cl" href="/login"  onClick={() => props.setState("login")}>{values.username}</Nav.Link>
                                            </Link> 
                                        </div> :
                                        <></> 
                                    }
                                </Nav>
                            </Container>
                        </Navbar>
                    </header>
                </React.Fragment>
            </Switch>
        </Router>
        
    )
}

export default Header;
