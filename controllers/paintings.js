const Painting = require("../models/Painting");
// const response = require("v-response")

module.exports = {
  getLearn: async (req, res) => {
    try {
      const paintings = await Painting.find().sort({ year: "desc" }).lean();
      res.render("learn.ejs", {
        paintings: paintings,
        name: req.name,
        artist: req.artist,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getPainting: async (req, res) => {
    try {
      const painting = await Painting.findById(req.params.id);
      res.render("painting.ejs", {
        painting: painting,
        name: req.name,
        artist: req.artist,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getGame: async (req, res) => {
    try {
      const paintings = await Painting.find().sort({ year: "desc" }).lean();
      res.render("game.ejs", {
        paintings: paintings,
        name: req.name,
        artist: req.artist,
      });
    } catch (err) {
      console.log(err);
    }
  // },
  // createPainting = (req, res) => {
  //     // Upload image to cloudinary
  //     let painting_body = req.body;
  //     const new_painting = new Painting_model(painting_body);
  //     new_painting.save()
  //       .then(saved => {
  //         if(!saved) {
  //           return res.status(400)
  //           .json(response.ApiResponse(false, 400, "unable to save painting please try again"))
  //         }
  //         if(saved) {
  //           return res.status(201)
  //           .json(response.ApiResponse(true, 201, "painting created successfully", saved))
  //         }
  //       }).catch(error => {
  //         return res.status(500)
  //         .json(reponse.ApiResponse(false, 500, "oops an error occurred", undefined, error))
  //       })
  }
};
