import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch /* Route */ } from "react-router-dom";
import Cookies from "universal-cookie";
// import Question from "../../features/QuestionList/Questions/Question";

interface Props {
  setQuestion: (param: boolean) => void;
  setState: (param: string) => void;
  loginState: string;
}

const Header = ({ setQuestion, setState, loginState }: Props) => {
  return (
    <Router>
      <Switch>
        <React.Fragment>
          <header>
            <Navbar bg="primary" variant="dark">
              <Container>
                <Nav.Link >
                  <Navbar.Brand href="/home"
                   onClick={() => {
                    setQuestion(true);
                  }}
                  >Home</Navbar.Brand>
                </Nav.Link>

                <Nav className="ms-auto">
                  <div className="header-container d-flex">
                    <div className="header-container__questions">
                      <Nav.Link
                        /* to="/questions" */
                        style={{ textDecoration: "none" }}
                        className="navbar__link white-cl"
                        onClick={() => {
                          setQuestion(false);
                        }}
                      >
                        Questions
                      </Nav.Link>
                    </div>
                    {loginState === "home" ? (
                      <div className="user">
                        {
                          <div className="userInfo">
                            <Nav.Link
                              className="navbar__link white-cl"
                              /* to="/login" */
                              style={{ textDecoration: "none" }}
                              href="/login"
                              onClick={() => {
                                const cookies = new Cookies();
                                cookies.remove("token");
                                setState("login");
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

          {/*   <Route path="/questions">
            <Question />
          </Route> */}
        </React.Fragment>
      </Switch>
    </Router>
  );
};

export default Header;
