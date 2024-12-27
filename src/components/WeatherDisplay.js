import React from 'react'

export const WeatherDisplay = ({state}) => {

    let color;
    if(state.temperature>20)
    {
      color='red';
    }
    else
    {
        color='blue';
    }

  return (
    <div>
        <p>Temperature: <span style={{color: `${color}`}}>{state.temperature}</span></p>
        <p>Conditions: {state.conditions}</p>
    </div>
  )
}
