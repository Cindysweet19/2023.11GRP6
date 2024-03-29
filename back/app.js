const express = require('express');
const app = express()


const port = 3001

//Conexión a BD MongoDB
const mongoose = require('mongoose');

const usuario = "admin"
const password = "admin"
const dbName = "hackatonfinal"

const uri = `mongodb+srv://${usuario}:${password}@cluster0.kp13ouf.mongodb.net/${dbName}`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))

app.use(express.json());


require("./app/routes/usuario-router")(app);
require("./app/routes/categoria-router")(app);


app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
  });