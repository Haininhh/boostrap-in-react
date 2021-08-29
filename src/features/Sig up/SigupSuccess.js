import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import Left from '../../assets/png/left-arrow.png';
import '../../features/Login/Login.css';



const SigupSuccess = (props) => {
    const onClick = () => {
        props.setState("login");
    }
    return ( 
        <div>
            <div className="content">
            <Router>
                <Switch>
                    <Container>
                        <div className="Login">
                            <h4 className="Login__heading">
                                Sig Up
                            </h4>
                            
                            <div className="Login__Or mrb-3 d-flex" style={{ color: "red" }}>Account Created!</div>
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

        </div>
    )
}

export default SigupSuccess;