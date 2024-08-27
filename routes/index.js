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
router.get("/exercises", function (req, res) {
  res.render("exercises");
});
router.get("/videos", function (req, res) {
  res.render("videos");
});
router.get("/friends", function (req, res) {
  res.render("friends");
});
router.get("/gym", function (req, res) {
  const gyms = [
    {
      id: 1,
      name: "Gym 1",
      lat: 28.6139,
      lng: 77.209,
      price: 1500,
      rating: 4.5,
      features: ["Cardio", "Weightlifting", "Yoga"],
      reviews: [
        { user: "Alice", comment: "Great gym with modern equipment!" },
        { user: "Bob", comment: "Friendly staff and clean facilities." },
      ],
    },
    {
      id: 2,
      name: "Gym 2",
      lat: 28.7041,
      lng: 77.1025,
      price: 2000,
      rating: 4.2,
      features: ["CrossFit", "Swimming Pool"],
      reviews: [
        { user: "Charlie", comment: "Awesome place for CrossFit training!" },
      ],
    },
    // Add more gyms as necessary
  ];
  res.render("gym", { gyms });
});
module.exports = router;
