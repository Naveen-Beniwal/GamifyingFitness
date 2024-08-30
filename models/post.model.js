const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  imageText: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  currentDate: {
    type: Date,
    default: Date.now, // Use a function to get the current date when the document is created
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId], // Assuming likes are references to User objects
    default: [], // Initialize with an empty array
  },
});

module.exports = mongoose.model("Post", postSchema);
