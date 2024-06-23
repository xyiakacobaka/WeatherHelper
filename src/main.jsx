import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const root = createRoot(document.getElementById('root'));
const apiKEY = "e65a15061c79d126ccd4123c097fedba";

const geoCity = (props) => {
  const geoRequestUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${props}&appid=${apiKEY}`;
  fetch(geoRequestUrl)
    .then((response) => response.json())
    .then((data) => weatherNow(data));
}

const weatherNow = (props) => {
  console.log(props);
  const weatherRequestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${props[0].lat}&lon=${props[0].lon}&lang=ru&appid=${apiKEY}`;
  fetch(weatherRequestUrl)
  .then(response => response.json())
  .then((data) => console.log(data));
}

const eventOnKeyDown = (props) => {
  return (
      props.key == "Enter" ?  geoCity(document.getElementById('cityContainer').value) : console.log(props.key)
  );
}

function CityValue() {
  const [value, setValue] = useState('');
  const cityInput = (props) => { setValue(props.target.value); City(props.target.value);}
  return (
  <div id='main'>
    <div id='container' className='container'>
      <input type='text'  placeholder='Погода какого города вас интересует?' id='cityContainer' value={value} onChange={cityInput} onKeyDown={eventOnKeyDown}></input>
    </div>
    <div id='mainWindow' className='mainWindow'>
      <span id='today' className='today'>Сегодня</span>
      <div id='todayWeatherIcon'>
        <img id='todayWeatherIconPng'/>
      </div>
      <div id='daysContainer' className='daysContainer'>
        <div id='secDay' className='altWindow'></div>
        <div id='trirdDay' className='altWindow'></div>
        <div id='forthDay' className='altWindow'></div>
        <div id='fifthDay' className='altWindow'></div>
      </div>
    </div>
  </div>
  );
}
root.render(
  <div>
    <CityValue/>
  </div>
);