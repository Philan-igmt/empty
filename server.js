const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("url", () => console.log("database connected"));

const ImageRoute = require("./routes/Images");

app.get("/", (req, res) => {
  res.send("we are on home");
});

app.use("/images", ImageRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
