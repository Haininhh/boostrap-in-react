import React, { useState } from 'react'; 
import './App.css';
import Header from './components/Header/Header';
import Login from './features/Login/Login';
import Home from './features/Home/Home';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
const [ state, setState ] = useState("login");

  return (
    <div className="App">
      <Header setState={setState} loginState={state} />

      {state === "login" ? 
        (<Login setState={setState} loginState={state}/>) : 
        (<Home setState={setState} loginState={state} />)
      }

      <Footer />
    </div>
  );
}

export default App;
