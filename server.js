var express = require("express");
var bedroom = require('./data/bedroom.json'); // your json file path
var living_room = require('./data/living_room.json'); // your json file path

var app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/bed_room", function(req, res, next) {
  res.send(bedroom);
});
app.get("/living_room", function(req, res, next) {
    res.send(living_room);
  });
app.listen(5000, () => console.log('Example app listening on port 5000!'))