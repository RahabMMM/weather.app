import React, { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (city) => {
    try {
      const apiKey = "0334a45cff3e560d0090a516d64d96f7"; // Replace with your actual API key
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App;
