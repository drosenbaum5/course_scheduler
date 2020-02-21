const express = require("express");
const mongoose = require("mongoose");
const db = require("./models");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/university_db", {
  useNewUrlParser: true
});

// require("./routes/apiRoutes");

// Load index.htnml file
app.get("/", (err, res) => {
  res.render("index.html");
});

// GET all students
app.get("/api/students", (req, res) => {
  db.Student.find({})
    .then(dbStudent => {
      console.log(dbStudent);
      res.json(dbStudent);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET all subjects
app.get("/api/subjects", (req, res) => {
  db.Subject.find({})
    .then(dbSubject => {
      console.log(dbSubject);
      res.json(dbSubject);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET all courses
app.get("/api/courses", (req, res) => {
    db.Course.find({})
    .then(dbCourse => {
        console.log(dbCourse);
        res.json(dbCourse);
    });
});

// Create new student
db.Student.create({ name: "Dan Rosenbaum" })
  .then(dbStudent => {
    console.log(dbStudent);
  })
  .catch(({ message }) => {
    console.log(message);
  });

  // Create new Subject
db.Subject.create({ name: "Math" })
.then(dbSubject => {
    console.log(dbSubject);
})
.catch(({ message }) => {
    console.log(message);
  });

db.Course.create( {name: "Calculus"})
 .then(dbCourse =>{
     console.log(dbCourse);
 })
 .catch(({ message }) => {
    console.log(message);
  });


// Listen on this port when server is started
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
