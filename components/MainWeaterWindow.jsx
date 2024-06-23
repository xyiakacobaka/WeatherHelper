import React from 'react';
import './MainWeatherWindow';

export default class MainWeatherWindow extends React.Component{
    render(props) {
        const Title = this.props.city ? null : <h1 className='title'>Прогноз погоды</h1>;
        return(
            <div className='main'>
        <div className='inner-main'>
          {Title}
          <img
            src={
              this.props.data
                ? require(`../images/${this.props.data.icon}.svg`)
                : require('../images/01d.svg')
            }
            alt='sun'
            style={{
              visibility: this.props.city ? 'visible' : 'hidden',
              opacity: this.props.city ? '1' : '0'
            }}
          />
        </div>
            {this.props.children}
        </div>
        );
    }   
}