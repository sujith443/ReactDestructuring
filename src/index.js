// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import practice from "./practice";
import animals from "./data";

const [honda, tesla] = practice;
const [color1, color2] = tesla.coloursByPopularity;
const { topSpeed } = tesla.speedStats;

const [hondacolor] = honda.coloursByPopularity;
const { topSpeed: speed } = honda.speedStats;
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{topSpeed}</td>
      <td>{color1}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{speed}</td>
      <td>{hondacolor}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
