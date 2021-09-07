import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import '../../features/Login/Login.css';
import facebook from '../../assets/png/facebook.png';
import search from '../../assets/png/search.png';
// import { setUserSession } from '../Utils/Common'
import Cookies from 'universal-cookie';
import axios from 'axios';



const Login = (props) => {
    const cookies = new Cookies();

    const [errors, setErrors] = useState(null);
    const loginURLAPI = "http://35.213.94.95:8899/api/users/authenticate";    
    const[values, setValues] = useState({
        username: "",
        passswords: "",
    });
    
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }

    
    const handleLogin = async (e) => {
        setErrors(null)
        e.preventDefault();
        await axios.post(loginURLAPI, {
            username: values.username,
            password: values.password,
        })
        .then(res => {
            cookies.set("token", res.data.access_token, res.data.username)
            props.setState("home")
            // console.log(res.data.access_token, res.data.username)
        })
        .catch(err => {
            if(err.response.status === 400 || err.response.status === 401){
                setErrors("Username or password incorrect. Please try again later!");
            } else {
                setErrors(err.response.data.message);
            }
        })
    };

    const readCookie = () => {
        const token = cookies.get("token");
        console.log(token);

    }

    // useEffect(() => {
    //     readCookie();
    // }, [])

    return (
        <div className="content">
           <Router>
               <Switch>
                    <React.Fragment>
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
                                <Form.Group className="mrb-3" controlId="formBasicEmail" required>
                                    <Form.Control className="Login__form" placeholder="User name" name="username" value={values.username} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mrb-3" controlId="formBasicPassword" required>
                                    <Form.Control className="Login__form" type="password"  placeholder="Password" name="password" value={values.password || ''} onChange={handleChange} />
                                    <span className="form-message">{errors}</span>
                                </Form.Group>
                            
                                <Link to="/home" style={{ textDecoration: "none" }}>
                                    <div className="d-grid gap-2">
                                        <Button variant="primary" size="lg" onClick={handleLogin}>
                                            Sign in
                                        </Button>
                                    </div>
                                </Link>
                            </Form>
                            <div className="Sub__login d-flex align-center justify-between">
                                <div className="Sub__login-forger blue-cl fw-5">Forgot password?</div>
                            <Link to="/sigup" style={{ textDecoration: "none" }}>
                                <div className="Sub__login-newacc blue-cl fw-5" onClick={(handleSigup) => props.setState("sigup")}>Sig up New Account</div>
                            </Link>
                            </div>
                        </div>
                        </Container>
                    </React.Fragment>
               </Switch>
           </Router>
        </div>
        
        
    )
}

export default Login;
