import "./App.css";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <div className="App flex flex-col items-center mt-16">
      <h1 className="text-3xl font-bold">Weather App</h1>
      <WeatherCard />
    </div>
  );
}

export default App;
