import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import axios from "axios";
import Cookies from "universal-cookie";
import Question from "../../features/QuestionList/Questions/Question";

const Header = (props) => {
  return (
    <Router>
      <Switch>
        <React.Fragment>
          <header>
            <Navbar bg="primary" variant="dark">
              <Container>
                <Nav.Link to="/" style={{ textDecoration: "none" }}>
                  <Navbar.Brand href="/home">Home</Navbar.Brand>
                </Nav.Link>

                <Nav className="ms-auto">
                  <div className="header-container d-flex">
                    <div className="header-container__questions">
                      <Nav.Link
                        to="/questions"
                        style={{ textDecoration: "none" }}
                        className="navbar__link white-cl"
                        onClick={() => {
                          props.setQuestion(false);
                        }}
                      >
                        Questions
                      </Nav.Link>
                    </div>
                    {props.loginState === "home" ? (
                      <div className="user">
                        {/* {user} */}
                        {
                          <div className="userInfo">
                            <Nav.Link
                              className="navbar__link white-cl"
                              to="/login"
                              style={{ textDecoration: "none" }}
                              href="/login"
                              onClick={() => {
                                const cookies = new Cookies();
                                cookies.remove("token");
                                props.setState("login");
                              }}
                            >
                              Logout
                            </Nav.Link>
                          </div>
                        }
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </Nav>
              </Container>
            </Navbar>
          </header>

          <Route path="/questions">
            <Question />
          </Route>
        </React.Fragment>
      </Switch>
    </Router>
  );
};

export default Header;
