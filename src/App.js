import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Contacts from "./pages/Contacts";
import {BrowserRouter, NavLink, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
            <menu>
              <ul className="menu">
                <li className="menu__item">
                  <NavLink className="menu__link" to="/" activeClassName="active">Home</NavLink>
                </li>
                <li className="menu__item">
                  <NavLink className="menu__link" to="/faq" activeClassName="active">FAQ</NavLink>
                </li>
                <li className="menu__item">
                  <NavLink className="menu__link" to="/contacts" activeClassName="active">Contacts</NavLink>
                </li>
              </ul>
            </menu>
            <Route exact path="/" render={() => <Home/>}/>
            <Route  path="/faq" render={() => <Faq slug="Faq"/>}/>
            <Route  path="/contacts" render={() => <Contacts slug="Contacts"/>}/>
          </div>
      </BrowserRouter>
  );
}

export default App;
