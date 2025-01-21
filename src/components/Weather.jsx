import React from 'react'

import './Weather.css'

import search from "../assets/search.png"
import sun1 from "../assets/sun1.png"
import humidity1 from "../assets/humidity1.png"
import windspeed from "../assets/windspeed.png"


const Weather = () => {
    return(
        <div className="weather">
            <div className="search-bar">
                <input type="text" placeholder="search" />
                <img src= {search} alt=""/>
            </div>
            <img src={sun1} alt="" className="weather-icon" />
            <p className='temperature'>16'c</p>
            <p className='location'>London</p>
            <div className='weather-data'>
                <div className='col'>
                  <img src= {humidity1} alt=""/>
                  <div>
                    <p>91%</p>
                    <span>Humidity</span>
                  </div>
                </div>
                <div className='col'>
                  <img src= {windspeed} alt=""/>
                  <div>
                    <p>3.6 Km/h</p>
                    <span>Wind Speed</span>
                  </div>
                </div>










            </div>

        </div>
    )
}

export default Weather