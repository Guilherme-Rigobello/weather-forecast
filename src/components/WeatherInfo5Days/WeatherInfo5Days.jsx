import './WeatherInfo5Days.css';

function WeatherInfo5Days({ weather5Days }) {
  console.log(weather5Days);
  let dailyForecast = {};

  for (let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }

  const nextFiveDays = Object.values(dailyForecast).slice(1, 6);

  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: '2-digit',
    });
    return newDate;
  }
  return (
    <div className='weather-container'>
      <h3>Forecast for the next 5 days</h3>
      <div className='weather-list'>
        {nextFiveDays.map((forecast) => (
          <div className='weather-item' key={forecast.dt}>
            <p className='forecast-day'>{convertDate(forecast)}</p>
            <img
              src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
              alt='Weather Icon'
            />
            <p className='forecast-description'>
              {forecast.weather[0].description}
            </p>
            <p>
              {forecast.main.temp_min.toFixed(0)}°C min /
              {forecast.main.temp_max.toFixed(0)}°C máx
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherInfo5Days;
