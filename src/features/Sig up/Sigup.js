import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import Facebook from '../../assets/png/facebook.png';
import search from '../../assets/png/search.png';
import Left from '../../assets/png/left-arrow.png';
import '../../features/Login/Login.css';
import Validation from '../Validation/Validation';
// import axios from 'axios';


const Sigup = (props) => {
    const registerAPIUrl =("http://35.213.94.95:8899/api/users/register");
    /* Event */
    
    /* Change data */
    const handleChange = (event) => {
        setvalues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }

    /* Default btn and handle api */
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(Validation(values));
        // setDataIsCorrect(true);
        await fetch(registerAPIUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(formData),
        })
        console.log(formData)
    }
    /* End: event */
    const [values, setvalues] = useState({
        username: "", 
        password: "",
        confirm: "",
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
    });

    const formData = {
        username: values.username,
        password: values.password,
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        phone: values.phone,
    };
    
    const [errors, setErrors] = useState({ Validation });
    // const [dataIsCorrect, setDataIsCorrect] = useState(false)

    useEffect(() => {
        if (Object.keys(errors).length === 0 /* && dataIsCorrect */) {
            props.submitForm(true);
        }
    });

    return (
        <div className="content">
            <Router>
                <Switch>
                    <Container>
                        <div className="Login">
                            <h4 className="Login__heading">
                                Signup
                            </h4>
                            <div className="Login__add m-0">
                                <Row className="justify-between mg-row">
                                    <Col className="pd-col">
                                        <button className="Login__add-social w-100 d-flex align-center justify-center">
                                            <img src={Facebook} alt="facebook" />
                                            <div className="Login__add-fb">
                                                Sign in with Facebook
                                            </div>
                                        </button>
                                    </Col>
                                    <Col className="pd-col">
                                        <button className="Login__add-social w-100 d-flex align-center justify-center">
                                            <img src={search} alt="search" />
                                            <div className="Login__add-gg">
                                                Sign in with Google
                                            </div>
                                        </button>
                                    </Col>
                                </Row>
                            </div>
                            <div className="Login__Or mrb-3 d-flex">Or</div>
                            <Form className="mrb-3">
                                <Form.Group className="mrb-3" required>
                                    <Form.Control className="Login__form" placeholder="User name" name="username" value={values.username} onChange={handleChange} />
                                    <span className="form-message">{errors.username}</span>
                                </Form.Group>

                                <Form.Group className="mrb-3" required>
                                    <Form.Control className="Login__form" type="password" placeholder="Password" name="password" value={values.password} onChange={handleChange} />
                                    <span className="form-message">{errors.password}</span>
                                </Form.Group>

                                <Form.Group className="mrb-3" required>
                                    <Form.Control className="Login__form" type="password" placeholder="Confirm Password" name="confirm" value={values.confirm} onChange={handleChange} />
                                    <span className="form-message">{errors.confirm}</span>
                                </Form.Group>

                                <Form.Group className="mrb-3" required>
                                    <Form.Control className="Login__form" placeholder="First name" name="firstname" value={values.firstname} onChange={handleChange} />
                                    <span className="form-message">{errors.firstname}</span>
                                </Form.Group>

                                <Form.Group className="mrb-3" required>
                                    <Form.Control className="Login__form" placeholder="Last name" name="lastname" value={values.lastname} onChange={handleChange} />
                                    <span className="form-message">{errors.lastname}</span>
                                </Form.Group>

                                <Form.Group className="mrb-3" required>
                                    <Form.Control className="Login__form" placeholder="Email address" name="email" value={values.gmail} onChange={handleChange} />
                                    <span className="form-message">{errors.email}</span>
                                </Form.Group>

                                <Form.Group className="mrb-3" required>
                                    <Form.Control className="Login__form" placeholder="Phone number" name="phone" value={values.phone} onChange={handleChange} />
                                    <span className="form-message">{errors.phone}</span>
                                </Form.Group>

                                <Link to="/login" style={{ textDecoration: "none" }}>
                                    <div className="d-grid gap-2">
                                        <Button variant="primary" size="lg" onClick={handleSubmit}>
                                            Signup
                                        </Button>
                                    </div>
                                </Link>
                            </Form>
                            <div className="Sub__login d-flex align-center justify-between">
                                <Link to="/login" style={{ textDecoration: "none" }}>
                                    <div className="Sub__login-newacc blue-cl fw-5" onClick={() => props.setState("login")}><img className="Sub__login-leftArr" src={Left} alt="Left" /> Back</div>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </Switch>
            </Router>
        </div>


    )
}

export default Sigup;
