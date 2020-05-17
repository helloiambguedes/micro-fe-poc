import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";

const element = document.createElement("div");
element.id = "reactApp";
element.style.border = "1px solid blue";
element.style.padding = "32px";
document.body.appendChild(element);

ReactDOM.render(<App />, element);
