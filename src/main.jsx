import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const root = createRoot(document.getElementById('root'));

function MyComponent() {
  fetch("https://api.openweathermap.org/geo/1.0/direct?q=Moskow&limit=5&appid=e65a15061c79d126ccd4123c097fedba")
  .then(response => response.json())
  .then(data => console.log(data));
}

root.render(
  <div id='cityContainer'>
    <input type="city" placeholder="Погода какого города вас интересует?"/>
  </div>
);