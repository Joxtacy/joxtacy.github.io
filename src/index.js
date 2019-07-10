import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./js/components/presentational/Welcome.jsx";

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Welcome />, wrapper) : false;
