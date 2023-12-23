const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
  const locals = {
    title: "Node JS Blog",
    description: "Created with Node JS, Express & MongoDb",
  };
  res.render("index", locals);
});

router.get("/about", (req, res) => {
  res.render("about");
});
module.exports = router;
