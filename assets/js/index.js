
// USO DE MI FW

import { Render } from "./Render.js";
import { veronicaSuperPower } from "./VeronicaSuperPower.js";
import { convertir } from "./convertir.js";






const app = new Render("app");


const JSON_LOCAL = "./js/beer.json";
const JSON_LOCALS = "./js/beers.json";
const API_URI = "https://api.sampleapis.com/beers/stouts";

app.fetchData(API_URI, veronicaSuperPower,convertir);
