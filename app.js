// app.js - versión SEGURA
require("dotenv").config();
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

if (!GITHUB_TOKEN) {
  console.error("Falta GITHUB_TOKEN en el archivo .env");
  process.exit(1);
}

console.log("Conectando a la API de GitHub...");
fetch("https://api.github.com/user", {
  headers: { Authorization: `Bearer ${GITHUB_TOKEN}` }
})
  .then(r => console.log("Respuesta:", r.status))
  .catch(e => console.error(e));
