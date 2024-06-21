import React, { useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const root = createRoot(document.getElementById('root'));

function City(props){
  const apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${props}&limit=5&appid=e65a15061c79d126ccd4123c097fedba`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&units=metric&appid=e65a15061c79d126ccd4123c097fedba`)
        .then(response => response.json())
        .then((data) => {console.log(data)})
    });
}

function Counter() {
  const [value, setValue] = useState('');

  let ref = useRef("");

  const cityInput = (props) => { setValue(props.target.value); City(props.target.value);}

  return <input type='text'  placeholder='Погода какого города вас интересует?' id='cityContainer' value={value} onInput={cityInput}/>;
}

root.render(
  <div id='searchLine'>
    <Counter/>    
  </div>
);