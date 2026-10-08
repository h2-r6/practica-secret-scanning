// app.js - versión INSEGURA
const GITHUB_TOKEN = "***REMOVED***";

console.log("Conectando a la API de GitHub...");
fetch("https://api.github.com/user", {
  headers: { Authorization: `Bearer ${GITHUB_TOKEN}` }
})
  .then(r => console.log("Respuesta:", r.status))
  .catch(e => console.error(e));
