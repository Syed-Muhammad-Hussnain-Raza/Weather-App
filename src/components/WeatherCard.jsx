import { useEffect, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { BiWind } from "react-icons/bi";
import { LuWaves } from "react-icons/lu";

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
      setWeatherData(data);
      setSearch(true);
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
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 mt-10 p-2 w-[400px] h-[320px] pt-4">
      <div className="flex flex-row justify-between items-center bg-white rounded-2xl pl-2 pr-2">
        <input
          className="rounded-2xl outline-none p-2"
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeatherData}>
          <FaSearchLocation />
        </button>
      </div>

      {search && (
        <div>
          {weatherData ? (
            <div className="text-white">
              <div className="flex flex-col items-center text-4xl mt-5">
                {(weatherData?.main?.temp - 273.15)?.toFixed(2)} °C
              </div>
              <div className="flex flex-col items-center mt-4 ">
                {weatherData?.name}
              </div>
              <div className="flex flex-row justify-between mt-10 text-xl">
                <div className="flex flex-row items-center gap-x-3">
                  <BiWind />
                  <p>{(weatherData?.wind?.speed * 3.6).toFixed(2)} kmp</p>
                </div>
                <div className="flex flex-row items-center gap-x-3">
                  <LuWaves />
                  <p>{(weatherData?.main?.humidity).toFixed(2)} kmp</p>
                </div>
              </div>
            </div>
          ) : (
            <div>Weather Data Not Found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
