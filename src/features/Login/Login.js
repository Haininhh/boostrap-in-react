import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import './Login.css';
import facebook from '../../assets/png/facebook.png';
import search from '../../assets/png/search.png';

const Login = (props) => {
    const onClick = () => {
        props.setState("home");
    };

    const handleClick = () => {
        props.setState("sigup");
    }

    return (
        <div className="content">
           <Router>
               <Switch>
                    <Container>
                        <div className="Login">
                            <h4 className="Login__heading">
                                Sig In to TeneTest
                            </h4>
                            <div className="Login__add m-0">
                                <Row className="justify-between mg-row">
                                    <Col className="pd-col">
                                        <button className="Login__add-social w-100 d-flex align-center justify-center">
                                            <img src={facebook} alt="facebook"/>
                                            <div className="Login__add-fb">
                                                Sign in with Facebook
                                            </div>
                                        </button>
                                    </Col>
                                    <Col className="pd-col">
                                        <button className="Login__add-social w-100 d-flex align-center justify-center">
                                            <img src={search} alt="search"/>
                                            <div className="Login__add-gg">
                                            Sign in with Google
                                            </div>
                                        </button>
                                    </Col>
                                </Row>
                            </div>
                            <div className="Login__Or mrb-3 d-flex">Or</div>
                            <Form className="mrb-3">
                                <Form.Group className="mrb-3" controlId="formBasicEmail">
                                    <Form.Control className="Login__form" type="email" placeholder="Email address" />
                                </Form.Group>
                                <Form.Group className="mrb-3" controlId="formBasicPassword">
                                    <Form.Control className="Login__form" type="password" placeholder="Password" />
                                </Form.Group>
                            
                                <Link to="/home" style={{ textDecoration: "none" }}>
                                    <div className="d-grid gap-2">
                                        <Button variant="primary" size="lg" onClick={onClick}>
                                            Sign in
                                        </Button>
                                    </div>
                                </Link>
                            </Form>
                            <div className="Sub__login d-flex align-center justify-between">
                                <div className="Sub__login-forger blue-cl fw-5">Forgot password?</div>
                            <Link to="/sigup" style={{ textDecoration: "none" }}>
                                <div className="Sub__login-newacc blue-cl fw-5" onClick={handleClick}>Sig up New Account</div>
                            </Link>
                            </div>
                        </div>
                    </Container>
               </Switch>
           </Router>
        </div>
        
        
    )
}

export default Login
