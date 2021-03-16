/* eslint-disable no-console */
import "./index.css";
import numeral from "numeral";

const value = numeral(1000).format("$0,0.00");
// debugger;
console.log(`value = ${value}`);
