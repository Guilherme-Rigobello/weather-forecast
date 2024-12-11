import { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import WeatherInfo5Days from './components/WeatherInfo5Days/WeatherInfo5Days';
import axios from 'axios';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [weather5Days, setWeather5Days] = useState(null);
  const inputSearch = useRef();

  async function searchCity() {
    // Requests
    const city = inputSearch.current.value;
    if (!city) {
      toast.info('City name is required!');
      return;
    }
    const lang = 'pt_br';
    const units = 'metric';
    const apiKey = '20da08310bad4a12e6fe76e78ea99924';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=${lang}&units=${units}`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=${lang}&units=${units}`;

    inputSearch.current.value = '';

    // Axios await weather data
    try {
      const apiInfo = await axios.get(url);
      setWeather(apiInfo.data);
      toast.success(`City: ${city}!`, {
        style: {
          textTransform: 'capitalize',
        },
      });
    } catch (error) {
      toast.error('City not found. Please try again!');
    }

    // Axios await 5 days data
    try {
      const apiInfo5Days = await axios.get(url5Days);
      setWeather5Days(apiInfo5Days.data);
      toast.success(`5 days weather forecast found!`);
    } catch (error) {
      toast.error(`Unable to find the next 5 days of weather!`);
    }
  }

  return (
    <div className='send-container'>
      <h1>Weather Forecast</h1>
      <input ref={inputSearch} placeholder='Search for a city...' />
      <button onClick={searchCity}>Search</button>
      {weather && <WeatherInfo weather={weather} />}
      {weather5Days && <WeatherInfo5Days weather5Days={weather5Days} />}
    </div>
  );
}

export default App;
