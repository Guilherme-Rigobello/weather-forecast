import './WeatherInfo.css';

function WeatherInfo({ weather }) {
  return (
    <div className='weather-container'>
      <h2>{weather.city.name}</h2>
      <div className='weather-info'>
        <img
          src={`https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`}
          alt='Weather Icon'
        />
        <p className='temperature'>{weather.list[0].main.temp.toFixed(0)}ºC</p>
      </div>
      <p className='description'>{weather.list[0].weather[0].description}</p>
      <div className='details'>
        <p>Sensação Térmica: <span>{weather.list[0].main.feels_like.toFixed(0)}ºC</span></p>
        <p>Umidade: <span>{weather.list[0].main.humidity}%</span> </p>
        <p>Pressão: <span>{weather.list[0].main.pressure} N/m²</span></p>
      </div>
    </div>
  );
}

export default WeatherInfo;
