import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";

const apiKey = process.env.REACT_APP_APIKEY;

function App() {
  const [cities, setCities] = useState([]);
  function handleOnSearch(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then((r) => r.json())
      .then((res) => {
        if (res.main !== undefined) {
          const city = {
            min: Math.floor(res.main.temp_min),
            max: Math.floor(res.main.temp_max),
            img: res.weather[0].icon,
            id: res.id,
            wind: res.wind.speed,
            temp: Math.floor(res.main.temp),
            name: res.name,
            weather: res.weather[0].main,
            clouds: res.clouds.all,
            latitud: res.coord.lat,
            longitud: res.coord.lon,
            humidity: res.main.humidity,
            feels_like: Math.floor(res.main.feels_like),
          };
          console.log(city); //clean console.log
          setCities((oldCities) => [...oldCities, city]);
        } else {
          alert("ciudad no encontrada");
        }
      });
  }
  return (
    <div className="App">
      <div>
        <SearchBar handleOnSearch={handleOnSearch} />
      </div>
      <div>
        <Cards cities={cities} setCities={setCities} />
      </div>
    </div>
  );
}

export default App;
