import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";
import Left from "../../assets/png/left-arrow.png";
import "../../features/Login/Login.css";

interface Props {
  setState: (param: string) => void;
}
const SignupSuccess = ({ setState }: Props) => {
  const onClick = () => {
    setState("login");
  };
  return (
    <div>
      <div className="content">
        <Container>
          <div className="login">
            <h4 className="login__heading">Signup</h4>
            <div className="login__or mrb-3 d-flex" style={{ color: "red" }}>
              Account Created!
            </div>
            <div className="sub__login d-flex align-center justify-between">
              <Link /* to="/login" */ /* style={{ textDecoration: "none" }} */>
                <div
                  className="sub__login-newacc blue-cl fw-5"
                  onClick={onClick}
                >
                  <img className="sub__login-leftArr" src={Left} alt="Left" />{" "}
                  Back
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SignupSuccess;
