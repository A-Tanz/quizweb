//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/taskthreeDB");

let app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

const quesSchema = new mongoose.Schema({
  question:String,
  option1:String,
  option2:String,
  option3:String,
  option4:String,
  coption:String
});
const Ques = mongoose.model("Ques",quesSchema);
/*
const ques = new Ques({
  question:"Who's the Prime Minister of India? ",
  option1:"Rahul Gandhi",
  option2:"Amit Shah",
  option3:"Narendra Modi",
  option4:"Arvind Kejriwal",
  coption:"Narendra Modi"
});
ques.save();
const ques = new Ques({
  question:"Odd One out ",
  option1:"Delhi",
  option2:"Andanam & Nicobar Islands",
  option3:"Chandigarh",
  option4:"Tamil Nadu",
  coption:"Tamil Nadu"
});
ques.save();
const ques = new Ques({
  question:"Which Year it is ? ",
  option1:"2020",
  option2:"2002",
  option3:"2019",
  option4:"2022",
  coption:"2022"
});
ques.save();
*/
/*
const ques = new Ques({
  question:"2+2=? ",
  option1:"4",
  option2:"22",
  option3:"5",
  option4:"8",
  coption:"4"
});
ques.save();
*/

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
})
app.get("/explore",function(req,res){
  Ques.find({},function(err,ques){
    res.render("explore",{ques:ques});
  });
});
app.get("/ans",function(req,res){
  Ques.find({},function(err,ques){
    res.render("ans",{ques:ques});
  });
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
