import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import backgrounds from './backgrounds.js';
// import bunnyears from '../public/bunny-ears.mp4';
import toboggan from '../public/toboggan.jpg'

function App() {
  const [bg, setBg] = useState('');

  let list = [<option value="please-choose-background">--Please Choose Background--</option>];
  for (let i = 0; i < backgrounds.length; i++) {
    list.push(<option value="{backgrounds[i].name}">{backgrounds[i].name}</option>)
  }
  return (
    <div className="App-header" styles={{ backgroundImage:`url(${toboggan})`}}>
      <img src={logo} alt="logo" />
          <select name="select-bg" id="select-bg">
            {list}
          </select>
    </div>
  );
}

export default App;

