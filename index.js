require("dotenv").config();
const express = require("express");
const expressLayout = require("express-ejs-layouts");
const mainRoutes = require("./server/routes/main");
//Create new express app
const app = express();
const PORT = 3200 || process.env.PORT;

app.use(express.static("public"));
//Templating engine:
app.use(expressLayout);
app.set("layout", "./layouts/main");
//Set view engine:
app.set("view engine", "ejs");

app.use("/", mainRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
