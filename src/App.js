import './styles/style.css';
import Card from './components/card'
import React, { useState } from 'react';

function App() {

  const [filter, setFilter] = useState('name');
  const [invert, setInvert] = useState('asc');


  return (

    <div className="AppContainer">


      <div className="menu">
        <div className="logo"> Country Query  </div>


        <button className="button" onClick={() => setFilter("name")} > Name
        </button>
        <button className="button" onClick={() => setFilter("capital")}> Capital
        </button>
        <button className="button" onClick={() => setFilter("area")}> Area
        </button>
        <button className="button" onClick={() => setFilter("population")}> Population
        </button>
        <div className="orientation">
          <button className="buttonArrow" onClick={() => setInvert("asc")}> <i class='fas fa-arrow-alt-circle-down'></i>
          </button>

          <button className="buttonArrow" onClick={() => setInvert("desc")}> <i class='fas fa-arrow-alt-circle-up'></i>
          </button>

        </div>

      </div >
      <div>
        <Card filter={filter} invert={invert}></Card>
      </div>
    </div >
  );
}

export default App;
