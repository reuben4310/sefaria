import './App.css';
import React, { useEffect, useState } from 'react';
import DropDown from './DropDown'
import Home from './Home';
import Beginner from "./Beginner"
import Medium from "./Medium"
import Advanced from "./Advanced"
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  const [level, setLevel] = useState("");
  const [displayed, setDisplayed] = useState('');
  const [selected, setSelected] = useState([]);
  const [parsha, setParsha] = useState([]);

  // useEffect(async () => {
  //   await
  //     fetch('http://localhost:8080/vorts')
  //       .then(function (response) {
  //         if (response.status >= 400) {
  //           throw new Error("Bad response from server");
  //         }
  //         return response.json();
  //       })
  //       .then(function (data) {
  //         setSelected((data));
  //         console.log("data", data);
  //       });
  // }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/drop">
            <React.Fragment>
            <div className="fadeIn">
              <DropDown
                onChange={
                  (e) => {
                    console.log(e.target.value)
                    setParsha(e.target.value);
                  }}
              />
              </div>
            </React.Fragment>
          </Route>
          <Route path="/beginner">
            <React.Fragment>
            <div className="fadeIn">
            <Beginner />
              </div>
            </React.Fragment>
          </Route>
          <Route path="/medium">
            <React.Fragment>
            <div className="fadeIn">
            <Medium />
              </div>
            </React.Fragment>
          </Route>
          <Route path="/advanced">
            <React.Fragment>
            <div className="fadeIn">
            <Advanced />
              </div>
            </React.Fragment>
          </Route>
          <Route path="/">
          <div className="fadeIn">
            <Home />
            </div>
          </Route>
        </Switch>
      </Router>

      {/* still fake */}
      {/* Berishis */}
      {parsha === "0" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "red" }}>{option.vort}</h1>)))}
      {/* Noach */}
      {parsha === "1" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "green" }}>{option.vort}</h1>)))}
      {/* Lech Lecha */}
      {parsha === "2" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "blue" }}>{option.vort}</h1>)))}
    </div>
    // </div>
  );
}

export default App;
