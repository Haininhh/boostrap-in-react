import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Login from './features/Login/Login';
import Home from './features/Home/Home';
import Sigup from './features/Sig up/Sigup';
import SigupSuccess from './features/Sig up/SigupSuccess';
import Footer from './components/Footer/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {


  const [state, setState] = useState("login");

  const [formIsSubmitted, setFormIsSubmitted] = useState(false)

  const submitForm = () => {
    setFormIsSubmitted(true);
  }

  return (
    <div className="App">
      <Header setState={setState} loginState={state} />


      {state === "login" ?
        (<Login setState={setState} loginState={state} />) :

        state === "home" ?
          (<Home setState={setState} loginState={state} />) :

          <div>
            {!formIsSubmitted ?
            <Sigup setState={setState} loginState={state} submitForm={submitForm} /> :
            <SigupSuccess setState={setState}/>
            }
            
          </div>
          
      }

      <Footer />
    </div>
  );
}

export default App;
