const express = require('express'); 
const app = express();                            
var db = require('./database/connection.js');
console.log("db",db)

app.get("/", (req, res) => {
    res.json({ message: "Welcome application." });
  });

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
  });

