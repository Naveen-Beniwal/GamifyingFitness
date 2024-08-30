const express = require("express");
const router = express.Router();
const User = require("../models/user.model"); // Import the User model
const Post = require("../models/post.model");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const upload = require("./multer");
// Passport Local Strategy
passport.use(new LocalStrategy(User.authenticate()));

// Passport Session Setup
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// GET home page
router.get("/", (req, res) => {
  res.render("index", { title: "Gamify Fitness" });
});

// Register Route
router.post("/register", function (req, res) {
  console.log("Registration Data Received:", req.body);

  // Create a new user object without the password
  const userData = new User({
    username: req.body.username,
    email: req.body.email,
    fullName: req.body.fullName,
  });

  // Register the user with the password
  User.register(userData, req.body.password) // Use User instead of userModel
    .then(function (user) {
      console.log("User registered successfully:", user);
      passport.authenticate("local")(req, res, function () {
        res.redirect("/profile");
      });
    })
    .catch(function (err) {
      console.error("Error registering user:", err);
      res.redirect("/signup");
    });
});

// Login Route
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
    failureFlash: true,
  }),
  function (req, res) {}
);

// Middleware to Check If Logged In
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error_msg", "Please log in to view this resource");
  res.redirect("/login");
}

// Profile Route
router.get("/profile", isLoggedIn, async (req, res) => {
  const user = await User.findOne({
    username: req.session.passport.user,
  }).populate("posts");
  res.render("profile", { user });
});

// Login Route
router.get("/login", (req, res) => {
  res.render("login");
});

// Signup Route
router.get("/signup", (req, res) => {
  res.render("signup");
});

// Error Route
router.get("/error", (req, res) => {
  res.render("error");
});

// Other Routes (e.g., Exercises, Videos, Friends, Gym)
router.get("/exercises", (req, res) => {
  res.render("exercises");
});
router.get("/explore", (req, res) => {
  res.render("explore");
});

router.get("/videos", (req, res) => {
  res.render("videos");
});

router.get("/friends", (req, res) => {
  res.render("friends");
});

router.get("/gym", (req, res) => {
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
  ];
  res.render("gym", { gyms });
});
// upload route for posts
router.post(
  "/upload",
  isLoggedIn,
  upload.single("file"),
  async function (req, res) {
    try {
      if (!req.file) {
        console.log("No file uploaded");
        return res.status(400).send("No files were given");
      }

      const user = await User.findOne({ username: req.session.passport.user });
      if (!user) {
        console.log("User not found");
        return res.status(404).send("User not found");
      }

      const post = await Post.create({
        image: req.file.filename,
        imageText: req.body.fileCaption,
        user: user._id,
      });

      user.posts.push(post._id);
      await user.save();

      res.redirect("/profile");
    } catch (err) {
      console.error("Upload error:", err);
      res.status(500).send("Server error");
    }
  }
);

// logout route
router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});
module.exports = router;
