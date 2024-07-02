import React from 'react';
import Form from "./components/Form.js"
import Info from "./components/Info.js"
import Weather from "./components/Weather.js"
import './styles/App.css'

const API_key = "e65a15061c79d126ccd4123c097fedba"; 

const dayjs = require('dayjs')

var today = new Date();



class App extends React.Component{

  state = {
    today: undefined,
    tomorrowDay: undefined,
    tomorrowNight: undefined,
    afterTwoDaysDay: undefined,
    afterTwoDaysNight: undefined,
    afterThreeDaysDay: undefined,
    afterThreeDaysNight: undefined,
    afterFourDaysDay: undefined,
    afterFourDaysNight: undefined,
    city: undefined,
    dayOfWeek: undefined,
    error: undefined
  }

  gettingWeather = async(e) => {
    try{
      e.preventDefault();
      const city = e.target.elements.city.value;
      const geoReq = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_key}`);
      const geo_data = await geoReq.json();
      const weatherReq = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${geo_data[0].lat}&lon=${geo_data[0].lon}&lang=ru&units=metric&appid=${API_key}`);
      const weatherData = await weatherReq.json();
      const indexErrorRate = (24 - (dayjs(weatherData.list[0].dt_txt).format('HH'))) / 3 - 1;//оставшиеся части по 3 часа в диапозоне [0; 8)      
      this.setState({
        today: indexErrorRate < 4 ? weatherData.list[0] : weatherData.list[indexErrorRate-3],
        tomorrowDay: weatherData.list[indexErrorRate+5],
        tomorrowNight: weatherData.list[indexErrorRate+8],
        afterTwoDaysDay: weatherData.list[indexErrorRate+12],
        afterTwoDaysNight: weatherData.list[indexErrorRate+16],
        afterThreeDaysDay: weatherData.list[indexErrorRate+21],
        afterThreeDaysNight: weatherData.list[indexErrorRate+24],
        afterFourDaysDay: weatherData.list[indexErrorRate+29],
        afterFourDaysNight: weatherData.list[indexErrorRate+32],
        dayOfWeek: today.getDay(),
        city: geo_data[0].local_names.ru,
      })
    }
    catch(e){
      alert("Проверьте поля ввода. Поле не может быть пустым. Или введенного города не существует");
    }
  }

  render(){
    return(
      <div>
        <Info />
        <Form weatherMethod = {this.gettingWeather}/>
        <Weather 
          today = {this.state.today}
          tomorrowDay = {this.state.tomorrowDay}
          tomorrowNight = {this.state.tomorrowNight} 
          afterTwoDaysDay = {this.state.afterTwoDaysDay}
          afterTwoDaysNight = {this.state.afterTwoDaysNight}
          afterThreeDaysDay = {this.state.afterThreeDaysDay}
          afterThreeDaysNight = {this.state.afterThreeDaysNight} 
          afterFourDaysDay = {this.state.afterFourDaysDay}
          afterFourDaysNight = {this.state.afterFourDaysNight}
          city = {this.state.city}
          dayOfWeek = {this.state.dayOfWeek}
          error = {this.state.error} 
        />        
      </div>
    );
  }
}

export default App;
