import React from "react";
import '../styles/Weather.css'

const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

class Weather extends React.Component {
    render(){
        return(
            <div>
                <div id="mainWindow">                    
                    <span>{this.props.city}</span><br/>                    
                    <span>{daysOfWeek[this.props.dayOfWeek]}</span><br/>
                    <img src={
                        this.props.today
                        ? require(`../assets/${this.props.today.weather[0].icon}.svg`)
                        : null
                    } 
                    id="weatherIcon" 
                    style={{
                        visibility: this.props.city ? 'visible' : 'hidden',
                        opacity: this.props.city ? '1' : '0'
                      }}
                    alt='sun'                    
                    ></img><br/>
                    <span>{ 
                    this.props.today
                        ? this.props.today.main.temp +" С"
                        : null
                    } 
                    </span><br/>
                    <span>{ 
                    this.props.today
                        ? this.props.today.weather[0].description
                        : null
                    }
                    </span><br/>
                    <div id='daysContainer' className='daysContainer'>
                        <div id='secDay' className='altWindow'>
                            <span>{daysOfWeek[this.props.dayOfWeek+1]}</span><br/>
                            <img src={
                                this.props.tomorrowDay
                                ? require(`../assets/${this.props.tomorrowDay.weather[0].icon}.svg`)
                                : null  
                                }
                                style={{
                                    visibility: this.props.city ? 'visible' : 'hidden',
                                    opacity: this.props.city ? '1' : '0'
                                }}>
                            </img><br/>
                            <span>{ 
                                this.props.today
                                    ? this.props.tomorrowDay.main.temp +" С"
                                    : null
                                } 
                            </span><br/>
                            <img src={
                                this.props.tomorrowDay
                                ? require(`../assets/${this.props.tomorrowNight.weather[0].icon}.svg`)
                                : null  
                                }
                                style={{
                                    visibility: this.props.city ? 'visible' : 'hidden',
                                    opacity: this.props.city ? '1' : '0'
                                }}>
                            </img><br/>
                            <span>{ 
                                this.props.today
                                    ? this.props.tomorrowNight.main.temp +" С"
                                    : null
                                } 
                            </span><br/>
                        </div>
                        <div id='thirdDay' className='altWindow'>
                            <span>{daysOfWeek[this.props.dayOfWeek+2]}</span><br/>
                            <img src={
                                this.props.tomorrowDay
                                ? require(`../assets/${this.props.afterTwoDaysDay.weather[0].icon}.svg`)
                                : null  
                                }
                                style={{
                                    visibility: this.props.city ? 'visible' : 'hidden',
                                    opacity: this.props.city ? '1' : '0'
                                }}>
                            </img><br/>
                            <span>{ 
                                this.props.today
                                    ? this.props.afterTwoDaysDay.main.temp +" С"
                                    : null
                                } 
                            </span><br/>
                            <img src={
                                this.props.tomorrowDay
                                ? require(`../assets/${this.props.afterTwoDaysNight.weather[0].icon}.svg`)
                                : null  
                                }
                                style={{
                                    visibility: this.props.city ? 'visible' : 'hidden',
                                    opacity: this.props.city ? '1' : '0'
                                }}>
                            </img><br/>
                            <span>{ 
                                this.props.today
                                    ? this.props.afterTwoDaysNight  .main.temp +" С"
                                    : null
                                } 
                            </span><br/>
                        </div>
                        <div id='forthDay' className='altWindow'>
                            <span>{daysOfWeek[this.props.dayOfWeek+3]}</span><br/>
                            <img src={
                                this.props.tomorrowDay
                                ? require(`../assets/${this.props.afterThreeDaysDay.weather[0].icon}.svg`)
                                : null  
                                }
                                style={{
                                    visibility: this.props.city ? 'visible' : 'hidden',
                                    opacity: this.props.city ? '1' : '0'
                                }}>
                            </img><br/>
                            <span>{ 
                                this.props.today
                                    ? this.props.afterThreeDaysDay.main.temp +" С"
                                    : null
                                } 
                            </span><br/>
                            <img src={
                                this.props.tomorrowDay
                                ? require(`../assets/${this.props.afterThreeDaysNight.weather[0].icon}.svg`)
                                : null  
                                }
                                style={{
                                    visibility: this.props.city ? 'visible' : 'hidden',
                                    opacity: this.props.city ? '1' : '0'
                                }}>
                            </img><br/>
                            <span>{ 
                                this.props.today
                                    ? this.props.afterThreeDaysNight  .main.temp +" С"
                                    : null
                                } 
                            </span><br/>
                        </div>
                        <div id='fifthDay' className='altWindow'>
                            <span>{daysOfWeek[this.props.dayOfWeek+4]}</span><br/>
                            <img src={
                                this.props.tomorrowDay
                                ? require(`../assets/${this.props.afterFourDaysDay.weather[0].icon}.svg`)
                                : null  
                                }
                                style={{
                                    visibility: this.props.city ? 'visible' : 'hidden',
                                    opacity: this.props.city ? '1' : '0'
                                }}>
                            </img><br/>
                            <span>{ 
                                this.props.today
                                    ? this.props.afterFourDaysDay.main.temp +" С"
                                    : null
                                } 
                            </span><br/>
                            <img src={
                                this.props.tomorrowDay
                                ? require(`../assets/${this.props.afterFourDaysNight.weather[0].icon}.svg`)
                                : null  
                                }
                                style={{
                                    visibility: this.props.city ? 'visible' : 'hidden',
                                    opacity: this.props.city ? '1' : '0'
                                }}>
                            </img><br/>
                            <span>{ 
                                this.props.today
                                    ? this.props.afterFourDaysNight  .main.temp +" С"
                                    : null
                                } 
                            </span><br/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Weather;