const { default: hamburguerMenu } = require("./menu_hamburguesa.js");
const d = document;

d.addEventListener('DOMConentLoaded',(e)=>{
     hamburguerMenu(".panel-btn","panel");
});