const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();


app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/university_db", { useNewUrlParser: true });

require("./routes/apiRoutes");

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
})