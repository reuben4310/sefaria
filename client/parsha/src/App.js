import './App.css';
import React, { useEffect, useState } from 'react';
import DropDown from'./DropDown'

function App() {
  return (
    <div className="App">
      <h1 style={{color: 'red'}}>Welcome to our Dvar-Torah generator</h1>
      <h4>Please pick a parsha</h4>
     <DropDown 
        onChange={e => console.log(e.target.value)}
     />

    </div>
  );
}

export default App;
