import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import backgrounds from './backgrounds.js';


function App() {

  const [bg, setBg] = useState(logo);

  useEffect(() => console.log(bg), [bg]);

  const handleClick = (e) => {
    setBg(`${e.target.value}`)
  }

  let list = [<option value="please-choose-background">--Please Choose Background--</option>];
  for (let i = 0; i < backgrounds.length; i++) {
    list.push(<option value={`${backgrounds[i].name}.${backgrounds[i].type}`}>{backgrounds[i].name}</option>)
  }


  return (
    <div className="App-header">
      {bg.includes('mp4') ? <video playsInline autoPlay muted loop>
        <source src={`${process.env.PUBLIC_URL}${bg}`} type="video/mp4" />
    </video> : <img src={`${process.env.PUBLIC_URL}${bg}`} alt="logo" />}
          <select name="select-bg" id="select-bg" onChange={handleClick} value={bg}>
            {list}
          </select>
    </div>
  );
}

export default App;

