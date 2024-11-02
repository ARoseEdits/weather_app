import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const API_KEY = '799d910d15b831d9c04e2c7af42b8483';
    const city = 'yourCity'

    useEffect(()=>{
        axios
            .get( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then(response => setWeatherData (respond.data))
            .catch(error => console.error("Error featching the weather data", error));
    }, [])

    return (
        <div>
            {weatherData ? (
                <div>
                 <h2> Weather in {city}</h2>
                 <p> Temperature: {weatherData.main.temp}</p>
                 <p> Conditions: {weatherData.weather[0].description}</p>
                 </div>
      ) : (
        <p>loading...</p>
             )}
        </div>
    );
};

export default Weather;