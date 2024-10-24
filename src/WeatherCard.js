import React from "react";

function WeatherCard({ weatherData }) {
  return (
    <div className="weather-card">
      <h2>{weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      {/* Add other weather information as needed */}
    </div>
  );
}

export default WeatherCard;
