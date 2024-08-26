var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Gamify Fitness" });
});
router.get("/login", function (req, res) {
  res.render("login");
});
router.get("/signUp", function (req, res) {
  res.render("signUp");
});
router.get("/error", function (req, res) {
  res.render("error");
});
module.exports = router;
