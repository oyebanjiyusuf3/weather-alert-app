import { useState, useEffect } from "react";
import Search from "../components/search/Search";
import CurrentWeather from "../components/current-weather/CurrentWeather";
import Forecast from "../components/forecast/Forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../api";

const MainView = () => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
  
    const handleOnSearchChange = (searchData) => {
      const [lat, lon] = searchData.value.split(" ");
  
      const currentWeatherFetch = fetch(
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const forecastFetch = fetch(
        `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );
  
      Promise.all([currentWeatherFetch, forecastFetch])
        .then(async (response) => {
            //console.log(response);
          const weatherResponse = await response[0].json();
          const forcastResponse = await response[1].json();
  
          setCurrentWeather({ city: searchData.label, ...weatherResponse });
          setForecast({ city: searchData.label, ...forcastResponse });
        })
        .catch(console.log);
    };

    //console.log(currentWeather);

    const handleFavouriteCity = (event) =>{
        event.preventDefault()   
        console.log(JSON.stringify(currentWeather));
        const favouriteWeather = currentWeather.city
        console.log(favouriteWeather);
        localStorage.setItem('city', currentWeather.city);
        localStorage.setItem('wind', currentWeather.wind.speed);
        localStorage.setItem('degree', currentWeather.wind.deg);
        localStorage.setItem('temp', currentWeather.main.temp);
        localStorage.setItem('feels_like', currentWeather.main.feels_like);
        localStorage.setItem('humidity', currentWeather.main.humidity);
        localStorage.setItem('pressure', currentWeather.main.pressure);
        localStorage.setItem('icon', currentWeather.weather[0].icon);
        window.location.reload(false);
    }

    // const handleFavouriteCity = (event) =>{
    //     event.preventDefault()   
    //     console.log(JSON.stringify(currentWeather));
    //     const favouriteWeather = currentWeather.city
    //     console.log(favouriteWeather);

    //     var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    //     if(existingEntries == null) existingEntries = [];
    //     var testObject ={myCity:currentWeather.city, 
    //     };
    //     // const favlist = Object.entries(testObject)
    //     // console.log(favlist);

    //     localStorage.setItem('testObject', JSON.stringify(testObject));
    //     existingEntries.push(testObject);
    //     localStorage.setItem("allEntries", JSON.stringify(existingEntries));

        
        // localStorage.setItem('myCity', currentWeather.city);
        // localStorage.setItem('myWind', currentWeather.wind.speed);
        // localStorage.setItem('icon', currentWeather.weather[0].icon);
       // window.location.reload(false);
    //}


    // const handleFavouriteCity = (e) =>{
    //     e.preventDefault();
    //     //empty array for the saved city
    //     let recentView = []
    //     //get current city from weather object
    //     let currentCity = currentWeather.city
    //     //ensure window object is available
    //     if (typeof window !== 'undefined') {
    //       //get the array of the  saved cities
    //       recentView = localStorage.getItem('city');
         
    //       //check if array is not empty
    //       if (recentView.length === 0){
    //         //check if the city is not already saved 
    //         const result = recentView.find(city=> city === currentCity)
    //         if (result?.length > 0)  return null
    //         recentView?.push(currentCity)
    //         localStorage.setItem('city',recentView)
    //       }
    //       recentView.push(currentCity)
    //       console.log(localStorage.setItem('city',recentView));
    //     }
    //   }


    // useEffect(()=>{
    //    localStorage.setItem('myCity',JSON.stringify( currentWeather))
       
    // },[currentWeather])


    // useEffect(()=>{
    //     localStorage.getItem('myCity')
        
    //  }, [currentWeather])

    // const handleWeatherClick = (event)=>{
    //     console.log("clicked"); 
    //   }
  
    return (

<div className="search-container ">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} handleFavouriteCity={handleFavouriteCity}  />}
        
        {/* testing this click event button here */}
        {/* <button className="btn"><i class="fa fa-folder"></i> Save</button> */}
        {forecast && <Forecast data={forecast} />}

        
      </div>
    
    );
}

export default MainView