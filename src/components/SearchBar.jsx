import React from "react";
import im from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  return (
    <div className={im.barra}>
      <input className={im.inputletra} placeholder="Search.."></input>
      <button onClick={onSearch} className={im.botone}>
        Agregar
      </button>
    </div>
  );
}
