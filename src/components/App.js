
import React, { useState } from "react";
import './../styles/App.css';
import { WeatherDisplay } from "./WeatherDisplay";

const App = () => {

  const currweather={ temperature: 25, conditions: "Sunny" };

  const [state, setState]=useState(currweather);


  return (
    <div>
        <WeatherDisplay state={state}/>
    </div>
  )
}

export default App
