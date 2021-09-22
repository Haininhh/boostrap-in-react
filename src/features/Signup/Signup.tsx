import React, { useState, useEffect, MouseEvent, ChangeEvent } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import Facebook from "../../assets/png/facebook.png";
import search from "../../assets/png/search.png";
import Left from "../../assets/png/left-arrow.png";
import "../../features/Login/Login.css";
import { Users } from "../Validation/Validation";
import axios from "axios";

interface Props {
  submitForm: (param: boolean) => void;
  setState: (param: string) => void;
}

const Signup = ({ submitForm, setState }: Props) => {
  const registerAPIUrl = "http://35.213.94.95:8899/api/users/register";
  const required = { required: true };
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const [errors, setErrors] = useState<Users>({
    username: "",
    password: "",
    confirm: "",
    firstname: "",
    lastname: "",
    email: "",
    mobile_number: "",
  });
  const [warning, setWarning] = useState("");
  const [values, setvalues] = useState<Users>({
    username: "",
    password: "",
    confirm: "",
    firstname: "",
    lastname: "",
    email: "",
    mobile_number: "",
  });

  const formData = {
    username: values.username,
    password: values.password,
    firstname: values.firstname,
    lastname: values.lastname,
    email: values.email,
    mobile_number: values.mobile_number,
  };

  const handleChange = (
    event: ChangeEvent<{ name: string; value: string }>
  ) => {
    setvalues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log(values);
  };

  const handleSubmit = async (event: MouseEvent) => {
    event.preventDefault();
    setErrors(values);

    await axios
      .post(registerAPIUrl, formData)
      .then((res) => {
        setDataIsCorrect(true);
      })
      .catch((err) => {
        console.log(err);
        setDataIsCorrect(false);
      });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    } else if (Object.keys(errors).length === 0) {
      setWarning("Username or password already existed! Please try again.");
    }
  }, [errors, dataIsCorrect, submitForm]);

  return (
    <div className="content">
      <Router>
        <Switch>
          <React.Fragment>
            <Container>
              <div className="login">
                <h4 className="login__heading">Signup</h4>
                <div className="login__add m-0">
                  <Row className="justify-between mg-row">
                    <Col className="pd-col">
                      <button className="login__add-social w-100 d-flex align-center justify-center">
                        <img src={Facebook} alt="facebook" />
                        <div className="login__add-fb">
                          Sign in with Facebook
                        </div>
                      </button>
                    </Col>
                    <Col className="pd-col">
                      <button className="login__add-social w-100 d-flex align-center justify-center">
                        <img src={search} alt="search" />
                        <div className="login__add-gg">Sign in with Google</div>
                      </button>
                    </Col>
                  </Row>
                </div>
                <div className="login__or mrb-3 d-flex">Or</div>
                <Form className="mrb-3">
                  <Form.Group className="mrb-3" {...required}>
                    <Form.Control
                      className="login__form"
                      placeholder="User name"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                    />
                    <span className="form-message">{errors.username}</span>
                  </Form.Group>

                  <Form.Group className="mrb-3" {...required}>
                    <Form.Control
                      className="login__form"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                    />
                    <span className="form-message">{errors.password}</span>
                  </Form.Group>

                  <Form.Group className="mrb-3" {...required}>
                    <Form.Control
                      className="login__form"
                      type="password"
                      placeholder="Confirm Password"
                      name="confirm"
                      value={values.confirm}
                      onChange={handleChange}
                    />
                    <span className="form-message">{errors.confirm}</span>
                  </Form.Group>

                  <Form.Group className="mrb-3" {...required}>
                    <Form.Control
                      className="login__form"
                      placeholder="First name"
                      name="firstname"
                      value={values.firstname}
                      onChange={handleChange}
                    />
                    <span className="form-message">{errors.firstname}</span>
                  </Form.Group>

                  <Form.Group className="mrb-3" {...required}>
                    <Form.Control
                      className="login__form"
                      placeholder="Last name"
                      name="lastname"
                      value={values.lastname}
                      onChange={handleChange}
                    />
                    <span className="form-message">{errors.lastname}</span>
                  </Form.Group>

                  <Form.Group className="mrb-3" {...required}>
                    <Form.Control
                      className="login__form"
                      placeholder="Email address"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    <span className="form-message">{errors.email}</span>
                  </Form.Group>

                  <Form.Group className="mrb-3" {...required}>
                    <Form.Control
                      className="login__form"
                      placeholder="Phone number"
                      name="mobile_number"
                      value={values.mobile_number}
                      onChange={handleChange}
                    />
                    <span className="form-message">{errors.mobile_number}</span>
                    {dataIsCorrect === false ? (
                      <span className="login-warning">{warning}</span>
                    ) : (
                      <></>
                    )}
                  </Form.Group>

                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <div className="d-grid gap-2">
                      <Button
                        variant="primary"
                        size="lg"
                        onClick={handleSubmit}
                      >
                        Signup
                      </Button>
                    </div>
                  </Link>
                </Form>
                <div className="sub__login d-flex align-center justify-between">
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <div
                      className="sub__login-newacc blue-cl fw-5"
                      onClick={() => setState("login")}
                    >
                      <img
                        className="sub__login-leftArr"
                        src={Left}
                        alt="Left"
                      />{" "}
                      Back
                    </div>
                  </Link>
                </div>
              </div>
            </Container>
          </React.Fragment>
        </Switch>
      </Router>
    </div>
  );
};

export default Signup;
