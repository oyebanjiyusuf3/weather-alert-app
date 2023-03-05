import React, { useState } from "react";

import "./forecast.css";

const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <div className="week-container">
        <hr />
        <h3 className="text-character">
          Forecast wind information for the next 7 days
        </h3>

        <ul className="week-list">
          {data.list.splice(0, 7).map((item, idx) => (
            <li className="active" key={idx}>
              <img
                className="day-icon"
                src={`icons/${item.weather[0].icon}.png`}
                data-feather="sun"
              />
              <span className="day-name">{forecastDays[idx]}</span>
              <span className="day-temp">{item.wind.speed} mph</span>
            </li>
          ))}
          {/* <li><i className="day-icon" data-feather="cloud"></i><span className="day-name">Wed</span><span className="day-temp">28°C</span></li>
          <li><i className="day-icon" data-feather="cloud-snow"></i><span className="day-name">Thu</span><span className="day-temp">08°C</span></li>
          <li><i className="day-icon" data-feather="cloud-rain"></i><span className="day-name">Fry</span><span className="day-temp">19°C</span></li>
          <li><i className="day-icon" data-feather="cloud-rain"></i><span className="day-name">Fry</span><span className="day-temp">19°C</span></li>
        */}
          <div className="clea"></div>
        </ul>
      </div>
    </>
  );
};

export default Forecast;
