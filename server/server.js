// server.js
const express = require("express");
const cors = require("./cors");

const app = express();
const port = 8090;

// CORS middleware
app.use(cors);

app.get("/", function(_, res) {
  res.send("Welcome to API Server!");
});

app.get("/api/get", function(_, res) {
  const data = {
    drinks: [
      { name: "Bloody Mary", drunkness: 3 },
      { name: "Martini", drunkness: 5 },
      { name: "Scotch", drunkness: 10 }
    ],
    tagline:
      "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else."
  };

  const json = JSON.stringify(data);
  res.json(json);
});

app.listen(port);
console.log(`Web server running and listening to post -> ${port}`);
