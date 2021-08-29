import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import Facebook from '../../assets/png/facebook.png';
import search from '../../assets/png/search.png';
import Left from '../../assets/png/left-arrow.png';
import '../../features/Login/Login.css';
import Validation from '../Validation/Validation';
import Axios from 'axios';

const Sigup = (props) => {
    const urlApi ="http://localhost:3000/users";
    /* Event */

    /* Back to login page */
    const onClick = () => {
        props.setState("login");
    }
    /* Change data */
    const handleChange = (event) => {
        setvalues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }
    /* Default btn and handle api */
    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(Validation(values));

        setDataIsCorrect(true);

        Axios.post(urlApi, {
            username: values.username,
            password: values.password
        })
        .then((response) => console.log(response.values));
    }
    /* End: event */
    
    fetch(urlApi)
        .then((response) => response.json())
        .then((users) => console.log(users.response))

    const [values, setvalues] = useState({
        username: "",
        password: "",
        confirm: "",
    });

    const [errors, setErrors] = useState({ Validation });
    const [dataIsCorrect, setDataIsCorrect] = useState(false)


    

    

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
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
                                Sig Up
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
                                <Form.Group className="mrb-3" controlId="formBasicPassword" required>
                                    <Form.Control id="username" className="Login__form" invalid placeholder="User name" name="username" value={values.username} onChange={handleChange} />
                                    <span className="form-message">{errors.username}</span>
                                </Form.Group>

                                <Form.Group className="mrb-3" controlId="formBasicPassword" required>
                                    <Form.Control id="password" className="Login__form" type="password" placeholder="Password" name="password" value={values.password} onChange={handleChange} />
                                    <span className="form-message">{errors.password}</span>
                                </Form.Group>

                                <Form.Group className="mrb-3" controlId="formBasicPassword" required>
                                    <Form.Control id="confirm-password" className="Login__form" type="password" placeholder="Confirm Password" name="confirm" value={values.confirm} onChange={handleChange} />
                                    <span className="form-message">{errors.confirm}</span>
                                </Form.Group>

                                <Link to="/login" style={{ textDecoration: "none" }}>
                                    <div className="d-grid gap-2">
                                        <Button variant="primary" size="lg" onClick={handleSubmit}>
                                            Sign up
                                        </Button>
                                    </div>
                                </Link>
                            </Form>
                            <div className="Sub__login d-flex align-center justify-between">
                                <Link to="/login" style={{ textDecoration: "none" }}>
                                    <div className="Sub__login-newacc blue-cl fw-5" onClick={onClick}><img className="Sub__login-leftArr" src={Left} alt="Left" /> Back</div>
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
