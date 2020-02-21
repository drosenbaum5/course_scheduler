const db = require("../models/")
const mongoose = require("mongoose");
const express = require("express");

const app = express();

// Load index.htnml file
app.get("/", (err, res) => {
    res.render("index.html");
})


db.Student.create({ name: "Dan Rosenbaum"})
  .then(dbStudent => {
      console.log(dbStudent);
  })
   .catch (( { message} ) => {
       console.log(message);
   });

app.get("/api/students", (req,res) => {
    db.Student.find({})
    .then(dbStudent => {
        console.log(dbStudent);
        res.json(dbStudent);
       
    }) .catch(err => {
        res.json(err);
      });
})