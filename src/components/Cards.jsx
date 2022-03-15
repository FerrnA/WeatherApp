import React from "react";
import Card from "./Card.jsx";
import e from "./Cards.module.css";

export default function Cards({ cities, setCities }) {
  return (
    <div className={e.cards}>
      {cities.length > 0 &&
        cities.map((city) => {
          return <Card city={city} setCities={setCities} />;
        })}
    </div>
  );
}
