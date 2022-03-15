import React from "react";
import m from "./Card.module.css";

export default function Card({ city, setCities }) {
  function onClose(id) {
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
    </div>
  );
}
// src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
