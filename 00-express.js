let express = require("express"),
  app = express();

app
  .get("/", (req, res) => {
    res.send("Contact");
  })
  .listen(3000);

console.log("Iniciando Express en el puerto 3000");


