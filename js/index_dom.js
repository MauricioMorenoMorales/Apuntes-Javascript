import hamburguerMenu from "./dom/menu_hamburguesa.js"
// const { default: hamburguerMenu } = require("./menu_hamburguesa.js");
const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
     hamburguerMenu(".panel-btn",".panel",".menu a");
});