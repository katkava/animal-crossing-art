const mongoose = require("mongoose");

const PaintingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  fakeImage: {
    type: String,
  },
  fakeDescription: {
    type: String,
  },
});

module.exports = mongoose.model("Painting", PaintingSchema);
