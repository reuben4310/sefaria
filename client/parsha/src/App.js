import './App.css';
import React, { useEffect, useState } from 'react';
import DropDown from'./DropDown'

function App() {
  return (
    <div className="App">
      <h1 Style={{color: 'red'}}></h1>
      <h4></h4>
     <DropDown 
        onChange={e => console.log(e.target.value)}
     />

    </div>
  );
}

export default App;
