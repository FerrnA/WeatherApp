import React, { useState } from "react";
import s from "./SearchBar.module.css";

export default function SearchBar({ handleOnSearch }) {
  const [cityName, setCityName] = useState("");
  const handleOnChange = (e) => {
    e.preventDefault();
    setCityName(e.target.value);
  };
  return (
    <div className={s.bar}>
      <input
        className={s.input_letter}
        placeholder="Search.."
        onChange={(e) => handleOnChange(e)}
        value={cityName}
        onKeyDown={(event) => event.key === "Enter" && handleOnSearch(cityName)}
      ></input>
      <button onClick={() => handleOnSearch(cityName)} className={s.search_button}>
        Agregar
      </button>
    </div>
  );
}
