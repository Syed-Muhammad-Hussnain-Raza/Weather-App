import { useEffect, useState } from "react";

const API_KEY = "8840d1e8cfa1a535de3bcda96850af5e";

const WeatherCard = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [search, setSearch] = useState(false);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error while fetching weather data", error);
      setWeatherData(null);
      setSearch(true);
    }
  };

  useEffect(() => {
    if (city && search) {
      fetchWeatherData();
    }
  }, [city, search]);

  return (
    <div>
      <h1>WeatherCard</h1>
    </div>
  );
};

export default WeatherCard;
