module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getGame: (req, res) => {
    res.render("game.ejs");
  },
  getGallery3d: (req, res) => {
    res.render("gallery3d.ejs");
  },
  getLearn: (req, res) => {
    res.render("learn.ejs");
  },
  getCommunity: (req, res) => {
    res.render("community.ejs");
  },

  //Artworks 
  getGirl: (req, res) => {
    res.render("artworks/girl-with-pearl-earrings.ejs");
  },
};
