import React from "react";
import Card from "./Card.jsx";
import e from "./Cards.module.css";
import cities from "./cities";

export default function Cards() {
  return (
    <div className={e.climas}>
      {cities.map((ciudad) => {
        return (
          <Card
            name={ciudad.name}
            key={ciudad.id}
            min={ciudad.main.temp_min}
            max={ciudad.main.temp_max}
            img={ciudad.weather[0].icon}
            onClose={() => alert(ciudad.name)}
          />
        );
      })}
    </div>
  );
}
