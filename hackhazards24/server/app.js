const express = require("express");
const mongoose = require("mongoose");
const { mongoURI } = require("./key");
const app = express();
app.get("/", (req, res) => {
  res.send("hello world");
})
mongoose.connect(mongoURI);

mongoose.connection.on("connected", () => {
  console.log("connection is on...all good");
});
mongoose.connection.on("error", (err) => {
  console.log("error is occured");
});
require("./models/user");
require("./models/post");
require(".models/channels")
app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));
// app.use(require("./routes/auth"))?
// Ul0GW9md6mACfJgg

app.listen(5000, () => {
  console.log("server is running");
});
