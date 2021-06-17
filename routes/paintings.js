const express = require("express");
const router = express.Router();
const paintingsController = require("../controllers/paintings");

router.get("/:id", paintingsController.getPainting);
// router.post("/create", paintingsController.createPainting)

module.exports = router;
