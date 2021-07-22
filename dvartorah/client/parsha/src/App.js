import './App.css';
import React, { useEffect, useState } from 'react';
import DropDown from './DropDown'

function App() {
  const [level, setLevel] = useState("");
  const [displayed, setDisplayed] = useState('');
  const [selected, setSelected] = useState([]);
  const [parsha, setParsha] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/vorts')
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function (data) {
        setSelected((data));
        console.log("dat", data);
      });
  }, []);
  const vorts = () => {
    selected.map(option => <h1>{option.vort}</h1>)
  }

  return (
    <div className="App">
      {vorts}
      <h1 style={{ color: 'red' }}>Welcome to our Dvar-Torah generator</h1>
      <h4>Please pick a parsha</h4>
      <DropDown
        onChange={
          (e) => {
            setParsha(e.target.value);
          }
        }
      />
      {/* Berishis */}
      {parsha === "0" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "red" }}>{option.vort}</h1>)))}
      {/* Noach */}
      {parsha === "1" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "green" }}>{option.vort}</h1>)))}
      {/* Lech Lecha */}
      {parsha === "2" && (selected.map(option => option.parshaId === +parsha && (<h1 style={{ color: "blue" }}>{option.vort}</h1>)))}
    </div>
  );
}

export default App;
