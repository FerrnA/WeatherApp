import React from "react";
import m from "./Card.module.css";

const deleteCityAtLocalStorage = (cityId) => {
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
  const cities = citiesArray.filter(c => c.id !== cityId);
  localStorage.setItem("cities", JSON.stringify(cities));
}

export default function Card({ city, setCities }) {
  function onClose(id) {
    deleteCityAtLocalStorage(id)
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  return (
    <div className={m.card}>
      <div className={m.close_button_div}>
        <button onClick={() => onClose(city.id)} className={m.close_button}>
          X
        </button>
      </div>
      {"\n"}
      <h1 className={m.h1_title}>{city.name}</h1>
      <div className={m.grid_city_data}>
        <div>
          <label>Min</label>
          <h3>{city.min}º</h3>
        </div>
        <div>
          <label>Max</label>
          <h3>{city.max}º</h3>
        </div>
        <img src={"http://openweathermap.org/img/wn/" + city.img + "@2x.png"} alt="" />
      </div>
      <div className={m.dataBottom_container}>
        <span className={m.dataBottom_temp}>{city.temp} º</span>
        <div>
          Humidity: <br />
          {city.humidity} %
        </div>
        <div>
          Wind: <br />
          {city.wind} km/h
        </div>
        <div>
          Feels like: <br />
          {city.feels_like} º
        </div>
      </div>
    </div>
  );
}
// src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
