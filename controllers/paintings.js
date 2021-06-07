const Painting = require("../models/Painting");

module.exports = {
  
  getLearn: async (req, res) => {
    try {
      const paintings = await Painting.find().sort({ year: "desc" }).lean();
      res.render("learn.ejs", { paintings: paintings, name: req.name, artist: req.artist });
    } catch (err) {
      console.log(err);
    }
  },
  getPainting: async (req, res) => {
    try {
      const painting = await Painting.findById(req.params.id);
      res.render("painting.ejs", { painting: painting, name: req.name, artist: req.artist });
    } catch (err) {
      console.log(err);
    }
  },
};
