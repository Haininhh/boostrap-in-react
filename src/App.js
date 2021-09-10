import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./features/Login/Login";
import Home from "./features/Home/Home";
import Signup from "./features/Signup/Signup";
import SignupSuccess from "./features/Signup/SignupSuccess";
import Footer from "./components/Footer/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cookies from "universal-cookie";
import { Redirect } from "react-router";

const App = () => {
  const [state, setState] = useState("login");
  const [loggedIn, setLoggedIn] = useState(false);

  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };

  /* Get token */

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("token");

    if (token) {
      setLoggedIn(true);
      return <Redirect to={<Home />} />;
    }
  });

  return (
    <div className="App">
      <Header setState={setState} loginState={state} />

      {state === "login" ? (
        <Login setState={setState} loginState={state} />
      ) : state === "home" ? (
        <Home setState={setState} loginState={state} />
      ) : (
        <div>
          {!formIsSubmitted ? (
            <Signup
              setState={setState}
              loginState={state}
              submitForm={submitForm}
            />
          ) : (
            <SignupSuccess setState={setState} />
          )}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;
