const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI, { useMongoClient: true });

const app = express();

app.get("/", (req, res) => res.send({ hi: "TOMCAT" }));

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);