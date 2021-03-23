import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import backgrounds from './backgrounds.js';


function App() {
  // set background hook
  const [bg, setBg] = useState(logo);

  //useEffect to render and console.log current background for each update
  useEffect(() => console.log(bg), [bg]);

  // sets background every time user selects new background
  const handleClick = (e) => {
    setBg(`${e.target.value}`)
  }

  // create option components for each background, including name and type of background
  let list = [<option value="please-choose-background">--Please Choose Background--</option>];
  for (let i = 0; i < backgrounds.length; i++) {
    list.push(<option key={i} value={`${backgrounds[i].name}.${backgrounds[i].type}`}>{backgrounds[i].name}</option>)
  }


  return (
    // will return video background if bg hook ends with mp4, otherwise will return img background
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

