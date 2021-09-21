import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./features/Home/Home";
import Login from "./features/Login/Login";
import QuestionList from "./features/QuestionList/QuestionList";
import Signup from "./features/Signup/Signup";
import SignupSuccess from "./features/Signup/SignupSuccess";

const App = () => {
  const [state, setState] = useState("login");
  const [question, setQuestion] = useState(false);
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };
  /* Get token */

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("token");
    if (token) {
      setState("home");
    }
  }, []);

  console.log(question);

  return (
    <div className="App">
      <Header
        setState={setState}
        loginState={state}
        setQuestion={setQuestion}
      />

      {state === "login" ? (
        <Login setState={setState} loginState={state} />
      ) : state === "home" ? (
        <>
          {question === true ? (
            <Home setState={setState} loginState={state} />
          ) : (
            <QuestionList />
          )}
        </>
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
