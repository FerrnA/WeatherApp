import React from "react";
import a from "./Card.module.css";

/* import styled from 'styled-components';
const DivWapper = styled.div `
width: 50%;
border: 2px solid black;
${props => (props.color === 'blue') ? `background-color: red` : null}
`;
<DivWapper></DivWapper> */

export default function Card(props) {
  // acá va tu código
  return (
    <div className={a.bordes}>
      <div className={a.divdelboton}>
        <button onClick={props.onClose} className={a.botton}>
          X
        </button>
      </div>
      {"\n"}
      <h1 className={a.ciudade}>{props.name}</h1>
      <div>
        <label>Min</label>
        <h3>{props.min}º</h3>
      </div>
      <div>
        <label>Max</label>
        <h3>{props.max}º</h3>
      </div>
      <img
        src={"http://openweathermap.org/img/wn/" + props.img + "@2x.png"}
        alt=""
      />
    </div>
  );
}
// src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
