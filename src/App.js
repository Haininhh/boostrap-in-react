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
import axios from "axios";
import Question from "./features/Questions/Question";
import Paginations from "./features/Pagination/Pagination";
import queryString from "query-string";

const App = () => {
  const [state, setState] = useState("login");
  const [question, setQuestion] = useState(true);
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const [postList, setPostList] = useState([]);
  const [paginations, setPaginations] = useState({
    offset: 0,
    limit: 10,
    total: 1,
  });

  const [filters, setFilters] = useState({
    offset: 0,
  });

  const submitForm = () => {
    setFormIsSubmitted(true);
  };
  /* Get token */

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("token");
    const currentPage = queryString.stringify(filters);
    const requestURL = `http://35.213.94.95:8899/api/questions?limit=10&${currentPage}`;
    if (token) {
      setState("home");
    }
    const instance = axios.create({
      baseURL: requestURL,
      headers: { Authorization: "Bearer " + token },
    });

    instance.get("").then((response) => {
      const { data, total } = response.data;
      setPostList(data);
      setPaginations({
        offset: filters.offset,
        limit: 10,
        total: total,
      });
    });
  }, [filters]);

  const handlePageChange = (currentPage) => {
    setFilters({
      offset: currentPage,
    });
  };

  return (
    <div className="App">
      <Header setState={setState} loginState={state} />

      {state === "login" ? (
        <Login setState={setState} loginState={state} />
      ) : state === "home" ? (
        <>
          {question === false ? (
            <Home
              setState={setState}
              loginState={state}
              setQuestion={setQuestion}
            />
          ) : (
            <>
              <Question posts={postList} />
              <Paginations
                paginations={paginations}
                onPageChange={handlePageChange}
              />
            </>
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
