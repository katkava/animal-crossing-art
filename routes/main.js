const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/game", homeController.getGame);
router.get("/gallery3d", homeController.getGallery3d);
router.get("/learn", homeController.getLearn);
router.get("/community", homeController.getCommunity);

//routes for Community login 
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/feed", ensureAuth, postsController.getFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

//routes for artworks 
router.get("/artworks/girl-with-pearl-earrings", homeController.getGirl);

module.exports = router;
