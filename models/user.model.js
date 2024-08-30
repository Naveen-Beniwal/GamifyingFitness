const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

// mongoose
//   .connect("mongodb://127.0.0.1:27017/ProjectSIH", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected successfully"))
//   .catch((err) => console.error("MongoDB connection error:", err));

require("dotenv").config();

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

userSchema.plugin(passportLocalMongoose); // This handles password hashing and validation

const User = mongoose.model("User", userSchema);

module.exports = User;
