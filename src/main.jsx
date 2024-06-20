import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const root = createRoot(document.getElementById('root'));

function City(){
  const apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=Москва&limit=5&appid=e65a15061c79d126ccd4123c097fedba`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&appid=e65a15061c79d126ccd4123c097fedba`)
    .then(response => response.json())
    .then(data => console.log(data));
    });
}

root.render(
  <div id='cityContainer'>
    <City />
    <input type='text'  placeholder='Погода какого города вас интересует?' id='input' oninput={console.log('input'.value)}/>    
  </div>
);
