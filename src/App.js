import React, { useMemo, useState } from 'react';
import './App.css';
import chart from './bmi-chart.png';

function App(){
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(75);

  function onHeightChange(event){
    setHeight(event.target.value);
  }

  function onWeightChange(event){
    setWeight(event.target.value);

  }

  const bmi = useMemo(()=>{
    const heightMtr = height/100;
    return(weight/(heightMtr*heightMtr)).toFixed(1);
  }, [weight, height]);

  return(
    <main>
      <div className='container'>
        <h1>BMI Calculator</h1>
        <div className='input-section'>
          <p className='slider-output'>weight: {weight} kg</p>
          <input className='input-slider' type='range' step={1} min={40} max={200}
            onChange={onWeightChange}
          ></input>
          
          <p className='slider-output'>height: {height} cm</p>
          <input className='input-slider' type='range' step={1} min={50} max={250}
            onChange={onHeightChange}
          ></input>
          <br />

        </div>

        <div className='output-section'>
          <p>your BMI is</p>
          <p className='output'>{bmi}</p>
        </div>
      </div>
      
      <div className='chart-container'>
        <img src={chart} alt='chart image' />
      </div>
    </main> 
  )
}

export default App;
