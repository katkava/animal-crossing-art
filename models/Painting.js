const mongoose = require("mongoose");

const PaintingSchema = new mongoose.Schema({
 _id: {
  type: mongoose.Schema.Types.ObjectId,
 },
  name: {
    type: String,
  },
  artist: {
    type: String,
  },
  year: {
    type: String,
  },
  image: {
    type: String,
  },
  details: {
    type: String,
  },
});

module.exports = mongoose.model("Painting", PaintingSchema);
