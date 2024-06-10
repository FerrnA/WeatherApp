import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";

const apiKey = process.env.REACT_APP_APIKEY;

const updateLocalStorage = (city) => {
  let storageCities = localStorage.getItem("cities");
  let citiesArray = [];
  if (storageCities) {
    try {
      citiesArray = JSON.parse(storageCities);
      if (!Array.isArray(citiesArray)) {
        citiesArray = [];
      }
    } catch (e) {
      console.error("Error parsing cities from localStorage:", e);
      citiesArray = [];
    }
  }
  citiesArray.push(city);
  localStorage.setItem("cities", JSON.stringify(citiesArray));
}

function App() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    let storageCities = localStorage.getItem("cities");
    if (storageCities) {
      try {
        storageCities = JSON.parse(storageCities);
        if (Array.isArray(storageCities)) {
          setCities((oldCities) => [...oldCities, ...storageCities]);
        }
      } catch (e) {
        console.error("Error parsing cities from localStorage:", e);
      }
    }
  }, []);
  function handleOnSearch(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
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
          updateLocalStorage(city)
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
