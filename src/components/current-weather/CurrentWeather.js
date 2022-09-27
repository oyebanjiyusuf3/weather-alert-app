import React from "react";
import "./current-weather.css";

const CurrentWeather = ({ data, handleFavouriteCity }) => {
  // const handleWeatherClick = ()=>{
  //   console.log("clicked");
  // }

  // const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // const dayInAWeek = new Date().getDay();
  // const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  let today=new Date()
  return (
    <div className=" container">
  <div className="weather-side">
    <div className="weather-gradient"></div>
    <div className="date-container">
      <h2 className="date-dayname"></h2>{data.weather[0].description}<span className="date-day">{today.getDate()} {today.getUTCMonth()+1} {today.getFullYear()}</span><i className="location-icon" data-feather="map-pin"></i><span className="location">{data.city}</span>
    </div>
    <div className="weather-container"><img className="weather-icon"  src={`icons/${data.weather[0].icon}.png`} data-feather="sun"/>
      <h1 className="weather-temp">{data.wind.speed} Mps</h1>
      <h3 className="weather-desc">Wind Speed</h3>
    </div>
  </div>
  <div className="info-side">
    <div className="today-info-container">
      <div className="today-info">
      <div className="wind-deg"> <span className="title">WIND DEGREE</span><span className="value">{data.wind.deg}° </span>
          <div className="clear"></div>
        </div>
        <div className="temperatur"> <span className="title">TEMPERATURE</span><span className="value">{Math.round(data.main.temp)}°C</span>
          <div className="clear"></div>
        </div>
       
        <div className="wind"> <span className="title">FEELS LIKE</span><span className="value">{Math.round(data.main.feels_like)}°C</span>
          <div className="clear"></div>
        </div>
        <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">{data.main.humidity} %</span>
          <div className="clear"></div>
        </div>
        <div className="humidity"> <span className="title">PRESSURE</span><span className="value">{data.main.pressure} hPa</span>
          <div className="clear"></div>
        </div>
      </div>
    </div>
  
     {/* <div className="week-container">
     <ul className="week-list">
     <li className="active"><i className="day-icon" data-feather="sun"></i><span className="day-name">Tue</span><span className="day-temp">29°C</span></li>
       <li><i className="day-icon" data-feather="cloud"></i><span className="day-name">Wed</span><span className="day-temp">28°C</span></li>
       <li><i className="day-icon" data-feather="cloud-snow"></i><span className="day-name">Thu</span><span className="day-temp">08°C</span></li>
       <li><i className="day-icon" data-feather="cloud-rain"></i><span className="day-name">Fry</span><span className="day-temp">19°C</span></li>
       <li><i className="day-icon" data-feather="cloud-rain"></i><span className="day-name">Fry</span><span className="day-temp">19°C</span></li>
    
       <div className="clear"></div>
     </ul>
   </div> */}
   
    <div className="location-container">
      <button className="location-button" onClick={handleFavouriteCity}> <i data-feather="map-pin"></i><span>Add to Favourite</span></button>
    </div>
  </div>
</div>
  );
};

export default CurrentWeather;
