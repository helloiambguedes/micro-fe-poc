import initVanillaApp from "./entry";

const element = document.createElement("div");
element.id = "vanillaApp";
element.style.border = "1px solid black";
element.style.padding = "32px";
document.body.appendChild(element);

initVanillaApp();
