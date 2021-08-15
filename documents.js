const mongoose = require("mongoose");
const Painting = require("./models/Painting");
const connectDB = require("./config/database");
require("dotenv").config({ path: "./config/.env" });
let db = mongoose.connection;
connectDB();
db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("Connection Successful!");

  let paintings = [
    {
      name: "The Night Watch",
      artist: "Rembdrandt",
      year: "1642",
      image: "https://imgur.com/s9juhF3.png",
      details: "Baroque style by famed Dutch artist",
      fakeImage: "https://imgur.com/FeYXjHK.png",
      fakeDescription:
        "The man in front (Frans Banning Coq) is missing his fancy hat",
    },
    {
      name: "Mona Lisa",
      artist: "Leonardo da Vinci",
      year: "1642",
      image: "https://imgur.com/vaxQmaW.png",
      details: "Renaissance Italy",
      fakeImage: "https://imgur.com/O0i44YJ.png",
      fakeDescription: "Mona Lisa's brows are suspiciously too on fleek... ",
    },
    {
      name: "The Blue Boy",
      artist: "Thomas Gainsborough",
      year: "1770",
      image: "https://imgur.com/HPvPrj4.png",
      details: "British",
      fakeImage: "https://imgur.com/Af4DN77.png",
      fakeDescription:
        "Seems the boy was taking too many hair vitamins, those luscious locks are TOO luscious for a sneaky reason!",
    },

    {
      name: "Girl with a Pearl Earring",
      artist: "Johannes Vermeer",
      year: "1665",
      image: "https://imgur.com/2CxIjnO.png",
      details: "Dutch Golden Age",
      fakeImage: "https://imgur.com/3Ds6Qyf.png",
      fakeDescription:
        "Pay attention to the earrings. It's Girl with a Pearl Earring, not Girl with a Starry Night ;) ",
    }
  ];

  // save multiple documents to the collection referenced by Painting Model
 Painting.collection.insertMany(
    paintings,
   { ordered: false }),
    function (err, docs) {
      if (err) {
        return console.error(err);
      } else {
        console.log("Multiple documents inserted to Collection");
      }
    }
});
