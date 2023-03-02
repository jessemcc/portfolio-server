const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 8080;
const projectRoute = require("./routes/projectRoute");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/project", projectRoute);
app.use("/project/:projectid", projectRoute);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
